
export default defineNuxtRouteMiddleware(async (to, from) => {
  abortNavigation()
  if(useAuth().IsAuthorized() == false){
   
    navigateTo("https://discord.com/api/oauth2/authorize?client_id=951542065567793234&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=email%20identify%20guilds", { external: true })
  }else{
    navigateTo(to)
  }
  })
  