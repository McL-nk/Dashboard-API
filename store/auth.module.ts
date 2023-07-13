import userService from "~/services/user.service"
import AuthService from "../services/auth.service"


export const useAuth = defineStore("auth", {

    state: () => ({
       IsAuthorized: false,
       user: {},
     
    }),
    persist: {
        storage: persistedState.cookiesWithOptions({
          sameSite: 'strict',
          
        }),
      },

    actions: {
        async Authorize(code: String){
            let data = await AuthService.Authorize(code)
            this.$state.IsAuthorized = true
            this.$state.user = data.user
           return "done"
        },
        IsAuthorized() {
            
            return this.$state.IsAuthorized
        },
        Getdata(){
            return this.$state
        },
        async getServers(){
            let data = await userService.GetServers()
            return data
        }
    }
    
})