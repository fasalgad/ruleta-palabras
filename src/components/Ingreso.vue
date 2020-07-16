<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="1080" tile>
          <v-list rounded>
            <v-subheader>Lista</v-subheader>
            <v-list-item-group v-model="item" color="green">
              <v-list-item
                v-for="(palabra, index) in palabras"
                :key="index"
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
        significado: 'Analítico',
        descripcion: 'Perteneciente o relativo al análisis.'
      },
      {
        id: '2',
        letra: 'B',
        significado: 'Bellotero',
        descripcion: 'Persona que recolecta o vende bellotas.'
      },
      {
        id: '3',
        letra: 'C',
        significado: 'Clave',
        descripcion:
          'Código de signos convencionales y cifrados que se emplea para escribir y leer mensajes secretos para otras personas.'
      },
      {
        id: '4',
        letra: 'D',
        significado: 'Desclavar',
        descripcion: 'Arrancar o quitar un clavo'
      },
      {
        id: '5',
        letra: 'E',
        significado: 'Edificable',
        descripcion: 'Dicho de un terreno: propio para edificar'
      },
      {
        id: '6',
        letra: 'F',
        significado: 'Forma',
        descripcion: 'Modo o manera en que se hace o en que ocurre algo'
      },
      {
        id: '7',
        letra: 'G',
        significado: 'Gitanismo',
        descripcion:
          'Vocablo o giro propio de la lengua que hablan los gitanos.'
      },
      {
        id: '8',
        letra: 'H',
        significado: 'Hondero',
        descripcion: 'Soldado que usaba honda en la guerra.  '
      },
      {
        id: '9',
        letra: 'I',
        significado: 'Inadvertencia',
        descripcion: 'Falta de advertencia.'
      },
      {
        id: '10',
        letra: 'J',
        significado: 'justificadamente',
        descripcion: 'De manera justificada'
      },
      {
        id: '11',
        letra: 'K',
        significado: 'Kilogramo',
        descripcion:
          'Unidad de masa del Sistema Internacional, de símbolo kg, que equivale a la masa del prototipo de platino iridiado que se encuentra en la Oficina Internacional de Pesas y Medidas de París.'
      },
      {
        id: '12',
        letra: 'L',
        significado: 'Lucha',
        descripcion:
          'Esfuerzo que se hace para resistir a una fuerza hostil o a una tentación, para subsistir o para alcanzar algún objetivo'
      },
      {
        id: '13',
        letra: 'M',
        significado: 'Marcar',
        descripcion:
          'Pulsar en un teléfono los números de otro para comunicar con él.'
      },
      {
        id: '14',
        letra: 'N',
        significado: 'Nivelado',
        descripcion: 'Contiene N: Que presenta desnivel.'
      },
      {
        id: '15',
        letra: 'Ñ',
        significado: 'Ñoñería',
        descripcion: 'Algo soso o con poca gracia'
      },
      {
        id: '16',
        letra: 'O',
        significado: 'Oceanográfico',
        descripcion: 'Perteneciente o relativo a la oceanografía'
      },
      {
        id: '17',
        letra: 'P',
        significado: 'Presente',
        descripcion:
          'Obsequio, regalo que alguien da a otra persona en señal de reconocimiento o de afecto.'
      },
      {
        id: '18',
        letra: 'Q',
        significado: 'Quisquilloso',
        descripcion:
          'Que se ofende fácilmente por cosas insignificantes a las que da mayor valor o importancia de la que merecen.'
      },
      {
        id: '19',
        letra: 'R',
        significado: 'Repartir',
        descripcion:
          'Entregar a personas distintas lo que han encargado o deben recibir'
      },
      {
        id: '20',
        letra: 'S',
        significado: 'Subarriendo',
        descripcion: 'Acción y efecto de subarrendar'
      },
      {
        id: '21',
        letra: 'T',
        significado: 'Trifloro',
        descripcion: 'Que tiene tres flores'
      },
      {
        id: '22',
        letra: 'U',
        significado: 'Ukelele',
        descripcion:
          'Instrumento musical de cuerdas similar a la guitarra pero de menor tamaño.'
      },
      {
        id: '23',
        letra: 'V',
        significado: 'Volante',
        descripcion:
          'Hoja impresa, de carácter político o publicitario, que se reparte en lugares públicos.'
      },
      {
        id: '24',
        letra: 'W',
        significado: 'Web',
        descripcion:
          'Conjunto de información que se encuentra en una dirección determinada de internet.'
      },
      {
        id: '25',
        letra: 'X',
        significado: 'Xilófono',
        descripcion:
          'Instrumento musical de percusión compuesto de láminas de madera o metal.'
      },
      {
        id: '26',
        letra: 'Y',
        significado: 'Yo',
        descripcion:
          'Pronombre con el que la persona que habla o escribe se refiere a sí misma; es la forma del pronombre personal de primera persona del singular cuando ejerce la función de sujeto, tanto en masculino como en femenino.'
      },
      {
        id: '27',
        letra: 'Z',
        significado: 'Zapallo',
        descripcion:
          'Planta cucurbitácea de tallos rastreros y provistos de zarcillos, hojas grandes, anchas y lobuladas, flores amarillas y fruto comestible, con multitud de semillas aplanadas; existen varias especies.'
      }
    ]
  }),
  mounted () {
    this.palabraseleccionada = this.palabras.filter(el => {
      return el.letra.toLowerCase() == 'a'
    })[0]
  },

  methods: {
    irHome () {
      console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('/')
    },
    seleccionado (palabra) {
      console.log(palabra)
    },
    saltar () {
      console.log('Saltando')
    },
    
    validate () {
      if (this.$refs.form.validate()) {
        console.log(this.termino)
        console.log(this.palabraseleccionada)
      }
    }
  }
}
</script>
