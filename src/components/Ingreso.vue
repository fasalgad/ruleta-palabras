<template>
  <v-container>
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

      <v-col>
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

        <v-col>
          <label>Término correspondiente: {{ actual }}</label>
        </v-col>

        <v-col>
          <label>Correctas: {{ correctas }}</label>
        </v-col>

        <v-col>
          <label>Número de errores: {{ malas }}</label>
          <span v-if="malas === 3">
            <v-alert type="error">
              Superaste el máximo de intentos
            </v-alert>
          </span>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Ingreso',
  props: {
    palabras: Array
  },
  data: () => ({
    item: 0, //posición en que inicia la lista
    valid: true,
    termino: '',
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
            console.log(this.palabraseleccionada.letra)
            this.palabraseleccionada.estilo = 'estilo-success'

            this.palabras.forEach(ele => {
              if (ele.letra == this.palabraseleccionada.letra) {
                ele.estilo = 'estilo-success'
                ele.activa = false
              }
            })

            this.palabraseleccionada = this.palabras.filter(
              ele => ele.letra == this.palabraseleccionada.nextLetra
            )[0]

            this.item++
            this.termino = ''
            ///// Aqui deberia intentar cambiar el color
            if (this.item > 26) {
              this.item = 0
            }
          } else {
            this.palabras.forEach(ele => {
              if (ele.letra == this.palabraseleccionada.letra) {
                ele.estilo = 'estilo-error'
              }
            })
            // this.item++
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
          ele.estilo = 'estilo-saltada'
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
</style>
