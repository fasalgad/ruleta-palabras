<template>
  <v-container>

    <v-row>

      <v-col cols="12" sm="6">
        <v-layout>
          <v-flex>
            <v-btn dark color="green">
              Jugar Ruleta Palabra
            </v-btn>
          </v-flex>
        </v-layout>
      </v-col>

      <v-col cols="12" sm="6">
        <v-layout>
          <v-flex>
            <v-btn dark color="blue">
              Mirar más
            </v-btn>
          </v-flex>
        </v-layout>
      </v-col>

    </v-row>








    
  </v-container>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
