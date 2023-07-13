<script setup>
const route = useRoute()
const loggedIn = useAuth().IsAuthorized()
</script>

<template>
  <nav>
    <div class="brand">
      <img alt="Mclink logo" src="/logo.png" />
      <nuxt-link class="title" to="/">McLink</nuxt-link>
    </div>
 
    <div class="buttons">  
    <nuxt-link v-if="loggedIn" class="button alt" to="/dashboard">Servers</nuxt-link>
 
    </div>
  </nav>
</template>

<script>

export default {
  name: "DashTopNav",

  

  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


nav,
.navs,
nav a,
nav .brand {
  display: flex;
  align-items: center;
  justify-content: center;
  
  flex-direction: row;
}
nav {
    background-color: #070807d3;
  gap: 3%;
  z-index: 10000;
  overflow: hidden;
  position: fixed;
  /* Set the navboi to fixed position */
  top: 0;
  left: 0;
  /* Position the navboi at the top of the page */
  width: 100%;
  /* Full width */
  height: 50px;
  padding: 3.6px;
  text-align: center;
}
nav .brand {
  gap: 25.5px;
}

nav .brand {
  height: 95%;
  max-height: 95%;
  align-self: center;
  margin-left: 0.5%;
  gap: 4.6px;
}
nav .brand img {
  border-radius: 100%;
  height: 90%;
  max-height: 90%;
}

/* Links inside the navboi */


.buttons{
    float: right;
    margin-left: auto;
}
nav .title {
font-size:1.8rem;
    color: rgb(212, 0, 255);
    display: flex;
    filter: drop-shadow(3px 20px 10px rgba(0, 0, 0, 0.1));
    font-weight: bold;
    text-decoration: none;
}

.navs {
      gap: 28.5px;
}
.navs a {
    
  font-weight: bold;
  font-size: 20px;
  color: #f2f2f2;
  text-align: center;
  z-index: 5000;
  text-decoration: none;
}
nav a.link:hover {
  color: rgb(219, 42, 255);
  transition-duration: 0.5s;
}

.bold{
  font-weight: bold;
}

.bolder {
  font-weight: bolder;
}
nav a.button.alt{
  transition: background-position 0.56s ease-in-out;
}
nav a.button {

  z-index: 50;
  height: 10px;
  width: 75px;
  color: #f2f2f2;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  padding: 14px 16px;
  text-decoration: none;
  transition: all 0.2s ease-out;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  float: right
}

.button.manage {
  margin-left: 1px;
  background: rgb(212, 0, 255);
}

.button.manage:hover {
  background-color: rgb(164, 0, 197);
}

.button.invite {
  background: hsl(120, 86%, 42%);
}

.button.invite:hover {
  background-color: hsl(120, 61%, 51%);
}
</style>
