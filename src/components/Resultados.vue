<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="1000">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="blue" dark v-bind="attrs" v-on="on">
          LISTA DE RESPUESTAS
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Resultados Esperados
        </v-card-title>

        <v-card-text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ipsam
          perferendis aliquid quaerat possimus hic aliquam et cum consectetur
          dolor! Qui a unde, ullam quo dignissimos iusto quisquam? Blanditiis,
          placeat?
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
  data () {
    return {
      dialog: false
    }
  }
}
</script>
