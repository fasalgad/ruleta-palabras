<template>
  <v-container>
    <v-row> </v-row>

    <v-row>
      <v-col> <Preguntas /> </v-col>

      <v-col>
        <h1>Responde</h1>
        <br />

        <v-row align="center">
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field
              v-model="Palabra"
              :counter="123"
              label="Palabra"
              required
            ></v-text-field>

            <v-btn color="warning" class="mr-4" @click="saltar">
              Pasa Palabra
            </v-btn>

            <v-btn color="green" @click="comprobar">
              Comprobar
            </v-btn>
          </v-form>
        </v-row>
      </v-col>
    </v-row>

    <v-layout>
      <v-flex>
        <v-btn @click="irHome" color="blue">
          Volver al inicio
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Preguntas from '@/components/Preguntas.vue'
export default {
  components: {
    Preguntas
  },
   data: {
      palabras:[
        {palabra:'Analítico'},
        {palabra:'Bellotero'},
        {palabra:'Clave'},
        {palabra:'Desclavar'},
        {palabra:'Edificable'},
        {palabra:'Forma'},
        {palabra:'Gitanismo'},
        {palabra:'Hondero'},
        {palabra:'Inadvertencia'},
        {palabra:'justificadamente'},
        {palabra:'Lucha'},
        {palabra:'Marcar'},
        {palabra:'Nivelado'},
        {palabra:'Ñoñería'},
        {palabra:'Oceanográfico'},
        {palabra:'Presente'},
        {palabra:'Etiqueta'},
        {palabra:'Quisquilloso'},
        {palabra:'Repartir'},
        {palabra:'Subarriendo'},
        {palabra:'Trifloro'},
        {palabra:'Ukelele'},
        {palabra:'Volante'},
        {palabra:'Xilófono'},
        {palabra:'Yo'},
        {palabra:'Zapallo'}
        
      ]
    },

  methods: {
   
    irHome () {
      console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('/')
    }
  },
  name: 'Ingreso'
}
</script>
