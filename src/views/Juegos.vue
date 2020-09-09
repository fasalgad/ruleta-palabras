<template>
  <div>
    <Carrusel />
    <v-row>
      <v-col cols="12" sm="6" align="center">
        <v-layout>
          <v-flex>
            <v-btn @click="irRuleta" color="green">
              Jugar Ruleta Palabra
            </v-btn>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>


  
  </div>
</template>
<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'
 */
import Carrusel from '@/components/Carrusel.vue'

export default {
  name:'Juegos',
  components: {
    Carrusel
  },
  methods: {
    irRuleta () {
      console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('Ruleta')
      
    }
    
  }

}
</script>
