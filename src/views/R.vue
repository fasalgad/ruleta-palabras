<template>
  <div class="circle-container">
    <div class="title-container"></div>
    <ul class="circle">
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">C</li>
      <li class="item">D</li>
      <li class="item">E</li>
      <li class="item">F</li>
      <li class="item">G</li>
      <li class="item">H</li>
      <li class="item">I</li>
      <li class="item">J</li>
      <li class="item">L</li>
      <li class="item">M</li>
      <li class="item">N</li>
      <li class="item">Ñ</li>
      <li class="item">O</li>
      <li class="item">P</li>
      <li class="item">Q</li>
      <li class="item">R</li>
      <li class="item">S</li>
      <li class="item">T</li>
      <li class="item">U</li>
      <li class="item">V</li>
      <li class="item">X</li>
      <li class="item">Y</li>
      <li class="item">Z</li>
    </ul>
  </div>
</template>
<style scoped>
.title-container {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
}
.circle-container {
  padding-top: 2em;
  width: 100%;
}
.circle {
  position: relative;
  width: 21.375em;
  height: 21.375em;
  border-radius: 50%;
  padding: 0;
  list-style: none;
  left: 50%;
  transform: translateX(-50%);
}
.circle > * {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.25em;
  height: 1.25em;
  margin: -0.625em;
}
.circle > *:nth-of-type(1) {
  transform: rotate(270deg) translate(10.6875em) rotate(-270deg);
}
.circle > *:nth-of-type(2) {
  transform: rotate(284.4deg) translate(10.6875em) rotate(-284.4deg);
}
.circle > *:nth-of-type(3) {
  transform: rotate(298.8deg) translate(10.6875em) rotate(-298.8deg);
}
.circle > *:nth-of-type(4) {
  transform: rotate(313.2deg) translate(10.6875em) rotate(-313.2deg);
}
.circle > *:nth-of-type(5) {
  transform: rotate(327.6deg) translate(10.6875em) rotate(-327.6deg);
}
.circle > *:nth-of-type(6) {
  transform: rotate(342deg) translate(10.6875em) rotate(-342deg);
}
.circle > *:nth-of-type(7) {
  transform: rotate(356.4deg) translate(10.6875em) rotate(-356.4deg);
}
.circle > *:nth-of-type(8) {
  transform: rotate(370.8deg) translate(10.6875em) rotate(-370.8deg);
}
.circle > *:nth-of-type(9) {
  transform: rotate(385.2deg) translate(10.6875em) rotate(-385.2deg);
}
.circle > *:nth-of-type(10) {
  transform: rotate(399.6deg) translate(10.6875em) rotate(-399.6deg);
}
.circle > *:nth-of-type(11) {
  transform: rotate(414deg) translate(10.6875em) rotate(-414deg);
}
.circle > *:nth-of-type(12) {
  transform: rotate(428.4deg) translate(10.6875em) rotate(-428.4deg);
}
.circle > *:nth-of-type(13) {
  transform: rotate(442.8deg) translate(10.6875em) rotate(-442.8deg);
}
.circle > *:nth-of-type(14) {
  transform: rotate(457.2deg) translate(10.6875em) rotate(-457.2deg);
}
.circle > *:nth-of-type(15) {
  transform: rotate(471.6deg) translate(10.6875em) rotate(-471.6deg);
}
.circle > *:nth-of-type(16) {
  transform: rotate(486deg) translate(10.6875em) rotate(-486deg);
}
.circle > *:nth-of-type(17) {
  transform: rotate(500.4deg) translate(10.6875em) rotate(-500.4deg);
}
.circle > *:nth-of-type(18) {
  transform: rotate(514.8deg) translate(10.6875em) rotate(-514.8deg);
}
.circle > *:nth-of-type(19) {
  transform: rotate(529.2deg) translate(10.6875em) rotate(-529.2deg);
}
.circle > *:nth-of-type(20) {
  transform: rotate(543.6deg) translate(10.6875em) rotate(-543.6deg);
}
.circle > *:nth-of-type(21) {
  transform: rotate(558deg) translate(10.6875em) rotate(-558deg);
}
.circle > *:nth-of-type(22) {
  transform: rotate(572.4deg) translate(10.6875em) rotate(-572.4deg);
}
.circle > *:nth-of-type(23) {
  transform: rotate(586.8deg) translate(10.6875em) rotate(-586.8deg);
}
.circle > *:nth-of-type(24) {
  transform: rotate(601.2deg) translate(10.6875em) rotate(-601.2deg);
}
.circle > *:nth-of-type(25) {
  transform: rotate(615.6deg) translate(10.6875em) rotate(-615.6deg);
}
.circle .item {
  display: block;
  width: 2.25em;
  height: 2.25em;
  transition: all 0.3s ease-in-out;
  border: 2px solid #fff;
  border-radius: 50%;
  background-image: radial-gradient(circle, #0074d9, #004b8d);
  color: #fff;
  line-height: 2.25em;
  text-align: center;
  text-decoration: none;
  cursor: default;
}
.circle .item--success {
  background-image: radial-gradient(circle, #9ee379, #4caf50);
}
.circle .item--failure {
  background-image: radial-gradient(circle, #b9121b, #8e001c);
}
</style>

v-for="(palabra, index) in palabras" :key="index" :style="estilo1"
@click="seleccionado(palabra, index)" :class="palabra.estilo" >
{{ palabra.letra }}
{{ palabra.descripcion }}
