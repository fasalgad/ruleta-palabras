<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="1080">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="blue" dark v-bind="attrs" v-on="on">
          LISTA DE RESPUESTAS
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="green">
          Resultados Esperados
        </v-card-title>
        <v-card-text>
          <ol>
            <li v-for="(ob, i) in result" :key="i" dark>
              {{ ob.letra }} -> {{ ob.significado }} : {{ ob.descripcion }}
            </li>
          </ol>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" text @click="dialog = false">
            OK!!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Resultados',

  computed: {
    result () {
      return this.$store.state.palabrasSeleccionadas
    }
  },
  data () {
    return {
      dialog: false,
    }
  }
}
</script>
