<template>
  <v-container>
    <v-row> </v-row>

    <v-row>
      <v-col>
        <p>hola</p>
        <ul>
          <li v-for="(palabra, index) in palabras"
            :key="index">
        {{ item.descripcion }}
          </li>
        </ul>
      </v-col>

      <v-col>
        <h1>Responde</h1>
        <br />

        <v-row align="center">
          <v-text-field
            label="Palabra"
            v-model="NuevaPalabra"
            required
            placeholder="Términsso"
            @input.enter="agregarpalabra"
          ></v-text-field>
          <v-btn color="warning" class="mr-4" @click="saltar">
            Pasa Palabra
          </v-btn>

          <v-btn color="blue" v-on:click="agregarpalabra">Comprobar</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-layout>
      <v-flex>
        <v-btn @click="irHome" color="blue">
          Volver al inicio
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Ingreso',
  data: {
    palabras: [
      {
        id: '1',
        letra: 'A',
        significado: 'Analítico',
        descripcion: 'Perteneciente o relativo al análisis.'
      },
      ,
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
    ],
    NuevaPalabra: ''
  },

  methods: {
    irHome () {
      console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('/')
    }
  },
  agregarpalabra () {
    this.NuevaPalabra = ''
  }
}
</script>
