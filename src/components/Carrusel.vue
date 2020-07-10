<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src:
            'https://as.com/meristation/imagenes/2020/03/16/reportajes/1584376493_455501_1584428561_noticia_normal.jpg'
        },
        {
          src: 'https://i.ytimg.com/vi/4XWlQTIPRIg/maxresdefault.jpg'
        },
        {
          src:
            'https://i.pinimg.com/originals/d2/c3/7b/d2c37b6ee4f2e599a45788a4aa4b1a13.jpg'
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQq9UofVv83xNybMnv5aAhGjjYJgplYag8NKA&usqp=CAU'
        }
      ]
    }
  },
  name: 'Carrusel'
}
</script>
