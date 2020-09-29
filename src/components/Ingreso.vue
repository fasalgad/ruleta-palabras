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
              :class="clasesLetras(palabra)"
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
        <v-row>
          <v-card
            class="pregunta"
            max-width="600"
            max-height="385"
            justify="center"
          >
            <v-card-title class="headline">
              Con la letra {{ palabraseleccionada.letra}} :<br />
              {{ palabraseleccionada.descripcion }}
            </v-card-title>
            <center></center>
          </v-card>
        </v-row>
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
              Responder

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
  </v-container>
</template>

<script>
export default {
  name: 'Ingreso',
  // props: {
  //   palabras: Array
  // },
  data: () => ({
    posicionLetra: 'A',
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
  computed: {
    palabras () {
      console.log(this.$store.state.palabrasSeleccionadas)
      return this.$store.state.palabrasSeleccionadas
    }
  },
  methods: {
    clasesLetras({estilo,enabled}){
      return {
        'item--success':estilo=='item--success',
        'item--failure':estilo=='item--failure',
        'item--saltada':estilo=='item--saltada',

     'item--enabled':!enabled
      }
    },
    validate () {
      
      let palabras = [... this.$store.state.palabrasSeleccionadas]
      console.group('validate')
      console.log(palabras)
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

            palabras.forEach(ele => {
              if (ele.letra == this.palabraseleccionada.letra) {
                console.log(ele.letra)
                ele.estilo = 'item--success'
                ele.activa = false
              }
            })
            
            do{
              this.palabraseleccionada = palabras.filter(
                ele => ele.letra == this.palabraseleccionada.nextLetra
              )[0]
            }while(this.palabraseleccionada.enabled==false)
            
            this.ap++
            this.item++
            this.termino = ''
            if (this.item > 26) {
              this.item = 0
            }
          } else {
            palabras.forEach(ele => {
              if (ele.letra == this.palabraseleccionada.letra) {
                ele.estilo = 'item--failure'
                this.actual = this.palabraseleccionada.significado
              }
            })
          do{
              this.palabraseleccionada = palabras.filter(
                ele => ele.letra == this.palabraseleccionada.nextLetra
              )[0]
            }while(this.palabraseleccionada.enabled==false)
            this.item++
            this.ap++
            this.malas++
            
            this.termino = ''
           

            if (this.item > 26) {
              this.item = 0
            }
          }
        } else {
           alert('Ya fue resuelta')
          this.item++
           do{
              this.palabraseleccionada = palabras.filter(
                ele => ele.letra == this.palabraseleccionada.nextLetra
              )[0]
            }while(this.palabraseleccionada.enabled==false)
         
        }
      }
      console.groupEnd('validate')
    },

    seleccionado (palabra) {
      console.log(palabra)
      this.palabraseleccionada = palabra
    },
    saltar () {
      let palabras = [...this.$store.state.palabrasSeleccionadas]
      palabras.forEach(ele => {
        if (ele.letra == this.palabraseleccionada.letra) {
          if(this.palabraseleccionada.activa == true){
            
          ele.estilo = 'item--saltada'}
        }
      })
      //poner en color amarillo
      do{
              this.palabraseleccionada = palabras.filter(
                ele => ele.letra == this.palabraseleccionada.nextLetra
              )[0]
            }while(this.palabraseleccionada.enabled==false)
      //  console.log('Saltando')
      console.log(this.palabraseleccionada.nextLetra)
 
    }
  },

  mounted () {
    console.group('Mounted')
    let palabras = [...this.$store.state.palabrasSeleccionadas]
    
    this.palabraseleccionada = palabras.find(ele=>{
      return ele.enabled==true
    })
    console.log(this.palabraseleccionada)
    console.groupEnd('Mounted')
  }
}
</script>
<style scoped>
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
  top: 65%;
  left: 50%;
  width: 1.25em;
  height: 1.25em;
  margin: -0.625em;
}
.circle > *:nth-of-type(1) {
  transform: rotate(275.4deg) translate(16em) rotate(-278.4deg);
}
.circle > *:nth-of-type(2) {
  transform: rotate(288.65deg) translate(16em) rotate(-291.3deg);
}
.circle > *:nth-of-type(3) {
  transform: rotate(301.9deg) translate(16em) rotate(-304.32deg);
}
.circle > *:nth-of-type(4) {
  transform: rotate(315.15deg) translate(16em) rotate(-317.28deg);
}
.circle > *:nth-of-type(5) {
  transform: rotate(328.4deg) translate(16em) rotate(-330.24deg);
}
.circle > *:nth-of-type(6) {
  transform: rotate(341.65deg) translate(16em) rotate(-343.2deg);
}
.circle > *:nth-of-type(7) {
  transform: rotate(354.9deg) translate(16em) rotate(-356.16deg);
}

.circle > *:nth-of-type(8) {
  transform: rotate(368.15deg) translate(16em) rotate(-368.15deg);
}

.circle > *:nth-of-type(9) {
  transform: rotate(381.4deg) translate(16em) rotate(-382.08deg);
}

.circle > *:nth-of-type(10) {
  transform: rotate(394.65deg) translate(16em) rotate(-395.04deg);
}

.circle > *:nth-of-type(11) {
  transform: rotate(407.9deg) translate(16em) rotate(-408deg);
}

.circle > *:nth-of-type(12) {
  transform: rotate(421.15deg) translate(16em) rotate(-420.96deg);
}

.circle > *:nth-of-type(13) {
  transform: rotate(434.4deg) translate(16em) rotate(-433.92deg);
}

.circle > *:nth-of-type(14) {
  transform: rotate(447.65deg) translate(16em) rotate(-446.88deg);
}
.circle > *:nth-of-type(15) {
  transform: rotate(460.9deg) translate(16em) rotate(-459.84deg);
}
.circle > *:nth-of-type(16) {
  transform: rotate(474deg) translate(16em) rotate(-472.8deg);
}
.circle > *:nth-of-type(17) {
  transform: rotate(486.6deg) translate(16em) rotate(-485.76deg);
}
.circle > *:nth-of-type(18) {
  transform: rotate(500.5deg) translate(16em) rotate(-498.72deg);
}
.circle > *:nth-of-type(19) {
  transform: rotate(514.4deg) translate(16em) rotate(-511.68deg);
}
.circle > *:nth-of-type(20) {
  transform: rotate(529.3deg) translate(16em) rotate(-524.54deg);
}
.circle > *:nth-of-type(21) {
  transform: rotate(543deg) translate(16em) rotate(-537.6deg);
}
.circle > *:nth-of-type(22) {
  transform: rotate(556deg) translate(16em) rotate(-550.56deg);
}
.circle > *:nth-of-type(23) {
  transform: rotate(569.55deg) translate(16em) rotate(-563.52deg);
}
.circle > *:nth-of-type(24) {
  transform: rotate(582.4deg) translate(16em) rotate(-576.48deg);
}
.circle > *:nth-of-type(25) {
  transform: rotate(595.9deg) translate(16em) rotate(-589.44deg);
}
.circle > *:nth-of-type(26) {
  transform: rotate(609.44deg) translate(16em) rotate(-602.4deg);
}
.circle > *:nth-of-type(27) {
  transform: rotate(622.5deg) translate(16em) rotate(-619.6deg);
}

.circle .items {
  display: block;
  width: 3.5em;
  height: 3.5em;
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
.circle .item--saltada {
  background-image: radial-gradient(circle, yellow, yellowgreen);
}

.circle .item--enabled {
  background-image: radial-gradient(circle, #222, #777);
}



.circle .item--actual {
  background-image: radial-gradient(circle, rgb(205, 50, 153), rgb(50, 205, 120));
}

</style>
