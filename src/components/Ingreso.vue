<template>
    <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <p>La ruleta palabra consiste en bla bla bla</p>
      </v-col>

      <v-col cols="12" sm="8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          cupiditate totam optio ipsa fugiat. Accusamus dolorum, magni, eum
          eligendi consequuntur quo, tempora ipsa dolore possimus voluptatum
          repellendus. Accusantium, explicabo dolorum?
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col> </v-col>

      <v-col>
        <h1>Responde</h1>
        <br />

        <v-row align="center">
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field
              v-model="Palabra"
              :counter="123"
              label="Palabra"
              required
            ></v-text-field>

            <v-btn color="warning" class="mr-4" @click="saltar">
              Pasa Palabra
            </v-btn>

            <v-btn color="green" @click="comprobar">
              Comprobar
            </v-btn>
          </v-form>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center">
        <v-layout>
          <v-flex>
            <v-btn @click="irHome" color="blue">
              Volver al inicio
            </v-btn>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
 


      methods: {
    irHome () {
      console.log('this.$route', this.$route)
      console.log('this.$router', this.$router)
      this.$router.push('/')
    }
  },
     name: 'Ingreso'
}
</script>