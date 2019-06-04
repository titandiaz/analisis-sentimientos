<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="290">
      <!-- <div class="container-card">
        <blockquote class="twitter-tweet" data-lang="es">
          <a :href="urlTweet"></a>
        </blockquote>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div> -->
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ["state"],
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    urlTweet(){
        return this.$store.state.urlTweet
    }
  }
};
</script>