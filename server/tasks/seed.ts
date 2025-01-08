export default defineTask({
    meta: {
        name: 'db:seed',
        description: 'Run database seed task'
    },
    async run() {
        
        consola.info('Running DB seed task...')

        const users: NewUser[] = [
            {
                username: 'root',
                email: 'root@email.local',
                password: await hashPassword('root'),
            }
        ]

        await useDrizzle().insert(tables.users).values(users).returning()

        consola.success('DB seed task completed')

        return { result: 'success' }
    }
})
