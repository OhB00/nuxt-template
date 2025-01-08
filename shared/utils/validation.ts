import * as v from "valibot"

export { v }

export const MAX_USERNAME_LENGTH = 30
export const MAX_PASSWORD_LENGTH = 256

export const UsernameSchema = v.pipe(
    v.string('Username must be a string.'), 
    v.minLength(1, 'Username cannot be empty'), 
    v.maxLength(MAX_USERNAME_LENGTH, `Username must be shorter than ${MAX_USERNAME_LENGTH} characters.`)
)

export const PasswordSchema = v.pipe(
    v.string('Password must be a string.'), 
    v.minLength(1, 'Password cannot be empty'),
    v.maxLength(MAX_PASSWORD_LENGTH, `Password must be shorter than ${MAX_PASSWORD_LENGTH} characters.`)
)

export const LoginSchema = v.object({
	username: UsernameSchema,
	password: PasswordSchema
})

// https://stackblitz.com/edit/nuxt-ui-n8u64pe4?file=app.vue
export const WrapSchema = <T extends v.GenericSchema>(s: T) => v.object({
    value: s
})

export type LoginRequest = v.InferOutput<typeof LoginSchema>

/*
    Other Schemas:
    + For querystring
    + For route params
*/

export const PaginationSchema = v.object({
    page: v.optional(v.pipe(v.string(), v.transform(Number), v.integer('Page must be an integer.')), '1'),
    pageSize: v.optional(v.pipe(v.string(), v.transform(Number), v.integer('Page size must be an integer.')), '10'),
})

export const SearchSchema = v.object({
    q: v.optional(v.string(), ''),
})

export const IdSchema = v.pipe(v.string(), v.transform(Number), v.integer('ID must be an integer.'))

export type Pagination = v.InferOutput<typeof PaginationSchema>