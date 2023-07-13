<script setup>
const loggedIn = useAuth().IsAuthorized()
</script>

<template>
     <div class="paragraph-box">
      <h1>McLink</h1>
        <h2>The ultimate tool for linking your minecraft server to your discord!</h2>
        <div class="buttons">
          <nuxt-link to="/features" class="button">Features</nuxt-link>
          <nuxt-link v-if="loggedIn" class="button alt" to="/dashboard">Dashboard</nuxt-link>
          <nuxt-link v-if="!loggedIn" class="button manage" to="/dashboard">Login</nuxt-link>
        </div>
    </div>


</template>

<script>
export default {
  name: 'HomeParagraph',

}
</script>


<style scoped>

.paragraph-box {
  background-color: #070807d3;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}


h1 {
  color: rgb(212, 0, 255);
  text-shadow: 2px 1px 5px rgb(93 101 255 / 15%);
  font-size: 4rem;
  margin: 2px;
}

h2 {
  color: white;
}




</style>
