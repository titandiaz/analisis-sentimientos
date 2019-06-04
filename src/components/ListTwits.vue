<template>
  <div class="list-twits">
    <!-- <h1>Lista de twits con la palabra {clave}</h1> -->
    <div class="row grid head">
      <div class="head-check"></div>
      <div class="head-img">Avatar</div>
      <div class="head-name">Nombre</div>
      <div class="head-date">Fecha</div>
      <div class="head-tweet">Tweet</div>
      <div class="head-point">Puntuaciòn</div>
    </div>
    <div v-for="(row, index) in info" :key="index" class="row grid">
      <v-checkbox class="check" v-model="selected" :value="row.status_id"></v-checkbox>
      <v-avatar size="36px">
        <img :src="row.profile_image_url" alt="Avatar">
      </v-avatar>
      <div class="user">
        <strong>{{row.name}}</strong>
        <p class="text-nick">{{row.Usuario}}</p>
      </div>
      <div class="date">
        {{new Date(row.created_at) | dateFormat('DD/MM/YYYY')}}
        <br>
        <span>{{new Date(row.created_at) | dateFormat('hh:mm a')}}</span>
      </div>
      <div class="description">{{row.text}}</div>
      <div v-if="row.Puntuacion_tuit === 0" class="puntuacion">Neutro</div>
      <div v-else-if="row.Puntuacion_tuit > 0" class="puntuacion positivo">Positivo</div>
      <div v-else class="puntuacion negativo">Negativo</div>
      <v-icon class="go" @click.native="show(row.status_url)">keyboard_arrow_right</v-icon>
    </div>
  </div>
</template>

<script>
import Modal from "./modal";
export default {
  components: {
    Modal
  },
  data() {
    return {
      selected: [],
      dialog: false,
      infoTeewt: ""
    };
  },
  methods: {
    show(value) {
      this.$store.commit("SET_URL", value);
      window.open(value, "_blank");
    }
  },
  computed: {
    info() {
      if (this.$store.state.infoTwits) {
        return this.$store.state.infoTwits;
      }
    },
    negativos(){
      return this.info.filter(teewt => teewt.Puntuacion_tuit < 0)
    }
  }
};
</script>

<style scoped>
.list-twits {
  width: 100%;
}
.check {
  display: flex;
  justify-content: center;
  align-items: center;
}
.row {
  width: 90%;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #fff;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 0.3fr 0.3fr 1fr 0.4fr 2fr 0.3fr;
  align-items: center;
  padding: 5px 20px;
  /* cursor: pointer; */
  margin-bottom: 10px;
  transition: all ease 0.3s;
  z-index: -1;
  text-align: left;
}
.row:hover {
  /* background-color: #f4f8f9; */
  box-shadow: 0 0 12px 1px rgba(3, 20, 36, 0.095);
  z-index: 10;
  transform: scale(1.005);
}
.user {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text-nick {
  line-height: 1;
  font-size: 12px;
  color: #aaa;
  margin-bottom: 5px;
}
.date {
  font-size: 12px;
  color: #aaa;
}
.description {
  font-size: 12px;
}
.puntuacion {
  width: 90%;
  font-size: 12px;
  padding: 5px;
  border: 1px solid #aaa;
  background-color: rgba(170, 170, 170, 0.2);
  text-align: center;
  border-radius: 4px;
  margin: 0 auto;
  font-weight: 600;
  color: #777;
}
.positivo {
  background-color: rgba(101, 255, 170, 0.5);
  color: rgba(22, 168, 88, 0.9);
  border: 1px solid rgba(10, 202, 96, 0.9);
}
.negativo {
  background-color: rgba(245, 76, 76, 0.211);
  color: rgb(180, 37, 37);
  border: 1px solid red;
}
.head {
  background-color: transparent;
  border: 0;
  font-weight: 600;
  color: #6a62d2;
}
.head:hover {
  transform: scale(1);
  box-shadow: initial;
}
.grid {
  position: relative;
  z-index: 10;
}
.go {
  position: absolute;
  right: -30px;
  margin-top: 5px;
  cursor: pointer;
}
.go:hover {
  color: #6a62d2 !important;
  font-size: 28px;
  right: -35px;
}
</style>
