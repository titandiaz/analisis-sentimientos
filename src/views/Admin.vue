<template>
  <v-app class="admin" id="inspire" v-loading="loading">

    <v-navigation-drawer
      class="content-top"
      v-model="drawer"
      fixed
      app
      clipped
    >
    <div class="results">
      <v-progress-circular
      :rotate="90"
      :size="50"
      :width="8"
      :value="tweets.length"
      color="#6a62d2"
    >
      {{tweets.length}}
    </v-progress-circular>
      <v-progress-circular
      :rotate="90"
      :size="50"
      :width="8"
      :value="negativos.length"
      color="rgba(240, 48, 48, 0.781)"
    >
      {{negativos.length}}
    </v-progress-circular>
    <v-progress-circular
      :rotate="90"
      :size="50"
      :width="8"
      :value="positivos.length"
      color="rgba(91, 212, 91, 0.884)"
    >
      {{positivos.length}}
    </v-progress-circular>
    <v-progress-circular
      :rotate="90"
      :size="50"
      :width="8"
      :value="neutros.length"
      color="rgb(181, 181, 181)"
    >
      {{neutros.length}}
    </v-progress-circular>
    </div>
    <div class="wrapper-results">
      <p class="item-result" @click="setTotal">Total</p>
      <p class="item-result" @click="setNegativos">Negativos</p>
      <p class="item-result" @click="setPositivos">Positivos</p>
      <p class="item-result"@click="setNeutros">Neutros</p>
    </div>
      <v-list dense>
        <v-subheader class="mt-3 grey--text text--darken-1">USUARIOS</v-subheader>
        <v-list>
          <v-list-tile
            v-for="item in tweets"
            :key="item.status_id"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img
                :src="item.profile_image_url"
                alt=""
              >
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.name"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile
          class="mt-3"
          @click=""
        >
          <v-list-tile-action>
            <v-icon color="grey darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <div class="nav">
      <h2 class="title-head ">Analisis de sentimientos</h2>
      <v-text-field
        outline
        label="Escriba aquí la palabra clave"
        prepend-inner-icon="search"
        v-model="word"
        @keyup.enter="getData(1)"
        color="#9aacb5"
      ></v-text-field>
      <div
        @click="logout"
        class="btn-close"
      >Salir</div>
    </div>

    <!-- <v-toolbar
      color="white"
      app
      fixed
    >
      <v-toolbar-title
        style="width: 400px"
        class="ml-0 pl-3"
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Analisis de sentimientos</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Palabra clave.."
        class="hidden-sm-and-down"
        v-model="word"
        @keyup.enter="getData"
      ></v-text-field>
    </v-toolbar> -->

    <v-content style="margin-top: 100px;">
      <v-container fill-height>
        <v-layout
          justify-center
          align-center
        >
          <list-twits />
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import listTwits from "@/components/ListTwits";
import firebase from "firebase";
import axios from 'axios'
export default {
  components: {
    // tableInfo,
    listTwits
  },
  data: () => ({
    drawer: true,
    loading: false,
    word: "",
    info: [],
    items: [
      { icon: "trending_up", text: "Most Popular" },
      { icon: "subscriptions", text: "Subscriptions" },
      { icon: "history", text: "History" },
      { icon: "watch_later", text: "Watch Later" }
    ],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" }
    ]
  }),
  props: {
    source: String
  },
  computed: {
    tweets() {
      if (this.$store.state.infoTwits) {
        return this.$store.state.infoTwits;
      }
    },
    negativos(){
      if (this.tweets) {
        return this.tweets.filter(teewt => teewt.Puntuacion_tuit < 0)
      }
    },
    neutros(){
      return this.tweets.filter(teewt => teewt.Puntuacion_tuit == 0)
    },
    positivos(){
      return this.tweets.filter(teewt => teewt.Puntuacion_tuit > 0)
    }
  },
  methods: {
    getData(v) {
      this.loading = v
      axios
        .get(`https://a160f2df.ngrok.io/tweets?word=${this.word}`)
        .then(response => {
          this.info = response.data;
          this.$store.commit("SET_INFO", response.data);
          this.loading = 0
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    },
    setNegativos(){
      this.$store.commit("SET_INFO", this.negativos)
    },
    setPositivos(){
      this.$store.commit("SET_INFO", this.positivos)
    },
    setNeutros(){
      this.$store.commit("SET_INFO", this.neutros)
    },
    setTotal(){
      this.$store.commit("SET_INFO", this.info)
    }
  }
};
</script>

<style scoped>
.prueba {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.nav {
  width: 100%;
  background-color: #fff;
  transition: all ease 0.3s;
  z-index: 9;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  /* place-content: center; */
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #f4f8f9;
  position: fixed !important;
}
.left-pading {
  padding-left: 100px;
}
.title-head {
  text-align: center;
  width: 100%;
  display: inline-block;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  padding-left: 30px;
  color: #021f2e;
  font-weight: 400;
}
aside::-webkit-scrollbar {
  width: 8px; /* Tamaño del scroll en vertical */
  height: 8px; /* Tamaño del scroll en horizontal */
  /* display: none; */
}
aside::-webkit-scrollbar-thumb {
  background: rgba(2, 31, 46, 0.404);
  border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
aside::-webkit-scrollbar-thumb:hover {
  background: rgba(2, 31, 46, 0.604);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
aside::-webkit-scrollbar-thumb:active {
  background-color: rgba(2, 31, 46, 0.604);
}
aside::-webkit-scrollbar-track:hover,
aside::-webkit-scrollbar-track:active {
  background: #fff;
}
.content-top {
  margin-top: 100px !important;
}
.btn-close {
  justify-self: flex-end;
  letter-spacing: 0.5px;
  font-size: 14px;
  font-weight: 600;
  line-height: -1;
  /* border: 2px solid #6a62d2; */
  color: #6a62d2;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  height: 40px;
  margin-right: 20px;
  text-align: center;
  text-transform: uppercase;
  box-shadow: 0 0 8px 1px rgba(32, 33, 37, 0.137);
  transition: all ease 0.3s;
}
.btn-close:hover {
  background-color: #6a62d2;
  color: #fff;
  box-shadow: 0 0 12px 2px rgba(32, 33, 37, 0.137);
}
.v-input.v-text-field.v-text-field--enclosed.v-text-field--outline.theme--light {
  margin-top: 20px !important;
}
.results {
  display: flex;
  /* flex-direction: column; */
  text-align: left;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px 10px 0 20px;
}
.item-result {
  display: flex;
  vertical-align: middle;
  line-height: 1;
}
.wrapper-results {
  display: flex;
  justify-content: center;
  padding: 7px 0 0;
  width: 90%;
  margin-left: 20px;
}
.item-result{
  font-size: 12px;
  color: #021f2e;
  margin: 0 auto;
  cursor: pointer;
}

</style>
