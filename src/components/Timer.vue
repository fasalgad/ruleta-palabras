<template>
  <v-container>
    <div class="timer">{{ time | prettify }}</div>
  </v-container>
</template>

<script>
export default {
  name:'Timer',
  props: ["time"],

  filters: {
    prettify: function(value) {
      let data = value.split(':');
      let Minutos = data[0];
      let Segundos = data[1];
      if (Minutos < 10) {
        Minutos = 0 + Minutos;
      }
      if (Segundos < 10) {
        Segundos = 0 + Segundos;
      }
      return Minutos + ':' + Segundos
    },
    
  }
}
</script>