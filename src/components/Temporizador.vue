<template>
  <div>
    <br />

    <v-card
      max-width="600"
      max-height="300"
      class="mx-auto"
      justify="center"
      align="center"
    >
      <H1>Bienvenido</H1>
      <timer-setup @set-time="setTime"></timer-setup>
      <div>
        <timer :time="prettyTime"></timer>
        <div>
          <v-btn
            class="ma-2"
            tile
            color="indigo"
            v-if="!isRunning"
            @click="start"
            >Iniciar</v-btn
          >
          <v-btn class="ma-2" tile color="indigo" v-if="isRunning" @click="stop"
            >Pausa</v-btn
          >
          <v-btn class="ma-2" tile color="indigo" @click="reset"
            >Reiniciar</v-btn
          >
        </div>
      </div>
    </v-card>
    <Ingreso />
  </div>
</template>

<script>
import Ingreso from '@/components/Ingreso.vue'
import ConfigTimer from '@/components/ConfigTimer.vue'
import Timer from '@/components/Timer.vue'

export default {
  name: 'Temporizador',
  components: {
    Ingreso,
    'timer-setup': ConfigTimer,
    timer: Timer
  },
  data () {
    return {
      isRunning: false,
      Minutos: 0,
      Segundos: 0,
      time: 0,
      timer: null
    }
  },

  computed: {
    prettyTime () {
      let time = this.time / 60
      let Minutos = parseInt(time)
      let Segundos = Math.round((time - Minutos) * 60)
      return Minutos + ':' + Segundos
    }
  },

  methods: {
    start () {
      this.isRunning = true
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.time > 0) {
            this.time--
          } else {
            clearInterval(this.timer)
            this.reset()
          }
        }, 1000)
      }
    },
    stop () {
      this.isRunning = false
      clearInterval(this.timer)
      this.timer = null
    },
    reset () {
      this.stop()
      this.time = 0
      this.Segundos = 0
      this.Minutos = 0
    },
    setTime (payload) {
      this.time = payload.Minutos * 60 + payload.Segundos
    }
  }
}
</script>
