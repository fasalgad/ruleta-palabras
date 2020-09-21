<template>
  <div>
    <v-card max-width="400" max-height="385" justify="center" align="center">
      <v-img
        src="https://www.elegircarrera.net/blog/wp-content/uploads/2019/05/nuevo-modelo-educativo-2000x1200.jpg"
        height="110px"
      ></v-img>
      <timer-setup v-if="!time" @set-time="setTime"></timer-setup>

      <div v-else>
        <h1>Vamos a jugar</h1>
        <timer :time="prettyTime"></timer>
        <div>
          <v-btn
            class="ma-2"
            tile
            color="green accent-1"
            v-if="!isRunning"
            @click="start"
            >Iniciar</v-btn
          >
          <v-btn
            este
            botón
            ponía
            pausa
            class="ma-2"
            tile
            color="#FFC107"
            v-if="isRunning"
            @click="stop"
            >Pausar</v-btn
          >

          <v-btn class="ma-2" tile color="#FFAB40" @click="reset"
            >Reiniciar</v-btn
          >
          <v-btn class="ma-2" tile color="#FFAB91" @click="finjuego"
            >Abandonar</v-btn
          >
        </div>
      </div>
    </v-card>
    <v-dialog
      v-model="dialogo1"
      hide-overlay
      persistent
      width="500px"
      justify-center
      align-center
    >
      <v-card>
        <v-img
          src="../assets/mario.jpg"
          max-height="600px"
          max-width="800px"
          aling-center
          justify-center
        />

        <v-card-title class="headline">Has perdido!!!</v-card-title>
      </v-card>
    </v-dialog>
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
      timer: null,
      dialogo1: false
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
  watch: {
    dialogo1 (val) {
      if (!val) return
      setTimeout(() => {
        this.dialogo1 = false
      }, 3000)
    }
  },

  methods: {
    finjuego (event) {
      ;<v-alert type='success'>I'm a success alert.</v-alert>
      if (event) {
        console.log('this.$route', this.$route)
        console.log('this.$router', this.$router)
        this.$router.push('/')
      }

      /* console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('/')*/
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
        this.$emit('cambiarVisibilidad', { comenzando: true })
      }
    },
    stop () {
      this.isRunning = false
      clearInterval(this.timer)
      this.timer = null
      this.$emit('cambiarVisibilidad', { comenzando: false })
    },
    reset () {
      this.stop()
      this.time = 0
      this.Segundos = 0
      this.Minutos = 0
      this.dialogo1 = true
    },
    setTime (payload) {
      this.time = parseInt(payload.Minutos) * 60 + parseInt(payload.Segundos)
    }
  }
}
</script>
