<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="circle-container">
          <ul class="circle">
            <li
              v-for="(palabra, index) in palabras"
              :key="index"
              :style="estilo1"
              @click="seleccionado(palabra, index)"
              class="items"
              :class="palabra.estilo"
            >
              {{ palabra.letra }}
            </li>
          </ul>
        </div>
      </v-col>
              
      <span v-if="malas === 3">
        <v-alert type="error">
          Superaste el máximo de intentos bye bye!!!
        </v-alert>
      </span>
      <v-col>
        <v-card>
          <v-card-title class="headline">
            {{palabraseleccionada.letra}} <br/>
            {{palabraseleccionada.descripcion}}
            </v-card-title>
          <center></center>
        </v-card>
        <v-row>
          <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
            @submit.prevent="validate"
          >
            <v-text-field
              v-model="termino"
              :counter="10"
              :rules="palRules"
              label="Palabra"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Aceptar
            </v-btn>

            <v-btn color="warning" class="mr-4" @click="saltar">
              Siguiente
            </v-btn>
          </v-form>
        </v-row>
        <br />

        <v-row>
          <div>
            <v-card>
              <v-card-title class="headline"
                >Término correspondiente:</v-card-title
              >
              <center>{{ actual }}</center>
            </v-card>

            <br />

            <v-card>
              <v-card-title class="headline">Número de correctas</v-card-title>
              <center>{{ correctas }}</center>
            </v-card>

            <br />

            <v-card>
              <v-card-title class="headline">Número de errores:</v-card-title>
              <center>{{ malas }}</center>
            </v-card>
          </div>
        </v-row>
      </v-col>
    </v-row>

    <div class="light-blue lighten-5">
      <v-row>
        <v-col md="8">
          <v-card class="mx-auto" max-width="2000" tile>
            <v-list rounded>
              <v-subheader>Lista de Palabras</v-subheader>
              <v-list-item-group v-model="item" color="green">
                <v-list-item
                  v-for="(palabra, index) in palabras"
                  :key="index"
                  :style="estilo1"
                  @click="seleccionado(palabra, index)"
                  :class="palabra.estilo"
                >
                  {{ palabra.letra }}
                  {{ palabra.descripcion }}

                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Ingreso',
  props: {
    palabras: Array
  },
  data: () => ({
    posicionLetra:'A',
    item: 0, //posición en que inicia la lista
    valid: true,
    termino: '',
    ap: 0,
    correctas: 0,
    malas: 0,
    actual: '',
    estilo1: { border: '', 'font-size': '15px' },
    palabraseleccionada: '',
    lazy: true,

    palRules: [
      v => !!v || 'Palabra es requerida',
      v => (v && v.length > 0) || 'No puede estar vacio'
    ]
  }),

  methods: {

    validate () {
      if (this.$refs.form.validate()) {
        console.log(this.termino)
        console.log(this.palabraseleccionada)
        if (this.palabraseleccionada.activa) {
          if (
            this.palabraseleccionada.significado.toLowerCase() ==
            this.termino.toLowerCase()
          ) {
            this.correctas++
            this.actual = this.palabraseleccionada.significado
            //Cuando la palabra es igual
            //Debe pasar a la siguiente letra
            

            this.palabras.forEach(ele => {
              if (ele.letra == this.palabraseleccionada.letra) {
                ele.estilo = 'item--success'
                ele.activa = false
              }
            })

            this.palabraseleccionada = this.palabras.filter(
              ele => ele.letra == this.palabraseleccionada.nextLetra
            )[0]
            this.ap++
            this.item++
            this.termino = ''
            ///// Aqui deberia intentar cambiar el color
            if (this.item > 26) {
              this.item = 0
            }
          } else {
            this.palabras.forEach(ele => {
              if (ele.letra == this.palabraseleccionada.letra) {
                ele.estilo = 'item--failure'
              }
            })
            this.palabraseleccionada = this.palabras.filter(
              ele => ele.letra == this.palabraseleccionada.nextLetra
            )[0]
            // this.item++
            this.ap++
            this.malas++
            this.actual = this.palabraseleccionada.significado
            this.termino = ''

            if (this.item > 26) {
              this.item = 0
            }
          }
        } else {
          alert('Ya fue resuelta')
          this.item++
        }
      }
    },

    seleccionado (palabra) {
      console.log(palabra)
      this.palabraseleccionada = palabra
    },
    saltar () {
      this.palabras.forEach(ele => {
        if (ele.letra == this.palabraseleccionada.letra) {
          ele.estilo = 'item--saltada'
        }
      })
      //poner en color amarillo
      this.item++
      if (this.item > 26) {
        this.item = 0
      }
      //  console.log('Saltando')

      console.log(this.palabraseleccionada.nextLetra)
      this.palabraseleccionada = this.palabras.filter(
        ele => ele.letra == this.palabraseleccionada.nextLetra
      )[0]
    }
  },

  mounted () {
    this.palabraseleccionada = this.palabras.filter(el => {
      return el.id.toLowerCase() == 1
    })[0]
  }
}
</script>
<style scoped>
.v-list-item.v-list-item--link.theme--light.estilo-basico {
  color: blue !important;
}
.v-list-item.v-item--active.v-list-item--active.v-list-item--link.theme--light.estilo-basico {
  color: blue !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled).estilo-success {
  color: green !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled).estilo-error {
  color: red !important;
}
.v-list-item.v-item--active.v-list-item--active.v-list-item--link.theme--light.estilo-error {
  color: red !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled).estilo-saltada {
  color: rgb(255, 136, 0) !important;
}
.v-list-item.v-item--active.v-list-item--active.v-list-item--link.theme--light.estilo-saltada {
  color: rgb(255, 136, 0) !important;
}

.circle {
  position: relative;
  width: 22em;
  height: 22em;
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
  transform: rotate(275.4deg) translate(10.6875em) rotate(-278.4deg);
}
.circle > *:nth-of-type(2) {
  transform: rotate(292.3deg) translate(10.6875em) rotate(-291.3deg);
}
.circle > *:nth-of-type(3) {
  transform: rotate(305.32deg) translate(10.6875em) rotate(-304.32deg);
}
.circle > *:nth-of-type(4) {
  transform: rotate(318.28deg) translate(10.6875em) rotate(-317.28deg);
}
.circle > *:nth-of-type(5) {
  transform: rotate(330.24deg) translate(10.6875em) rotate(-330.24deg);
}
.circle > *:nth-of-type(6) {
  transform: rotate(343.2deg) translate(10.6875em) rotate(-343.2deg);
}
.circle > *:nth-of-type(7) {
  transform: rotate(356.16deg) translate(10.6875em) rotate(-356.16deg);
}

.circle > *:nth-of-type(8) {
  transform: rotate(369.12deg) translate(10.6875em) rotate(-369.12deg);
}

.circle > *:nth-of-type(9) {
  transform: rotate(382.08deg) translate(10.6875em) rotate(-382.08deg);
}

.circle > *:nth-of-type(10) {
  transform: rotate(395.04deg) translate(10.6875em) rotate(-395.04deg);
}

.circle > *:nth-of-type(11) {
  transform: rotate(408deg) translate(10.6875em) rotate(-408deg);
}

.circle > *:nth-of-type(12) {
  transform: rotate(420.96deg) translate(10.6875em) rotate(-420.96deg);
}

.circle > *:nth-of-type(13) {
  transform: rotate(433.92deg) translate(10.6875em) rotate(-433.92deg);
}

.circle > *:nth-of-type(14) {
  transform: rotate(446.88deg) translate(10.6875em) rotate(-446.88deg);
}
.circle > *:nth-of-type(15) {
  transform: rotate(459.84deg) translate(10.6875em) rotate(-459.84deg);
}
.circle > *:nth-of-type(16) {
  transform: rotate(472.8deg) translate(10.6875em) rotate(-472.8deg);
}
.circle > *:nth-of-type(17) {
  transform: rotate(485.76deg) translate(10.6875em) rotate(-485.76deg);
}
.circle > *:nth-of-type(18) {
  transform: rotate(498.72deg) translate(10.6875em) rotate(-498.72deg);
}
.circle > *:nth-of-type(19) {
  transform: rotate(511.68deg) translate(10.6875em) rotate(-511.68deg);
}
.circle > *:nth-of-type(20) {
  transform: rotate(524.54deg) translate(10.6875em) rotate(-524.54deg);
}
.circle > *:nth-of-type(21) {
  transform: rotate(537.6deg) translate(10.6875em) rotate(-537.6deg);
}
.circle > *:nth-of-type(22) {
  transform: rotate(550.56deg) translate(10.6875em) rotate(-550.56deg);
}
.circle > *:nth-of-type(23) {
  transform: rotate(563.52deg) translate(10.6875em) rotate(-563.52deg);
}
.circle > *:nth-of-type(24) {
  transform: rotate(576.48deg) translate(10.6875em) rotate(-576.48deg);
}
.circle > *:nth-of-type(25) {
  transform: rotate(589.44deg) translate(10.6875em) rotate(-589.44deg);
}
.circle > *:nth-of-type(26) {
  transform: rotate(602.4deg) translate(10.6875em) rotate(-602.4deg);
}
.circle > *:nth-of-type(27) {
  transform: rotate(619.36deg) translate(10.6875em) rotate(-615.36deg);
}

.circle .items {
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


.circle .item--saltada{
  background-image:radial-gradient(circle,yellow,yellowgreen)
}
</style>
