import { type H3Event } from 'h3'
import { type GenericSchema, type InferOutput, safeParse} from 'valibot'
import { PublicUser } from './user'
import * as v from "valibot"

export async function ReadBody<T extends GenericSchema>(e: H3Event, schema: T): Promise<InferOutput<T>> {
	const result = await readBody(e)

	if (!schema) 
        return result

	const parse = safeParse(schema, result)

	if (parse.success) 
        return parse.output

	throw createError({ statusText: parse.issues[0].message, status: 400, data: parse.issues })
}

export type WebData<T> = {
	data: T
	event: H3Event
	user: PublicUser
}

export function WrapRequest<T>(e: H3Event, user: PublicUser, data: T): WebData<T> {
	return { data, event: e, user }
}

export function GetPagination(e: H3Event) {
	
	const query = getQuery(e)

	const result = v.parse(PaginationSchema, query)

	return {
		page: result.page - 1,
		pageSize: result.pageSize
	}
}

export function GetSearch(e: H3Event) {
	const query = getQuery(e)

	const result = v.parse(SearchSchema, query)

	return result
}

export function GetIdFromRoute(e: H3Event, name: string) {
	const param = getRouterParam(e, name, { decode: true})

	const result = v.parse(IdSchema, param)

	return result
}