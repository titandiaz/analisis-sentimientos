<template>
  <v-data-table
    :headers="headers"
    :items="info"
    class="elevation-1"
    item-key="Usuario"
  >
    <template
      slot="items"
      slot-scope="props"
    >
      <tr @click="props.expanded = !props.expanded ">
        <td>{{ props.item.Usuario }}</td>
        <td class="text-xs-right fecha">{{ props.item.created_at.slice(0, 10) }}</td>
        <td class="text-xs-right">{{ props.item.text }}</td>
        <td
          class="text-xs-right neutro"
          v-if="props.item.Puntuacion_tuit == 0"
        >Neutro<br>{{props.item.Puntuacion_tuit}}</td>
        <td
          class="text-xs-right positivo"
          v-else-if="props.item.Puntuacion_tuit > 0"
        >Positivo<br>{{props.item.Puntuacion_tuit}}</td>
        <td
          class="text-xs-right negativo"
          v-else
        >Negativo<br>{{props.item.Puntuacion_tuit}}</td>
        <td class="text-xs-right">
          <div
            class="btn-add"
            @click="add(props.index + 1)"
          >Agregar</div>
        </td>
      </tr>
    </template>
    <template
      slot="expand"
      slot-scope="props"
    >
      <div class="container-card">
        <blockquote
          class="twitter-tweet"
          data-lang="es"
        >
          <a :href="info[props.index].status_url"></a>
        </blockquote>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>

      </div>
    </template>
  </v-data-table>
</template>

<script>
import CardTwiiter from '@/components/card-twitter'
import axios from 'axios'

export default {
  components: {
    CardTwiiter
  },
  props: {},
  data() {
    return {
      indexTweet: 0,
      scoreMeaning: '',
      value: 0,
      headers: [
        {
          text: 'Nick Usuario',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Fecha', value: 'calories' },
        { text: 'tweet', value: 'protein' },
        { text: 'Puntuación', value: 'iron' },
        { text: 'Accion', value: 'accion' }
      ]
    }
  },
  computed: {
    info() {
      if (this.$store.state.infoTwits) {
        return this.$store.state.infoTwits
      }
    }
  },
  methods: {
    add(value) {
      axios
        .post(`http://localhost:8000/tweets?id=${value}`)
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.container-card {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
}
td.text-xs-right.negativo {
  color: rgb(231, 84, 84);
}
td.text-xs-right.fecha {
  min-width: 120px;
}
td.text-xs-right {
  text-align: left !important;
}
.positivo {
  color: rgb(119, 253, 119);
}
.negativo {
  color: white;
}
.btn-add {
  background-color: rgba(100, 148, 237, 0.589);
  border: 1px solid rgb(100, 148, 237);
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
