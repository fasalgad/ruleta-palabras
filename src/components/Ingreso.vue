<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="1080" tile>
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
        <v-row>

          <v-col>
            <label>El término correcto era: {{ actual }}</label>
          </v-col>

          <v-col>
            <label>Correctas: {{ correctas }}</label>
          </v-col>

          <v-col>
            <label>Malas: {{ malas }}</label>
          </v-col>
          
        </v-row>
      </v-col>
    </v-row>

    <v-btn @click="irHome" color="blue">
      Volver al inicio
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Ingreso',

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
    ],
    palabras: [
      {
        id: '1',
        letra: 'A',
        nextLetra: 'B',
        significado: 'Analítico',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Perteneciente o relativo al análisis.'
      },
      {
        id: '2',
        letra: 'B',
        nextLetra: 'C',
        significado: 'Bellotero',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Persona que recolecta o vende bellotas.'
      },
      {
        id: '3',
        letra: 'C',
        nextLetra: 'D',
        significado: 'Clave',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Código de signos convencionales y cifrados que se emplea para escribir y leer mensajes secretos para otras personas.'
      },
      {
        id: '4',
        letra: 'D',
        nextLetra: 'E',
        significado: 'Desclavar',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Arrancar o quitar un clavo'
      },
      {
        id: '5',
        letra: 'E',
        nextLetra: 'F',
        significado: 'Edificable',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Dicho de un terreno: propio para edificar'
      },
      {
        id: '6',
        letra: 'F',
        nextLetra: 'G',
        significado: 'Forma',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Modo o manera en que se hace o en que ocurre algo'
      },
      {
        id: '7',
        letra: 'G',
        nextLetra: 'H',
        significado: 'Gitanismo',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Vocablo o giro propio de la lengua que hablan los gitanos.'
      },
      {
        id: '8',
        letra: 'H',
        nextLetra: 'I',
        significado: 'Hondero',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Soldado que usaba honda en la guerra.  '
      },
      {
        id: '9',
        letra: 'I',
        nextLetra: 'J',
        significado: 'Inadvertencia',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Falta de advertencia.'
      },
      {
        id: '10',
        letra: 'J',
        nextLetra: 'K',
        significado: 'justificadamente',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'De manera justificada'
      },
      {
        id: '11',
        letra: 'K',
        nextLetra: 'L',
        significado: 'Kilogramo',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Unidad de masa del Sistema Internacional, de símbolo kg, que equivale a la masa del prototipo de platino iridiado que se encuentra en la Oficina Internacional de Pesas y Medidas de París.'
      },
      {
        id: '12',
        letra: 'L',
        nextLetra: 'M',
        significado: 'Lucha',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Esfuerzo que se hace para resistir a una fuerza hostil o a una tentación, para subsistir o para alcanzar algún objetivo'
      },
      {
        id: '13',
        letra: 'M',
        nextLetra: 'N',
        significado: 'Marcar',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Pulsar en un teléfono los números de otro para comunicar con él.'
      },
      {
        id: '14',
        letra: 'N',
        nextLetra: 'Ñ',
        significado: 'Nivelado',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Que presenta desnivel.'
      },
      {
        id: '15',
        letra: 'Ñ',
        nextLetra: 'O',
        significado: 'Ñoñería',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Algo soso o con poca gracia'
      },
      {
        id: '16',
        letra: 'O',
        nextLetra: 'P',
        significado: 'Oceanográfico',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Perteneciente o relativo a la oceanografía'
      },
      {
        id: '17',
        letra: 'P',
        nextLetra: 'Q',
        significado: 'Presente',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Obsequio, regalo que alguien da a otra persona en señal de reconocimiento o de afecto.'
      },
      {
        id: '18',
        letra: 'Q',
        nextLetra: 'R',
        significado: 'Quisquilloso',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Que se ofende fácilmente por cosas insignificantes a las que da mayor valor o importancia de la que merecen.'
      },
      {
        id: '19',
        letra: 'R',
        nextLetra: 'S',
        significado: 'Repartir',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Entregar a personas distintas lo que han encargado o deben recibir'
      },
      {
        id: '20',
        letra: 'S',
        nextLetra: 'T',
        significado: 'Subarriendo',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Acción y efecto de subarrendar'
      },
      {
        id: '21',
        letra: 'T',
        nextLetra: 'U',
        significado: 'Trifloro',
        estilo: 'estilo-basico',
        activa: true,
        descripcion: 'Que tiene tres flores'
      },
      {
        id: '22',
        letra: 'U',
        nextLetra: 'V',
        significado: 'Ukelele',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Instrumento musical de cuerdas similar a la guitarra pero de menor tamaño.'
      },
      {
        id: '23',
        letra: 'V',
        nextLetra: 'W',
        significado: 'Volante',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Hoja impresa, de carácter político o publicitario, que se reparte en lugares públicos.'
      },
      {
        id: '24',
        letra: 'W',
        nextLetra: 'X',
        significado: 'Web',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Conjunto de información que se encuentra en una dirección determinada de internet.'
      },
      {
        id: '25',
        letra: 'X',
        nextLetra: 'Y',
        significado: 'Xilófono',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Instrumento musical de percusión compuesto de láminas de madera o metal.'
      },
      {
        id: '26',
        letra: 'Y',
        nextLetra: 'Z',
        significado: 'Yo',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Pronombre con el que la persona que habla o escribe se refiere a sí misma; es la forma del pronombre personal de primera persona del singular cuando ejerce la función de sujeto, tanto en masculino como en femenino.'
      },
      {
        id: '27',
        letra: 'Z',
        nextLetra: 'A',
        significado: 'Zapallo',
        estilo: 'estilo-basico',
        activa: true,
        descripcion:
          'Planta cucurbitácea de tallos rastreros y provistos de zarcillos, hojas grandes, anchas y lobuladas, flores amarillas y fruto comestible, con multitud de semillas aplanadas; existen varias especies.'
      }
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
            this.malas++
            this.actual = this.palabraseleccionada.significado
            //this.item++

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
    irHome () {
      console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('/')
    },
    seleccionado (palabra) {
      console.log(palabra)
      this.palabraseleccionada = palabra
    },
    saltar () {
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
</style>
