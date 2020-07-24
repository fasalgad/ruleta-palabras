<template>
  <div id="app" v-cloak>
    <h1>Timer</h1>
    <timer-setup v-if="!time" @set-time="setTime"></timer-setup>
    <div v-else>
      <timer :time="prettyTime"></timer>
      <div>
        <button v-if="!isRunning" @click="start">Start</button>
        <button v-if="isRunning" @click="stop">Stop</button>
        <button @click="reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Temporizador',







}
</script>
