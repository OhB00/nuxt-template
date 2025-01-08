export const useGalleries = (page: Ref<number>) => useFetch('/api/galleries', { method: 'GET', query: { page } })
export const useGallery = (id: number) => useFetch(`/api/galleries/${id}`, { method: 'GET' })

export const useTags = (page: Ref<number>) => useFetch('/api/tags', { method: 'GET', query: { page } })
export const useSearchTags = (q: Ref<string>) => useFetch('/api/tags/search', { method: 'GET', query: { q } })

export const usePublication = (id: number) => useFetch(`/api/publications/${id}`, { method: 'GET' })
export const useSearchPublications = (q: Ref<string>, page: Ref<number>) => useFetch('/api/publications', { method: 'GET', query: { q, page } })

export const useErrorData = (page: Ref<number>) => useFetch('/api/admin/errors', { method: 'GET', query: { page } })

export const useUsers = () => useFetch('/api/admin/users', { method: 'GET' })