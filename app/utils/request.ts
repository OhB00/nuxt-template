import * as v from "valibot"

export function GetIdFromRoute(key: string) {
    const route = useRoute()
    const id = route.params[key]
    const result = v.parse(IdSchema, id)
    return result
}