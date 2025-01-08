export const NotFound = (message: string) => {
  throw createError({ statusText: message, status: 404 })
}

export const BadPassword = (message: string) => {
  throw createError({ statusText: message, status: 401 })
}

export const ValidationError = (message: string) => {
  throw createError({ statusText: message, status: 400 })
}

export const ServerError = (message: string) => {
  throw createError({ message: message, statusText: message, status: 500 })
}

export const MustExist = <T>(value: undefined | T, message: string) : T => {

  if (value === undefined)
    return NotFound(message)

  return value
}

export type APISuccess<T> = {
  success: true
  message: string
  data?: T
}

export const Success = <T>(message: string, data?: T) : APISuccess<T> => {
  return {
    success: true,
    message,
    data
  }
}