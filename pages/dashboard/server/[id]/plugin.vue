<template>
       <dashboard-nav-bar/>
       <dashboard-top-nav-client></dashboard-top-nav-client>
   <div class="container">
   <div class="server-container">
  
     <div class="container-hell">
       
       <h1>Discord webhook</h1>
          <input class="ServerNameInput" v-model="name2" name="name2" type="text" v-on:keyup.enter="updateUUID()" placeholder="Server UUID" >
          <h2>Events</h2>
     <div class="toggle-input-blocks-container">
      <div>
        <h3>Player Join</h3>
        
      <switchButtonClient id="player_join" v-on:click.stop="UpdateEvent('player_join')"></switchButtonClient>
      </div>
      <div>
        <h3>Player Leave</h3>
      <switchButtonClient id="player_leave" v-on:click.stop="UpdateEvent('player_leave')"></switchButtonClient>
      </div>
      <div>
        <h3>Player Death</h3>
      <switchButtonClient id="player_death" v-on:click.stop="UpdateEvent('player_death')"></switchButtonClient>
      </div>
      <div>
        <h3>Player Chat</h3>
      <switchButtonClient id="player_chat" v-on:click.stop="UpdateEvent('player_chat')"></switchButtonClient>
      </div>
      <div>
        <h3>Advancement</h3>
      <switchButtonClient id="player_advancement" v-on:click.stop="UpdateEvent('player_advancement')"></switchButtonClient>
      </div>
     
     </div>
         
     
     </div>
     
   </div>
 </div>
</template>

<script>
import DashboardTopNavClient from '~/components/dashboard/DashboardTopNav.client.vue';
import switchButtonClient from "~/components/dashboard/SwitchButton.client.vue"
export default {
  name: 'DiscordView',
  components: {
 switchButtonClient,
    DashboardTopNavClient
 
  },
  data() {
    return{
      name1: "loading...",
      name2: "",
      server: {name: "fuck", events: {"player_join": true, "player_leave": true, "player_death": true, "player_chat": true, "player_advancement": true}},
      services: []
    }
  },
  computed: {
  


  },
  mounted() {
   

    

  
    this.name1 = this.server.name
    this.name2 = this.server.webhook

   
this.updateSwitches()
  },
 
  methods: {
        updateUUID(){
         console.log(this.$route.params.id, this.name2)
         serverService.changeWebhook(this.$route.params.id, this.name2).then(server => {
           
            this.server = server.server
          
            this.name2 = server.server.webhook
    
         })
       },
       updateSwitches(){
for(const event in this.server.Events){
 
    document.getElementById(event).firstChild.checked = this.server.Events[event]
   }
       },
       UpdateEvent(e){
        let checked = document.getElementById(e).firstChild.checked
        if(this.server.Events[e] == checked) return
        serverService.changeEvent(this.$route.params.id, e, checked).then(server => {
           
            this.server = server.server
          
           this.updateSwitches()
    
         })
       }
     
  },

};
</script>


<style scoped>

h1, h3, h2{
     color:#ffffff;
}

.toggle-input-blocks-container {
    margin: auto;
    justify-content: center;
    margin-top: 86px;
    display: flex;
    flex-wrap: wrap;
}

.toggle-input-blocks-container div {
    display: flex;
    flex-direction: column;
    background-color: #1d252b;
    box-shadow: 2.8px 4.8px 10.6px rgb(0 0 0 / 7%);
    padding: 5px;
    align-items: center;
    width: 180px;
    /* max-width: 350px; */
    margin: 6px;
    border-radius: 8px;
    justify-content: center;
    height: 100px;
}

.container{
    margin-left: 10%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container-hell{
  flex-direction: column;
  width: 100%;
  margin-right: 15px;
  margin-left: 10px;
 
}

.server-container{
     background-color: #070807d3;
     margin-top: 10px;
         height: 80vh;
  width: 80%;
      display: flex;
    flex-direction: row;
    justify-content: top;
   
    border-radius: 10px;
}
.ServerNameInput {
  outline-offset: 2px;
  height: 45px;
    width: 50%;
    min-width: 0px;
    margin: 0.75rem;
    padding: 1rem;
    margin-top: 1rem;
    border-width: 1px;
   border-radius: 8px;
   text-align: center;
    font-size: 2rem;
    line-height: 1.25rem;
    color:#ffffff;
        background-color: #1d252b;
        border-color: rgb(44, 44, 44);
}

.server-list-container{
     background-color: #343a40!important;
     margin-top: 10px;
         height: 25%;
  width: 100%;
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
.server-list::-webkit-scrollbar{
  display: none;
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
    transition: all .2s ease;
}



.server-info {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0.9% 0.6%;
    color: rgb(255, 255, 255);
}
h3{
  display: block
}
.button-container{
  float: top;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  height: 50px;
  width: 100%;
  margin-bottom: -25px;
  border-radius: 10px;
  background-color: #343a40!important;
}

.button-container2{
     margin: 0 0.5% 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
}

.smol{
 padding-top: 0px;
 padding-bottom: 0px;
 padding-left: 10px;
 padding-right: 10px
}

.button{
  margin-top: 1px;
  margin-right: 10px;
  height: 35px;
  width: 125px
}
</style>