<template>
  <div>
    <div class="container-fluid">
      <div class="card">
        <div class="card-header">
          <div class="d-flex justify-content-between">
            <div class="h5">
              {{ productLists.length }} found for this products
            </div>
            <div>
              <button class="btn-close" @click="$router.push('/')"></button>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="input-group mb-3 m-responsive">
                <input type="text" class="form-control" placeholder="search here" @keyup="search">
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-lg-2 " v-for="(l,index) in productLists" :key="index">
                <div class="card product-card p-1">
                  <div @click="showDetail(l)">
                    <img class="img-fluid product-img" :src="l.image" alt="">
                  </div>
                  <div class="text-nowrap overflow-hidden">
                    {{ l.name.substr(0,20) }}
                  </div>
                  <div>
                    Ks - {{ l.price }}
                  </div>
                </div>
              </div>
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
  name: "AllProducts" ,
  data() {
    return {
      productLists : [] ,
    }
  },
  methods: {
    showDetail(l) {
      this.$router.push({name: 'SingleProduct', params: { 'id' : l.id }});
    },

    search(el){
      let data = el.target.value;
      if( data.trim() === '' ){
        axios.get('http://aps.mms-student.online/api/getallproduct').then((res)=>{
          this.productLists = res.data;
        });
      }else{
        let filter = this.productLists.filter(function(value){
          return value.name.toLowerCase().includes(data.toLowerCase());
        });
        this.productLists = filter;
      }
    }
  },
  mounted() {
    axios.get('http://aps.mms-student.online/api/getallproduct').then((res)=>{
      this.productLists = res.data;
    });
  },
}
</script>

<style scoped>

</style>