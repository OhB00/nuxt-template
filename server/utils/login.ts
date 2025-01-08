import { type H3Event } from "h3"

export default async (e: H3Event, login: LoginRequest) => {
  
  consola.start(`Log in request for '${login.username}'.`)

  let user = await GetUserByUsername(login.username)

  user = MustExist(user, 'This user does not exist.')

  const result = await verifyPassword(user.password, login.password)

  if (!result) {

    consola.error('Authentication failed for user:', login.username)

    BadPassword(`Incorrect username or password.`)
  }

  consola.success('Authentication successful for user:', login.username)

  await setUserSession(e, {
    user: ToPublicUser(user),
    session_start: Date.now(),
  })  

  return Success('Logged in successfully.')
}