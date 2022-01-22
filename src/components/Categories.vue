<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mt-2" v-for="(cat,index) in catList" :key="index" >
            <div class="card border-dark cat-card" @click="product_card(cat)">
              <div class=" d-flex justify-content-center fw-bolder">
                {{cat.name}}
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
  name: "Categories",
  data() {
    return {
      catList : [],
      productList : []
    }
  },
  methods: {
    product_card(categories) {
      this.$router.push({name: 'DetailCategories',params: { 'id' : categories.id }});
    }
  },
  mounted() {
    axios.get('http://aps.mms-student.online/api/cats').then((res)=>{
      this.catList = res.data
    });
    axios.get('http://aps.mms-student.online/api/getallproduct').then((res)=>{
      this.productList = res.data
    })
  }
}
</script>

<style scoped>

</style>