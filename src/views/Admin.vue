<template>
  <v-container class="light-green lighten-5">
    <h1 class="Titulo">Sección para Edición de Preguntas</h1>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="6">
            <v-list class="light-green lighten-5" offset="1">
              <v-list-item v-for="(palabra, i) of palabras" :key="i">
                <v-list-item-content>
                  <v-card max-width="255" class="ColoresTarjeta">
                    <v-card-text>
                      {{ palabra.letra }}
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="green" @click="detailsChar(palabra)">
                        Modificar
                      </v-btn>
                      <v-btn color="#008CBA" @click="viewDetails(palabra)">
                        Ver detalles
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>


          <v-col cols="6">
            <div class="Detalle">
              <v-card max-width="500" max-height="400" color="green">
                <v-card-title class="TituloDetalle">
                  Detalle
                </v-card-title>
                <v-card-text>
                  Letra: {{ palabraSeleccionada.letra }} <br />
                  Término: {{ palabraSeleccionada.significado }} <br />
                  Significado: {{ palabraSeleccionada.descripcion }} <br />
                </v-card-text>
                <v-card-actions> </v-card-actions>
              </v-card>
            </div>
          </v-col>
        </v-row>

        <v-dialog v-model="dialog" persistent max-width="400">
          <v-card>
            <v-card-title class="headline">
              Vas a editar la letra {{ palabraSeleccionada.letra }}
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field
                        :rules="basico"
                        label="Significado"
                        placeholder="Significado"
                        outlined
                        v-model="palabraSeleccionada.significado"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-textarea
                        :rules="basico"
                        label="Descripción"
                        placeholder="Descripcion"
                        outlined
                        v-model="palabraSeleccionada.descripcion"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  Actualizar
                </v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false"
                >Cerrar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      palabras: [],
      dialog: false,
      palabraSeleccionada: {},
      valid: true,
      basico: [v => !!v || 'Campo es requerido'],
      lazy: false
    }
  },
  created () {
    this.loadPalabras()
  },
  methods: {
    loadPalabras () {
      this.$http.get('/palabras').then(response => {
        this.palabras = response.data
      })
    },
    detailsChar (palabra) {
      this.dialog = true
      // this.$set(this.someObject, 'b', 2)
      for (let prop in palabra) {
        this.$set(this.palabraSeleccionada, prop, palabra[prop])
      }
    },
    viewDetails (palabra) {
      for (let prop in palabra) {
        this.$set(this.palabraSeleccionada, prop, palabra[prop])
      }
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.$http
          .put(`/palabras/${this.palabraSeleccionada.id}`, {
            ...this.palabraSeleccionada
          })
          .then(response => {
            alert(`
              Se actualizó la letra ${response.data.letra}
              `)
            this.viewDetails(response)
            this.loadPalabras()
          })
      } else {
        alert('Error')
      }
    }
  }
}
</script>
<style scoped>
.Titulo {
  color: rgb(78, 167, 137);
  font-size: 25px;
  text-align: center;
  text-shadow: 2px 2px 5px rgb(0, 255, 115);
  text-decoration: overline;
}
.Detalle {
  position: fixed;
  width: 400;
}
.TituloDetalle {
  color: rgb(55, 74, 64);
}
</style>
