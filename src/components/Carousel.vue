<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img :src="banner" >
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      banners: [
          'https://firebasestorage.googleapis.com/v0/b/personal-34526.appspot.com/o/shop1.jpg?alt=media&token=0314cd0c-3f72-4728-aa0a-053f48a2b133',
          'https://firebasestorage.googleapis.com/v0/b/personal-34526.appspot.com/o/shop2.jpg?alt=media&token=3842d7e0-8666-4c6b-90e7-b37f8f35896a',
          'https://firebasestorage.googleapis.com/v0/b/personal-34526.appspot.com/o/shop3.jpg?alt=media&token=bafed0a0-516e-4648-9576-2eebc59cb2f5',
          'https://firebasestorage.googleapis.com/v0/b/personal-34526.appspot.com/o/shop4.jpg?alt=media&token=42c23fb8-913e-401c-b514-82e42e1da6de',
          'https://firebasestorage.googleapis.com/v0/b/personal-34526.appspot.com/o/shop5.jpg?alt=media&token=adad6778-ad00-4fe6-a766-71576470a703'
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        // ...
      }
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.mySwiper)
    this.mySwiper.slideTo(3, 1000, false)
  }
}
</script>

<style scoped>

</style>