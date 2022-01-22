<template>
  <div>
    <div class="container-fluid">
      <div class="row">

        <div class="col-6 col-lg-2 " v-for="(product,index) in productList" :key="index">
          <div class="card product-card p-1" @click="goToProductDetail(product)">
            <div @click="showDetail(product)">
              <img class="img-fluid product-img" :src="product.image" alt="">
            </div>
            <div class="text-nowrap overflow-hidden">
              {{ product.name.substr(0,20) }}
            </div>
            <div>
              Ks - {{ product.price }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Products" ,
  data() {
    return {
      productList: []
    }
  },
  methods: {
    goToProductDetail(product) {
      console.log(product.id)
    },
    showDetail(product){
      this.$router.push({name: 'SingleProduct', params: { 'id' : product.id }});
    }
  },

  mounted() {
    axios.get('http://aps.mms-student.online/api/getallproduct').then((res)=>{
      this.productList = res.data.reverse().splice(0,18)
    })
  }
}
</script>

<style scoped>

</style>