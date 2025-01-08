import { ModalConfirm } from '#components'
import { title } from 'valibot'

export const Confirm = async (title: string, description: string) => {

  const modal = useModal()

  modal.open(ModalConfirm, {
    title,
    description,
    confirm() {
      resolve(true)
    },
    cancel() {
      resolve(false)
    }
  })

  const { promise, resolve } = Promise.withResolvers<boolean>()
  const result = await promise

  await modal.close()

  return result
}
