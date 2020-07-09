<template>
  <v-app>
    <v-app-bar app color="dark" dark>
 
      <cabecera></cabecera>
      

  
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>

 

</template>

<script>
import HelloWorld from './components/HelloWorld';
import Cabecera from './components/Cabecera.vue'
export default {
  name: 'App',

  components: {
    HelloWorld,
    Cabecera
  },

  data: () => ({
    //
  }),
};
</script>
