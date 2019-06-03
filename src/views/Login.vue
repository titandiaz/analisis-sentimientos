<template>
  <div class="login">
    <div class="left-login">
      <div
        v-if="!show"
        class="wrapper"
      >
        <h2 class="title-login">Analisis de sentimientos</h2>
        <form
          @submit.prevent="register"
          class="form-signin"
        >
          <!-- <input
            v-model="formRegister.name"
            placeholder="Nombre"
            class="form-control"
            type="text"
          > -->
          <input
            v-model="formRegister.email"
            placeholder="Correo"
            class="form-control"
            type="email"
          >
          <input
            v-model="formRegister.password"
            placeholder="Contraseña"
            class="form-control"
            type="password"
          >
          <input
            type="submit"
            class="btn-login"
            :style="show ? 'margin-top:20px': '' "
            value="Registrarse"
          ></input>
        </form>
        <p class="text-links"> <span
            @click="show = true"
            class="forgot"
          >Ya tengo una cuenta</span></p>
      </div>
      <div
        v-else
        class="wrapper"
      >
        <h2 class="title-login">Analisis de sentimientos</h2>
        <form
          @submit.prevent="login"
          class="form-signin"
        >
          <input
            v-model="formLogin.email"
            placeholder="Email"
            class="form-control"
            type="email"
          >
          <input
            v-model="formLogin.password"
            placeholder="Password"
            class="form-control"
            type="password"
          >
          <v-checkbox
            color="#6a62d2"
            class="checkbox"
            v-model="checkbox"
            label="Mantener sesión iniciada"
          ></v-checkbox>

          <input
            type="submit"
            class="btn-login"
            value="Iniciar sesión"
          ></input>
        </form>
        <p class="text-links"> <span class="forgot">¿Olvidaste su contraseña?</span><br><span
            class="register"
            @click="show = false"
          >Resgistrarse</span></p>
      </div>
    </div>
    <div class="right">
      <div class="content-text">
        <p class="title-right">Aplicación para el <br> analisis de sentimientos</p>
        <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident animi cupiditate, nobis reprehenderit eligendi harum alias laborum sint earum excepturi pariatur dicta quasi molestias ratione veritatis! Aliquam qui fuga optio?</p>
        <div class="btn-info">Mas información</div>
      </div>
      <Graphic class="graphic" />
    </div>
  </div>
</template>

<script>
import Graphic from "../assets/graphics/GraphicLogin";
import firebase from "firebase";

export default {
  components: {
    Graphic
  },
  data() {
    return {
      formRegister: {
        name: "",
        email: "",
        password: ""
      },
      formLogin: {
        email: "",
        password: ""
      },
      checkbox: false,
      show: true
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.formLogin.email,
          this.formLogin.password
        )
        .then(
          user => this.$router.replace("admin"),
          error => console.error(error)
        );
    },
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formRegister.email,
          this.formRegister.password
        )
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-columns: 0.5fr 1fr;
}
.left-login {
  background-color: #6a62d2;
  display: grid;
}
.right {
  background-color: #f4f8f9;
  padding: 0 100px;
  position: relative;
  display: flex;
  align-items: center;
  text-align: left;
}
.wrapper {
  max-width: 400px;
  width: 100%;
  background-color: #fff;
  align-self: center;
  justify-self: center;
  border-radius: 6px;
  margin-top: -40px;
  padding-bottom: 20px;
  transition: all ease 0.3s;
}
.title-login {
  text-align: center;
  margin: 40px auto;
  font-weight: 600;
  text-transform: uppercase;
  color: #444;
  font-size: 20px;
}
.form-signin {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-control {
  width: 80%;
  padding: 20px 10px;
  background-color: #e5e8ed;
  margin-bottom: 15px;
  border-radius: 2px;
}

input:focus {
  outline-color: #6a62d2;
}
.btn-login {
  width: 80%;
  padding: 20px 10px;
  background-color: #6a62d2;
  color: #fff;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.3s;
}
.btn-login:hover {
  background-color: #2a229bd0;
}
.checkbox {
  margin-top: -15px;
  width: 80%;
  /* align-self: flex-start; */
}
.text-links {
  text-align: center;
  font-size: 14px;
  color: #a0a8b6;
  width: 100%;
  display: block;
  margin-top: 20px;
}
.forgot {
  cursor: pointer;
}
.register {
  cursor: pointer;
  color: #6a62d2;
}
.graphic {
  width: 600px;
  position: absolute;
  top: 200px;
  right: 0px;
  z-index: 1;
  opacity: 0.2;
}
.title-right {
  font-weight: 700;
  font-size: 36px;
  line-height: 1;
  color: #0c1f55;
  text-transform: uppercase;
  /* margin-bottom: 30px; */
}
.description {
  font-size: 18px;
  color: #0c1f55;
  line-height: 1.4;
}
.content-text {
  margin-top: -260px;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 9;
}
.btn-info {
  letter-spacing: 0.5px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  border: 2px solid #6a62d2;
  color: #6a62d2;
  padding: 10px 20px;
  border-radius: 4px;
  width: 200px;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
  text-transform: uppercase;
  box-shadow: 0 0 8px 1px rgba(32, 33, 37, 0.137);
  transition: all ease 0.3s;
}
.btn-info:hover {
  background-color: #6a62d2;
  color: #fff;
  box-shadow: 0 0 12px 2px rgba(32, 33, 37, 0.137);
}
</style>
