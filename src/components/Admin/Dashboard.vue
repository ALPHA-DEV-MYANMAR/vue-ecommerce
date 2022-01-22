<template>

  <div class="main" >
    <div class="container-fluid">
      <!--header-->
      <div class="row">

        <!--sidebar-->
        <div class="col-12 col-md-12 col-lg-2 sidebar" v-if="position" >
          <!--menu-->
          <div class="d-flex justify-content-between align-items-center p-2">
            <div class="h4 m-0">Shop</div>
            <div class="">
              <button class="btn btn-close d-lg-none d-xl-none" @click="position = false" ></button>
            </div>
          </div>
          <Menu></Menu>
          <!--menu-->
        </div>
        <!--sidebar-->

        <!--content-->
        <div class="col-12 col-md-12 col-lg-10 content">
        <!--navbar-->
            <div>
              <button class="btn btn-outline-primary d-lg-none d-xl-none" @click="showSide" >show</button>
            </div>
        <!--navbar-->
        </div>

      </div>
      <!--header-->

      <!--content-->
      <div class="row">
        <div class="col-12">
          <router-view/>
        </div>
      </div>
      <!--content-->
    </div>
  </div>

</template>

<script>
import Menu from "./Menu";
export default {
  name: "dashboard",
  components: {  Menu},
  data() {
    return {
      position: true ,
    }
  },
  methods: {
    showSide() {
      this.position = true
    }
  },
}
</script>

<style scoped>

</style>