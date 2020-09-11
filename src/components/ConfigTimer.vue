<template>
  <v-container>
    <h2>Bienvenido a lista Palabras</h2>
    <v-row>
      <h5>Establecer Tiempo</h5>
    </v-row>
    <form>
      <v-row>
        <v-col>
          <label for="min">Minutos<br /> </label>
          <input
            type="number"
            v-model="Minutos"
            name="time_m"
            id="min"
            min="0"
            max="5"
            placeholder="MINUTOS"
          />
        </v-col>
        <v-col>
          <label for="sec">Segundos<br /> </label>
          <input
            type="number"
            placeholder="SEGUNDOS"
            v-model="Segundos"
            name="time_s"
            id="sec"
            max="59"
            min="0"
          />
        </v-col>
        <v-combobox
          :items="Opciones"
          label="Seleccionar cantidad de Palabras"
        ></v-combobox>
      </v-row>

      <v-row>
        <v-col>
          <v-btn
            @click="enviartiempo"
            small
            class="ma-2"
            tile
            color="teal accent-4"
            >Establecer</v-btn
          >
        </v-col>
        <v-col>
          <v-btn @click="finjuego" small class="ma-2" tile color="#FFAB91"
            >Abandonar todo</v-btn
          >
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<script>
export default {
  name: 'ConfigTimer',
  data () {
    return {
      Minutos: 0,
      Segundos: 0,
      Opciones: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        18,
        20,
        21,
        22,
        24,
        25,
        26,
        27
      ]
    }
  },
  methods: {
    enviartiempo () {
      this.$emit('set-time', {
        Minutos: this.Minutos,
        Segundos: this.Segundos,
        Opciones:this.Opciones
      })
    },
    finjuego () {
      console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('/')
    }
  }
}
</script>
