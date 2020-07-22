<template>
  <v-container>
    <center><h1>Tiempo</h1></center>
    <v-row>
      <v-col>
        <v-btn color="blue" class="mr-4" @click="tiempo">
          Iniciar Tiempos
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reiniciar">
          Recomenzar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      minutes: 0,
      secondes: 0
    }
  }
}
</script>
