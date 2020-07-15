<template>
  <v-container>
    <Carrusel /><br />

    <v-row>
      <v-col cols="12" sm="6" align="center">
        <v-layout>
          <v-flex>
            <v-btn @click="irRuleta" dark color="green">
              Jugar Ruleta Palabra
            </v-btn>
          </v-flex>
        </v-layout>
      </v-col>

      <v-col cols="12" sm="6" align="center">
        <v-layout>
          <v-flex>
            <v-btn dark color="blue" @click="irFormulario">
              Mirar más
            </v-btn>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iste
      consectetur odit nulla! Necessitatibus laudantium voluptas, commodi cum
      repellendus molestias tenetur deserunt? Non molestiae nobis repellat error
      fugiat sequi aspernatur.
    </p>
  </v-container>
</template>

<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'
 */
import Carrusel from '@/components/Carrusel.vue'

export default {
  components: {
    Carrusel
  },
  methods: {
    irRuleta () {
      console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('Ruleta')
    },
      irFormulario () {
      console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('Formulario')
    }
  }
}
</script>
