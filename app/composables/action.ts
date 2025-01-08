import type { UseFetchOptions } from "#app"
import { type FetchContext, type ResponseType } from "ofetch"
import { type H3Error } from "h3"
import { type NitroFetchRequest, type NitroFetchOptions } from "nitropack"

type ActionConfig = {
  name?: string
  success_message?: string
  error_message?: string
}

type ActionContext<T> = {
  config: ActionConfig
  data: T
}

export type ActionResult<T> = 
  | { success: true; data: T }
  | { success: false; error?: H3Error }

  
function ToastError(config: ActionConfig, err: H3Error) {
  const toast = useToast()

  let description = "Unknown Error."

  if (err.statusMessage !== undefined && err.statusMessage !== "") {
    description = err.statusMessage
  }
  else if (err.message !== undefined && err.message !== "") {
    description = err.message
  }

  toast.add({
    title: config.error_message,
    description,
    icon: "i-heroicons-exclamation-triangle",
    color: "error"
  })
}

function ToastSuccess(config: ActionConfig, response: any) {
  const toast = useToast()

  if (config.success_message !== undefined) {
    toast.add({
      title: config.success_message,
      color: "success",
      icon: "i-heroicons-rocket-launch"
    })
  }
}
  
export const useAction = <T, R>(fn: (ctx: ActionContext<T>) => Promise<R>, config: ActionConfig = {}) => {
  return async (data: T, pending?: Ref<boolean>): Promise<ActionResult<R>> => {

    consola.start("Starting", config.name ?? "Action")

    function setState(value: boolean) {
      if (pending)
        pending.value = value
    }

    try {

      setState(true)

      const response = await fn({
        config,
        data
      })

      setState(false)

      ToastSuccess(config, response)

      return {
        success: true,
        data: response
      } 

    } catch (err) {

      setState(false)

      if (!(err instanceof Error)) {
        return {
          success: false,
        }
      }

      const nested = (err as H3Error).data as H3Error

      ToastError(config, nested)

      return {
        success: false,
        error: nested
      }
    }     
  }
}

export const use$action = () => {
  
  function Describe(ctx: FetchContext<any, ResponseType>) {
    return `${ctx.options.method ?? 'GET'} ${ctx.request}`
  }

  const $action = $fetch.create({
    onRequest(ctx) {
        consola.start(Describe(ctx))
    },
    onResponse(ctx) {
        consola.success(Describe(ctx))
    },
    onResponseError(ctx) {        
      if (ctx.error !== undefined) 
          consola.error(Describe(ctx), ctx.error)
    },
  })

  return $action
}


export function $action<
  T = unknown, 
  R extends NitroFetchRequest = NitroFetchRequest, 
  O extends NitroFetchOptions<R> = NitroFetchOptions<R>
>(request: R, config: ActionConfig, opts?: O){
  return use$action()(request, opts)
}


export const LoginAction = useAction(async (ctx: ActionContext<LoginRequest>) => {

  const response = await $action('/api/login', ctx.config, { 
    method: "POST",
    body: ctx.data
  })

  return response

}, { name: "Log In", success_message: "Logged in!", error_message: "Could not log in." })

export const LogoutAction = useAction(async () => {

  const { clear } = useUserSession()

  await clear()
  await navigateTo("/")

}, { name: "Log Out", success_message: "Logged out!", error_message: "Could not log out." })