export default defineEventHandler(async e => {
	const auth = await ReadBody(e, LoginSchema)

	return await login(e, auth)
})
