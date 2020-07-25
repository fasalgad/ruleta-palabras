<template>
  <v-container>
    <v-btn @click="enviartiempo" small class="ma-2" tile color="primary"
      >Juguemos!!!</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: 'ConfigTimer',
  data () {
    return {
      Minutos: 3,
      Segundos: 55
    }
  },
  methods: {
    enviartiempo () {
      this.$emit('set-time', {
        Minutos: this.Minutos,
        Segundos: this.Segundos
      })
    }
  }
}
</script>
