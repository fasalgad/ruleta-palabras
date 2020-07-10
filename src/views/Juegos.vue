<template>
  <v-container>


  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>



    <v-row>

      <v-col cols="12" sm="6">
        <v-layout>
          <v-flex>
            <v-btn @click="irRuleta" dark color="green">
              Jugar Ruleta Palabra
            </v-btn>
          </v-flex>
        </v-layout>
      </v-col>

      <v-col cols="12" sm="6">
        <v-layout>
          <v-flex>
            <v-btn dark color="blue" >
              Mirar más
            </v-btn>
          </v-flex>
        </v-layout>
      </v-col>









    </v-row>






<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iste consectetur odit nulla! Necessitatibus laudantium voluptas, commodi cum repellendus molestias tenetur deserunt? Non molestiae nobis repellat error fugiat sequi aspernatur.</p>
  


  
  </v-container>
  

</template>

<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'
*/
export default {
  data(){
  return {
        items: [
          {
            src: 'https://as.com/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg',
          },
          {
            src: 'https://i.ytimg.com/vi/4XWlQTIPRIg/maxresdefault.jpg',
          },
          {
            src: 'https://i.pinimg.com/originals/d2/c3/7b/d2c37b6ee4f2e599a45788a4aa4b1a13.jpg',
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQq9UofVv83xNybMnv5aAhGjjYJgplYag8NKA&usqp=CAU',
          },
        ],
      }
    
  },
  /*name: 'Home',
  components: {
    HelloWorld
 // },*/
  methods:{
    irRuleta(){
      console.log('this.$route',this.$route)
      console.log('this.$router',this.$router)
      this.$router.push('Ruleta')
    }
  }
}
</script>
