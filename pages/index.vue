<template>
    <top-nav-client></top-nav-client>
    <home-paragraph></home-paragraph>

</template>

<script>
import TopNavClient from "~/components/TopNav.client.vue";



export default defineComponent({
  name: "HomePage",
  components:{TopNavClient},
  setup() {
 
  },
  mounted(){
 
  }
})
</script>

<style>
body {
  background-image: url("./assets/Background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
body,
html,
#app {

  margin: 0;
  padding: 0;
  min-width: 100%;
  width: 100%;
  max-width: 100%;
}
  body::-webkit-scrollbar {
    width: 0.25rem;
  }
  
  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  
  body::-webkit-scrollbar-thumb {
    background: rgb(212, 0, 255);
  }
body {
  /* what the fuck is this fcuking shit bruv be looking like a yehe ass haircut with that big ass space at the top you melt */
    margin-top: -22px;
}
#app {
  font-family: Raleway, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.button {
    margin-left: auto;
    display: flex;
    
    align-items: center;
    width: 75px;
    color: #f2f2f2;
    text-align: center;
    font-weight: bold;
    border-radius: 9px;
    padding: 16px 20px;
    text-decoration: none;
    transition: all 0.2s ease-out;
    /* margin-right: 10px; */
    /* margin-top: 5px; */
    /* margin-bottom: 5px; */
    background: rgb(212, 0, 255);
    border: 1px solid rgb(212, 0, 255);
    justify-content: center;
}

.button.disabled{
  -webkit-filter: grayscale(100%);
filter: grayscale(100%);
}

.button.alt {
	border: 1px solid rgb(212, 0, 255);
	background: linear-gradient(to left, transparent 50%, rgb(212, 0, 255) 50%);
	background-size: 220%;
	background-position: right;
	transition: background-position 0.56s ease-in-out;
}
.button:hover {
  opacity: 0.9;
}

.button.alt:hover {
	background-position: left;
}

</style>