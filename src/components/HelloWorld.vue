<template>
  <div style="width: 100%">
    <div class="container-fluid">

      <div class="row">
        <div class="col-12">
          <CarouselBS></CarouselBS>
        </div>
        </div>
      </div>

      <div class="row">
            <div class="m-3 h5 fw-bolder">
              Categories
            </div>
            <div >
              <Categories></Categories>
            </div>
      </div>

      <div class="row">
        <div class="m-3 h5 fw-bolder">
          Just For You
        </div>
        <Products></Products>
        <div class="mx-auto w-50">
          <router-link class="nav-link text-center"  to="/product">
              show all products
          </router-link>
        </div>
      </div>

  </div>
</template>

<script>
import Carousel from "./Carousel";
import Categories from "./Categories";
import Products from "./Products";
import CarouselBS from "./CarouselBS";
export default {
  name:'HelloWorld',
  components: {CarouselBS, Products, Categories},
}
</script>

<style scoped>

</style>