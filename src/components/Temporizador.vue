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
      <h1>Vamos a poner tiempo</h1>
      <timer-setup v-if="!time" @set-time="setTime"></timer-setup>
      <div v-else>
        <timer :time="prettyTime"></timer>
        <div>
          <v-btn
            class="ma-2"
            tile
            color="indigo"
            v-if="!isRunning"
            @click="start"
            >Start</v-btn
          >
          <v-btn class="ma-2" tile color="indigo" v-if="isRunning" @click="stop"
            >Stop</v-btn
          >
          <v-btn class="ma-2" tile color="indigo" @click="reset">Reset</v-btn>
          <v-btn class="ma-2" tile color="indigo" @click="finjuego">Abandonar</v-btn>
        </div>
      </div>
    </v-card>

  </div>
</template>

<script>
import ConfigTimer from '@/components/ConfigTimer.vue'
import Timer from '@/components/Timer.vue'

export default {
  name: 'Temporizador',
  components: {
   
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
        finjuego() {
  console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('/')
    },
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
      this.time = parseInt(payload.Minutos) * 60 + parseInt(payload.Segundos)
    }
  }
}
</script>
