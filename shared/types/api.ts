export type APIPagination<T> = {
  page: number
  pageSize: number
  total: number
  data: T[]
}