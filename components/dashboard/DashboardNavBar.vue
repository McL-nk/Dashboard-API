<script setup>
const route = useRoute()
</script>

<template>
    <div class="menu">

    <div class="buttons" >
        
        <nuxt-link id="overview" class="dash-button" :to="'/dashboard/server/'+route.params.id"><img alt="Overview icon" src="@/assets/stats.svg" class="dash-icon">Overview</nuxt-link>
        <nuxt-link id="settings" class="dash-button" :to="'/dashboard/server/'+route.params.id+'/settings'"><img alt="settings icon" src="@/assets/setting.svg" class="dash-icon">Settings</nuxt-link>
        <nuxt-link id="premium" class="dash-button" :to="'/dashboard/server/'+route.params.id+'/premium'"><img alt="Settings icon"  src="@/assets/plus-round.svg" class="dash-icon">Premium</nuxt-link>
        <div class="dash-category">Features</div>
        <nuxt-link id="modules" class="dash-button" :to="'/dashboard/server/'+route.params.id+'/plugin'"><img alt="modules icon"  src="@/assets/plug.svg" class="dash-icon">Plugin</nuxt-link>
        <nuxt-link id="terminal" class="dash-button" :to="'/dashboard/server/'+route.params.id+'/console'"><img alt="modules icon"  src="@/assets/terminal.svg" class="dash-icon">Console</nuxt-link>
       
    </div>
    
    </div>
</template>

<script>

 

export default {
  name: 'DashNavBar',
 data() {
    return{
     
    
    }
  },
  computed: {
  
  },
 created() {

  },
  methods: {
  }
}
</script>

<style scoped>
body {
    flex-direction: column;
}
.menu {
    top: 0px;
    background-color: #070807d3;
    left: 0px;
    float: left;
    position: absolute;
    height: 93.9vh;
    z-index: 100;
  padding-left: 6px;
  padding-right: 6px;

    min-width: 10%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    top: 57.2px;
  
}
.buttons {
    margin-top: 15px;
    display: flex;
    min-width: 100%;
    width: 100%;
    max-width: 100%;
  
    flex-direction: column;
}

img.dash-icon {
    width: 15px;
    margin-right: 10px;
    margin-bottom: 2.5px;
    color: #ffffff;
   
    -webkit-user-drag: none;
}
.dash-button {
    display: flex;
    align-items: center;
    max-height: 50px;
    height: 40px;
    width: 100%;
    border-radius: 8px 8px 8px 8px;
    color: #ffffff;
    text-decoration: none;
    padding-left: 15px;
}

.dash-button:last-child {
    margin-top: auto;
}

.dash-category{
    font-size: .9em;
    margin: 15px 5px 5px 14px;
    color: #d3d3d3;
}
.dash-button:hover {
    background-color: rgba(98, 103, 105, 0.678);
    max-height: 50px;
    width: 90%;
    color: #ffffff;
    text-decoration: none;
}
</style>