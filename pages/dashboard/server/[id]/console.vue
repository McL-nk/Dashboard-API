<template>
<head>
  <title>Mclink | {{name1}}</title>
</head>
<dashboard-top-nav-client></dashboard-top-nav-client>
 <dashboard-nav-bar></dashboard-nav-bar>
 <div class="container">
   <div class="server-container">
  
    <div class="container-hell">
        <div class="row p-2">
         <div class="col-sm-3">
						<div class="card bg-dark">
							<div class="card-body bg-dark">
								<h5 class="card-title" id="players_online">Players Online</h5>
								<p class="card-text"><span id="connectedPlayers">{{this.PLAYERS}}</span> / <span id="maxPlayers">{{this.PLAYERS_Max}}</span></p>
								<div class="progress flat-progressbar">
								<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="'width: ' + (this.PLAYERS / this.PLAYERS_Max) * 100 + '%;'" id="playerProgressBar"></div>
								</div>
							</div>
						</div>
					</div>

          <div class="col-sm-3">
						<div class="card bg-dark">
							<div class="card-body bg-dark">
								<h5 class="card-title" id="players_online">CPU</h5>
								<p class="card-text"><span id="connectedPlayers">{{this.CPU_Usage}}%</span> </p>
								<div class="progress flat-progressbar">
								<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="'width: ' + (this.CPU_Usage / 100) * 100 + '%;'" id="CpuProgressBar"></div>
								</div>
							</div>
						</div>
					</div>

          <div class="col-sm-3">
						<div class="card bg-dark">
							<div class="card-body bg-dark">
								<h5 class="card-title" id="players_online">RAM Usage</h5>
								<p class="card-text"><span id="connectedPlayers">{{this.RAM_Usage}} MB</span> / <span id="maxPlayers">{{this.RAM_Max}} MB</span></p>
								<div class="progress flat-progressbar">
								<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="'width: ' + (this.RAM_Usage / this.RAM_Max) * 100 + '%;'" id="RamProgressBar"></div>
								</div>
							</div>
						</div>
					</div>

          <div class="col-sm-3">
						<div class="card bg-dark">
							<div class="card-body bg-dark">
								<h5 class="card-title" id="players_online">TPS</h5>
								<p class="card-text"><span id="connectedPlayers">{{this.TPS_Usage}}</span> / <span id="maxPlayers">20</span></p>
								<div class="progress flat-progressbar">
								<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="'width: ' + (this.TPS_Usage / 20) * 100 + '%;'" id="TpsProgressBar"></div>
								</div>
							</div>
						</div>
					</div>
     </div>
      <div class="card mb-2 bg-dark">
					<div class="card-body overflow-auto text-light bg-dark console" id="consoleTextArea">{{}}</div>
				</div>
        <div class="input-group mb-3">
					<input type="text" class="form-control bg-dark text-light" v-model="command" name="command" id="commandInput" placeholder="Command input..." >
					<div class="input-group-append ">
						<button class=" button alt" v-on:click="sendCommand()" type="button" id="sendCommandButton" >Send</button>
					</div>
				</div>
    </div>
   
        </div>
 </div>
</template>
<script>

import DashboardTopNavClient from '~/components/dashboard/DashboardTopNav.client.vue';


export default {
  name: 'ConsoleView',
  components: {
    DashboardTopNavClient

  },
  data() {
    return{
      socket: null,
      name1: "loading...",
      server: {name: "no"},
      PLAYERS: 0,
      PLAYERS_Max: 0, 
      CPU_Usage: 0,
      RAM_Usage: 0,
      RAM_Max: 0,
      TPS_Usage: 0,
      TPS_Max: 0,
      Console_Text: ``,
      command: '',
      msg: ""
    }
  },
  computed: {
    currentUser() {
      return {};
    }


  },
  async mounted() {
    this.socket =  this.$nuxtSocket({name: "console"})

    this.socket.emit("link_server", "44415129-0d48-4df0-8126-3c415993642f")
 
    this.socket.on("Console", (data) => this.Console(data))

   this.socket.on("Stats", (data) => this.Stats(data))

    this.name1 = this.server.name
    
    console.log(this.socket)
  
  },
  beforeUnmount(){
   
    this.socket.emit("unlink_server", "44415129-0d48-4df0-8126-3c415993642f")
  },
  methods: {
       sendCommand: function() {
        this.socket.emit('command', {UUID: "44415129-0d48-4df0-8126-3c415993642f", command: this.command})

       },
       Console: function(data){
        console.log("stuff")
      let msg = data

      //Write to div, replacing < to &lt; (to avoid XSS) and replacing new line to br.
	msg = msg.replace(/</g, "&lt;");

	//papermc console colors
  msg = msg.replace(/\x7F6/g, "<span style='color: #FFAA00;'>"); //&6
  msg = msg.replace(/\x7Ff/g, "<span style='color: #FFFFFF;'>");  //&f

	//Color filter for Windows (thanks to SuperPykkon)
	msg = msg.replace(/\[0;30;22m/g, "<span style='color: #000000;'>"); //&0
	msg = msg.replace(/\[0;34;22m/g, "<span style='color: #0000AA;'>"); //&1
  msg = msg.replace(/\[0;34m/g, "<span style='color: #0000AA;'>"); //&1
	msg = msg.replace(/\[0;32;22m/g, "<span style='color: #00AA00;'>"); //&2
	msg = msg.replace(/\[0;36;22m/g, "<span style='color: #00AAAA;'>"); //&3
	msg = msg.replace(/\[0;31;22m/g, "<span style='color: #AA0000;'>"); //&4
	msg = msg.replace(/\[0;35;22m/g, "<span style='color: #AA00AA;'>"); //&5
	msg = msg.replace(/\[0;33;22m/g, "<span style='color: #FFAA00;'>"); //&6
	msg = msg.replace(/\[0;37;22m/g, "<span style='color: #AAAAAA;'>"); //&7
	msg = msg.replace(/\[0;30;1m/g, "<span style='color: #555555;'>");  //&8
	msg = msg.replace(/\[0;34;1m/g, "<span style='color: #5555FF;'>");  //&9
	msg = msg.replace(/\[0;32;1m/g, "<span style='color: #55FF55;'>");  //&a
	msg = msg.replace(/\[0;36;1m/g, "<span style='color: #55FFFF;'>");  //&b
	msg = msg.replace(/\[0;31;1m/g, "<span style='color: #FF5555;'>");  //&c
	msg = msg.replace(/\[0;35;1m/g, "<span style='color: #FF55FF;'>");  //&d
	msg = msg.replace(/\[0;33;1m/g, "<span style='color: #FFFF55;'>");  //&e
	msg = msg.replace(/\[0;37;1m/g, "<span style='color: #FFFFFF;'>");  //&f
  msg = msg.replace(/\[0m/g, "<span style='color: #FFFFFF;'>");  //&f
	msg = msg.replace(/\[m/g, "</span>");  //&f
	
	//Color filter for UNIX (This is easier!)
	//span may not be closed every time but browsers will do for ourselves
	msg = msg.replace(/§0/g, "<span style='color: #000000;'>"); //&0
	msg = msg.replace(/§1/g, "<span style='color: #0000AA;'>"); //&1
	msg = msg.replace(/§2/g, "<span style='color: #00AA00;'>"); //&2
	msg = msg.replace(/§3/g, "<span style='color: #00AAAA;'>"); //&3
	msg = msg.replace(/§4/g, "<span style='color: #AA0000;'>"); //&4
	msg = msg.replace(/§5/g, "<span style='color: #AA00AA;'>"); //&5
	msg = msg.replace(/§6/g, "<span style='color: #FFAA00;'>"); //&6
	msg = msg.replace(/§7/g, "<span style='color: #AAAAAA;'>"); //&7
	msg = msg.replace(/§8/g, "<span style='color: #555555;'>"); //&8
	msg = msg.replace(/§9/g, "<span style='color: #5555FF;'>"); //&9
	msg = msg.replace(/§a/g, "<span style='color: #55FF55;'>"); //&a
	msg = msg.replace(/§b/g, "<span style='color: #55FFFF;'>"); //&b
	msg = msg.replace(/§c/g, "<span style='color: #FF5555;'>"); //&c
	msg = msg.replace(/§d/g, "<span style='color: #FF55FF;'>"); //&d
	msg = msg.replace(/§e/g, "<span style='color: #FFFF55;'>"); //&e
	msg = msg.replace(/§f/g, "<span style='color: #FFFFFF;'>"); //&f
	
	msg = msg.replace(/§l/g, "<span style='font-weight:bold;'>"); //&l
	msg = msg.replace(/§m/g, "<span style='text-decoration: line-through;'>"); //&m
	msg = msg.replace(/§n/g, "<span style='text-decoration: underline;'>"); //&n
	msg = msg.replace(/§o/g, "<span style='font-style: italic;'>"); //&o
	
	msg = msg.replace(/§r/g, "</span>");  //&r


   document.getElementById("consoleTextArea").innerHTML += msg + "\n";
   document.getElementById("consoleTextArea").scrollIntoView(false)
    },
   Stats: function(data){
      if(!data) return
      data.online_players ? this.PLAYERS = data.online_players : this.PLAYERS = 0
      this.PLAYERS_Max = data.max_players
      this.PLAYERS = data.online_players
      this.CPU_Usage = data.cpu_usage
      this.RAM_Usage = data.ram_used
      this.RAM_Max = data.ram_max
      this.TPS_Usage = Math.round(data.tps)
   
    }
  },

};
</script>

<style scoped>
body {
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
h5 {
    display: block;
    font-size: 1rem;
    margin-block-start: 1.2em;
    margin-block-end: 1.97em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
   
    line-height: 1.2;
}
input {
    overflow: visible;
}
.input-group-append {
    margin-left: -1px;
    height: 100%;
}

.input-group-append, .input-group-prepend {
    display: -ms-flexbox;
    display: flex;
}

.input-group>.custom-select:not(:last-child), .input-group>.form-control:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.input-group>.custom-file, .input-group>.custom-select, .input-group>.form-control, .input-group>.form-control-plaintext {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 2 auto;
    width: 10%;
    margin-bottom: 0;
    margin-right: 1%
}
.form-control {
    display: block;
    width: 90%;
   border-top-right-radius: 0.25rem!important;
   border-bottom-right-radius: 0.25rem!important;
   border-top-left-radius: 0.25rem;
   border-bottom-left-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #1d252b;
    background-color: #1d252b;
    background-clip: padding-box;
    border: 1px solid #1d252b;
    

    outline: none;
}

.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.input-group {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
    height: 40px;
  
}

.progress-bar-animated {
    -webkit-animation: progress-bar-stripes 1s linear infinite;
    animation: progress-bar-stripes 1s linear infinite;
}

.progress-bar-striped {
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: 1rem 1rem;
}

.progress-bar {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: rgb(180, 2, 216);
    transition: width .6s ease;
}

.container-hell{
  flex-direction: column;

  width: 100%;
  margin-right: 15px;
  margin-left: 15px;

}

.col-sm-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 20%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;

}
.card-title {
    margin-bottom: 0.75rem;
    color: #ffffff;
}
.card-text{
    color: #ffffff;
}
.bg-dark {
    background-color: #1d252b!important
}
.text-light {
    color: #f8f9fa!important;
}
div {
    display: block;
}
.flat-progressbar {
    height: 10px;
}
.progress {
    display: -ms-flexbox;
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: 0.25rem;
}
.row {
 
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  margin-top: 10px;
   
 justify-content: space-around;
}
.p-2 {
    padding: 0.5rem!important;
}
.mb-2, .my-2 {
    margin-bottom: 0.5rem!important;
}
.console {
    height: 480px;
 
     background-color: #343a40;
     border-radius: 0.25rem;
     word-wrap: break-word;
     word-break: break-all;
        overflow-y: scroll;
        white-space: pre-wrap;
        display: inline-block;
}

.console::-webkit-scrollbar {
    width: 0.25rem;
  }
  .console::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  
  .console::-webkit-scrollbar-thumb {
    background: rgb(212, 0, 255);
  }

.card {
  text-align: left;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #ffffffab;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
}

.container{
  margin-top: 100px;
  margin-left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
</style>