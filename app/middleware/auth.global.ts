export default defineNuxtRouteMiddleware(async to => {
	const authenticated = to.meta.authenticated
	if (authenticated === undefined || authenticated === false) 
		return

	const { loggedIn } = useUserSession()

	if (!loggedIn.value) {
		return await login(to.fullPath)
	}
})

function login(then: string) {
	return navigateTo(`/login?then=${then}`)
}
