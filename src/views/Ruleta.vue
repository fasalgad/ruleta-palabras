<template>
  <v-container>
    <div class="cyan lighten-5">
      <v-row>
        <v-col offset="4">
          <Temporizador
            v-if="palabras.length > 0"
            @cambiarVisibilidad="cambiarVisibilidad"
          />
        </v-col>
      </v-row>

      <v-row>
        <Ingreso
          v-if="aComenzado"
        />
      </v-row>
    </div>

    <v-row>
      <v-col v-if="palabras.length > 0">
        <v-btn @click="irHome" color="blue">
          Volver al inicio
        </v-btn>
      </v-col>

      <v-col>
        <Resultados />
      </v-col>
      <v-col v-if="palabras.length == 0">
        <h1>Error al cargar contenido</h1>
        <h3>Favor de intentar de nuevo</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Ingreso from '@/components/Ingreso.vue'
import Temporizador from '@/components/Temporizador.vue'
import Resultados from '@/components/Resultados.vue'


export default {
  components: {
    Ingreso,
    Temporizador,
    Resultados
  },
  data () {

    return {
      palabras: [],
      aComenzado: false
    }
  },
  created () {
    this.$http.get('/palabras').then(response => {
      console.log('$http', response)
      this.palabras = response.data
      this.$store.commit('SET_PALABRAS',this.palabras)
    })
  },
  methods: {
    irHome () {
      console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('/')
    },
    cambiarVisibilidad ({ comenzando }) {
      this.aComenzado = comenzando
    }
  },

   reset () {
      this.stop()
      this.time = 0
      this.Segundos = 0
      this.Minutos = 0
      this.dialogo1= true
    },   

}
</script>
