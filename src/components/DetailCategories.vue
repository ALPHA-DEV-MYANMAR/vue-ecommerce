<template>
  <div>
    <div class="container-fluid">
      <div class="card">
        <div class="card-header">
          <div class="d-flex justify-content-between">
            <div class="h5">
              {{ catName.name }}
            </div>
            <button class="btn-close" @click="$router.push('/')"></button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="input-group mb-3 m-responsive">
                <input type="text" class="form-control" placeholder="search here" @keyup="search">
              </div>
            </div>
            <div class="row">
              <div>
                {{ catList.length }} found for this category
              </div>
              <div class="col-6 col-lg-2 " v-for="(cat,index) in catList" :key="index">
                <div class="card product-card p-1">
                  <div @click="showDetail(cat)">
                    <img class="img-fluid product-img" :src="cat.image" alt="">
                  </div>
                  <div class="text-nowrap overflow-hidden">
                    {{ cat.name.substr(0,20) }}
                  </div>
                  <div>
                    Ks - {{ cat.price }}
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
  name: "AllCategories" ,
  data() {
    return {
      catList : [] ,
      catName : ''
    }
  },
  methods: {
    showDetail(cat) {
      this.$router.push({name: 'SingleProduct', params: { 'id' : cat.id }});
    },
    search(el){
      let data = el.target.value;
      if( data.trim() === '' ){
        axios.get('http://aps.mms-student.online/api/product/cat/'+this.$route.params.id).then((res)=>{
          this.catList = res.data.data;
        });
      }else{
        let filter = this.catList.filter(function(value){
          return value.name.toLowerCase().includes(data.toLowerCase());
        });
        this.catList = filter;
      }
    }
  },
  mounted() {
    axios.get('http://aps.mms-student.online/api/product/cat/'+this.$route.params.id).then((res)=>{
      this.catList = res.data.data;
    });
  },
  created() {
    axios.get('http://aps.mms-student.online/api/cats').then((res)=>{
      this.catName = res.data[this.$route.params.id-1]
    })
  }
}
</script>

<style scoped>

</style>