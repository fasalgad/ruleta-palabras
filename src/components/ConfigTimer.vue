<template>
  <v-container>
    <form>
      <v-row>
        <v-col>
          <label for="min">Minutos<br /> </label>
        </v-col>
        <v-col>
          <label for="sec">Segundos<br /> </label>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <input
            type="number"
            v-model="Minutos"
            name="time_m"
            id="min"
            min="0"
            max="5"
          />
        </v-col>
        <v-col>
          <input
            type="number"
            v-model="Segundos"
            name="time_s"
            id="sec"
            max="59"
            min="0"
          />
        </v-col>
        </v-row>
        <v-row>
        <v-col>
          <v-btn @click="enviartiempo" small class="ma-2" tile color="indigo">Establecer Tiempo</v-btn>
        </v-col>
        </v-row>
    </form>   
    </v-container>
</template>

<script>
export default {
   name: 'ConfigTimer',
  data() {
    return {
      Minutos: 0,
      Segundos: 0,
    };
  },
  methods: {
    enviartiempo() {
      this.$emit("set-time", {
        Minutos: this.Minutos,
        Segundos: this.Segundos,
      });
    },
  },

}
</script>
