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
                @click="seleccionado(palabra)"
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

          <v-btn color="error" class="mr-4" @click="saltar">
            Siguiente
          </v-btn>
        </v-form>
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
        descripcion: 'Perteneciente o relativo al análisis.'
      },
      {
        id: '2',
        letra: 'B',
        nextLetra: 'C',
        significado: 'Bellotero',
        descripcion: 'Persona que recolecta o vende bellotas.'
      },
      {
        id: '3',
        letra: 'C',
        nextLetra: 'D',
        significado: 'Clave',
        descripcion:
          'Código de signos convencionales y cifrados que se emplea para escribir y leer mensajes secretos para otras personas.'
      },
      {
        id: '4',
        letra: 'D',
        nextLetra: 'E',
        significado: 'Desclavar',
        descripcion: 'Arrancar o quitar un clavo'
      },
      {
        id: '5',
        letra: 'E',
        nextLetra: 'F',
        significado: 'Edificable',
        descripcion: 'Dicho de un terreno: propio para edificar'
      },
      {
        id: '6',
        letra: 'F',
        nextLetra: 'G',
        significado: 'Forma',
        descripcion: 'Modo o manera en que se hace o en que ocurre algo'
      },
      {
        id: '7',
        letra: 'G',
        nextLetra: 'H',
        significado: 'Gitanismo',
        descripcion:
          'Vocablo o giro propio de la lengua que hablan los gitanos.'
      },
      {
        id: '8',
        letra: 'H',
        nextLetra: 'I',
        significado: 'Hondero',
        descripcion: 'Soldado que usaba honda en la guerra.  '
      },
      {
        id: '9',
        letra: 'I',
        nextLetra: 'J',
        significado: 'Inadvertencia',
        descripcion: 'Falta de advertencia.'
      },
      {
        id: '10',
        letra: 'J',
        nextLetra: 'K',
        significado: 'justificadamente',
        descripcion: 'De manera justificada'
      },
      {
        id: '11',
        letra: 'K',
        nextLetra: 'L',
        significado: 'Kilogramo',
        descripcion:
          'Unidad de masa del Sistema Internacional, de símbolo kg, que equivale a la masa del prototipo de platino iridiado que se encuentra en la Oficina Internacional de Pesas y Medidas de París.'
      },
      {
        id: '12',
        letra: 'L',
        nextLetra: 'M',
        significado: 'Lucha',
        descripcion:
          'Esfuerzo que se hace para resistir a una fuerza hostil o a una tentación, para subsistir o para alcanzar algún objetivo'
      },
      {
        id: '13',
        letra: 'M',
        nextLetra: 'N',
        significado: 'Marcar',
        descripcion:
          'Pulsar en un teléfono los números de otro para comunicar con él.'
      },
      {
        id: '14',
        letra: 'N',
        nextLetra: 'Ñ',
        significado: 'Nivelado',
        descripcion: 'Que presenta desnivel.'
      },
      {
        id: '15',
        letra: 'Ñ',
        nextLetra: 'O',
        significado: 'Ñoñería',
        descripcion: 'Algo soso o con poca gracia'
      },
      {
        id: '16',
        letra: 'O',
        nextLetra: 'P',
        significado: 'Oceanográfico',
        descripcion: 'Perteneciente o relativo a la oceanografía'
      },
      {
        id: '17',
        letra: 'P',
        nextLetra: 'Q',
        significado: 'Presente',
        descripcion:
          'Obsequio, regalo que alguien da a otra persona en señal de reconocimiento o de afecto.'
      },
      {
        id: '18',
        letra: 'Q',
        nextLetra: 'R',
        significado: 'Quisquilloso',
        descripcion:
          'Que se ofende fácilmente por cosas insignificantes a las que da mayor valor o importancia de la que merecen.'
      },
      {
        id: '19',
        letra: 'R',
        nextLetra: 'S',
        significado: 'Repartir',
        descripcion:
          'Entregar a personas distintas lo que han encargado o deben recibir'
      },
      {
        id: '20',
        letra: 'S',
        nextLetra: 'T',
        significado: 'Subarriendo',
        descripcion: 'Acción y efecto de subarrendar'
      },
      {
        id: '21',
        letra: 'T',
        nextLetra: 'U',
        significado: 'Trifloro',
        descripcion: 'Que tiene tres flores'
      },
      {
        id: '22',
        letra: 'U',
        nextLetra: 'V',
        significado: 'Ukelele',
        descripcion:
          'Instrumento musical de cuerdas similar a la guitarra pero de menor tamaño.'
      },
      {
        id: '23',
        letra: 'V',
        nextLetra: 'W',
        significado: 'Volante',
        descripcion:
          'Hoja impresa, de carácter político o publicitario, que se reparte en lugares públicos.'
      },
      {
        id: '24',
        letra: 'W',
        nextLetra: 'X',
        significado: 'Web',
        descripcion:
          'Conjunto de información que se encuentra en una dirección determinada de internet.'
      },
      {
        id: '25',
        letra: 'X',
        nextLetra: 'Y',
        significado: 'Xilófono',
        descripcion:
          'Instrumento musical de percusión compuesto de láminas de madera o metal.'
      },
      {
        id: '26',
        letra: 'Y',
        nextLetra: 'Z',
        significado: 'Yo',
        descripcion:
          'Pronombre con el que la persona que habla o escribe se refiere a sí misma; es la forma del pronombre personal de primera persona del singular cuando ejerce la función de sujeto, tanto en masculino como en femenino.'
      },
      {
        id: '27',
        letra: 'Z',
        nextLetra: 'A',
        significado: 'Zapallo',
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
        if (
          this.palabraseleccionada.significado.toLowerCase() ==
          this.termino.toLowerCase()
        ) {



          this['estilo1'] = {
            border: 'solid blue'
          }





          
          //Cuando la palabra es igual
          //Debe pasar a la siguiente letra
          console.log(this.palabraseleccionada.letra)
          this.palabraseleccionada = this.palabras.filter(
            ele => ele.letra == this.palabraseleccionada.nextLetra
          )[0]

        

          
          this.item++
          this.termino = ''
          ///// Aqui deberia intentar cambiar el color
          if (this.item > 26) {
            this.item = 0
          }
        } /*else {

         /* this.item++
          this.termino = ''
           this['estilo1']={
            border:'solid red '
          }
          if (this.item > 26) {
            this.item = 0
          }

        } */
      }
    },
    irHome () {
      console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('/')
    },
    seleccionado (palabra) {
      this.palabraseleccionada == palabra
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
