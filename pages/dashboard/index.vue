<template>
  <top-nav-client></top-nav-client>
  <div class="container">
    <div class="server-list-container">
      <div class="server-list" :key="number1">
        <div
          v-for="server of servers"
          :key="server.id"
          class="server-container"
        >
          <div class="server">
            <div class="server-info">
              <div class="server-name">
                {{server.name}}
              </div>
            </div>
            <div class="button-container2">
              <nuxt-link
                v-if="server.mutual"
                class="button smol"
              
                :to="'dashboard/server/id='+server.id"
                >Manage</nuxt-link
              >
              <nuxt-link
                v-if="!server.mutual"
                class="button smol alt"
                v-on:click="Invite(server.id)"
                :to="'/dashboard'"
                >Invite</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
    middleware: ["auth"]
    // or middleware: 'auth'
})

import { defineComponent } from '@vue/composition-api'


import TopNavClient from '~/components/TopNav.client.vue'

export default defineComponent({
  components: { TopNavClient },
    setup() {

    },
    created(){
    this.getmcServers()
  },
    data: function() {
        return {
            servers: [],
            number1: 0
        }
    },
    methods: {
        async getmcServers() {
        let response = await useAuth().getServers()

        if(response){
          this.servers = response
        }else{
          this.servers = []
        }
      },
       Invite(id){
        let win = window.open("https://discord.com/api/oauth2/authorize?client_id=951542065567793234&permissions=402655248&scope=bot%20applications.commands&guild_id=" + id, "", "menubar=no,resizable=no,width=500,height=850")
        var pollTimer = window.setInterval(() => {

        if (win.closed !== false) { // !== is required for compatibility with Opera
          window.clearInterval(pollTimer);
          this.getmcServers()
        }
        }, 200)

      }
    },

})
</script>

<style scoped>
body {
  height: 100vh;
  overflow: hidden;
}

.container {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.server-list-container {
  background-color: #070807d3;
  margin-top: 10px;
  height: 85vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  border-radius: 10px;
}

.server-list {
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  margin: 5px;
  row-gap: 0px;
}
.server-list::-webkit-scrollbar {
  display: none;
}
.server-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  column-gap: 0px;
  transition: all 0.2s ease;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.4));
  background: rgba(0, 0, 0, 0.281);
}

.server-name {
  font-size: 1.5em;
  min-width: 400px;
  max-width: 400px;
  padding-left: 5px;
  word-wrap: break-word;
}

.server {
  height: 50px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.server-info {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0.9% 0.6%;
  color: rgb(255, 255, 255);
}
h3 {
  display: block;
}

.button-container2 {
  margin: 0 0.5% 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
}

.smol {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
}

.button {
  margin-top: 1px;
  margin-right: 10px;
  height: 35px;
  width: 125px;
}

</style>
