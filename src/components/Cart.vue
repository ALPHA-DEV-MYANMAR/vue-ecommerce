<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <div class="d-flex justify-content-between">
                Detail Product
                <button class="btn-close" @click="$router.push('/')"></button>
              </div>
            </div>
            <div class="card-body">
              <table class="table table-borderless align-middle text-center">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Location</th>
                    <th scope="col">Controls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(l,index) in lists" :key="index">
                    <td>
                      <button class="btn btn-outline-info btn-sm" @click="view(l)">
                        <i class="fas fa-info-circle"></i>
                      </button>
                    </td>
                    <td>{{ l.price }}ks</td>
                    <td>{{ l.qty }}</td>
                    <td>
                      {{ l.location }}
                    </td>
                    <td>
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-primary btn-sm" @click="ordernow(l)"><i class="fas fa-truck"></i></button>
                        <button type="button" class="btn btn-outline-danger btn-sm" @click="del(l)"><i class="fas fa-times"></i></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cart",
  data() {
    return {
      lists: [],
    }
  },
  methods: {

    del(l) {
      let filter = this.lists.filter(function(value){
        return value.id !== l.id ;
      });

      if(confirm('Are you sure you want to delete!')){
        this.lists = filter
        axios.post('http://aps.mms-student.online/api/delcart/'+l.id).then((res)=>{

        })
      }else{

      }

    },

    view(l) {
      this.$router.push(`/singleproduct/${l.product_id}`)
    },

    ordernow(l){
        axios.post('http://aps.mms-student.online/api/order',{
          'product_id' : l.product_id,
          'price' : l.price,
          'qty' : l.qty,
          'location' : l.location
        }).then((res)=>{
          window.alert('This product have been success order!');
          console.log('success to order');
          this.location = ''
          let filter = this.lists.filter(function(value){
            return value.id !== l.id;
          });
            this.lists = filter ;
          axios.post('http://aps.mms-student.online/api/delcart/'+l.id).then((res)=>{})
        });
    },
  },
  created() {
    axios.get('http://aps.mms-student.online/api/getallcart').then((res)=>{
      this.lists = res.data.msg
    });
  }
}
</script>

<style scoped>

</style>