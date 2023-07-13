class UserService {
    async GetServers() {
       
        let data = await $fetch("/api/v1/user/servers", { method: 'get', })

        return data

    }
}

export default new UserService()