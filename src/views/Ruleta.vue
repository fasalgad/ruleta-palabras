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
  

    <h2>Cuadro de texto</h2>
    <input type="text" v-model="Palbra">
    
    <button @click=" agregarfruta ">Responder</button>


  </v-container>
</template>

