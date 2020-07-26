<template>
  <div>
    <br />
    <Temporizador />
    <Ingreso/>
  </div>
</template>

<script>
import Ingreso from '@/components/Ingreso.vue'
import Temporizador from '@/components/Temporizador.vue'

export default {
  components: {
    Ingreso,
    Temporizador
  }
}
</script>
