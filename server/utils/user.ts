export type PublicUser = Omit<User, 'password'>

export function ToPublicUser(user: User) : PublicUser {
  const { password, ...publicUser } = user
  return publicUser
}

export async function GetUserByUsername(username: string) {
  const db = useDrizzle()

  const result = await db.query.users.findFirst({
    where: eq(tables.users.username, username)
  })

  return result
}

export async function GetUserById(id: number) {
  const db = useDrizzle()

  const result = await db.query.users.findFirst({
    where: eq(tables.users.id, id)
  })

  return result
}

export async function ListUsers() {
  const db = useDrizzle()

  const result = await db.query.users.findMany()

  return result.map(ToPublicUser)
}