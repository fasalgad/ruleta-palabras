<template>
  <div>
    <br />
    <Temporizador />
    <Ingreso />
    <Resultados />
  </div>
</template>

<script>
import Ingreso from '@/components/Ingreso.vue'
import Temporizador from '@/components/Temporizador.vue'
import Resultados from '@/components/Resultados.vue'

export default {
  components: {
    Ingreso,
    Temporizador,
    Resultados
  }
}
</script>
