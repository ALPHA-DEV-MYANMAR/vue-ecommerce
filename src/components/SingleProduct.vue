<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-12">
        <div class="card single-product">

          <div class="card-header">

            <div class="d-flex justify-content-between">
              Detail Product
              <button class="btn-close" @click="$router.push('/')"></button>
            </div>

          </div>

          <div class="card-body">
            <div class="row">

              <div class="col-12 col-md-12 col-lg-4 p-4">
                <div class="d-flex justify-content-center">
                  <img :src="product.image" style="width:200px;"  alt="">
                </div>
              </div>

              <div class="col-12 col-md-12 col-lg-5 p-4">

                  <div class="h4 fw-bold">
                    {{ product.name }}
                  </div>

                  <div class="mt-2">
                    price {{ product.price }}Ks
                  </div>

                  <div class="mt-2 d-flex  align-items-center">
                    <label for="">Quantity</label>
                    <select class="form-select form-select-sm w-25" @change="change">
                      <option selected>selected</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <div class="mt-2">
                    Category Type  <span class="text-black-50">{{ catName }}</span>
                  </div>

                  <div class="mt-2">
                    <textarea name="" id="" rows="5" class="form-control" placeholder="enter your location" v-model="location" required></textarea>
                  </div>

                  <div class="mt-2">

                    <div class="btn-group form-control" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-primary" @click="addtocart">
                        <i class="fas fa-cart-arrow-down"></i>
                        add to cart
                      </button>
                      <button type="button" class="btn btn-success" @click="ordernow">
                        <i class="fas fa-truck"></i>
                        order now
                      </button>
                    </div>

                  </div>

              </div>

              <div class="col-12 col-md-12 col-lg-3 p-4">
                <div class="fw-bold h5">
                  Delivery Option
                </div>
                <div>
                  price {{ price }}ks
                </div>
                <div>
                  quantity {{ quantity }}
                </div>
                <div>
                  {{ location }}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card mt-3 ">
          <div class="card-header">
            <div class="fw-bolder">
              Product detail
            </div>
          </div>
          <div class="card-body">
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card mt-3">
          <div class="card-header">
            <div class="fw-bold">
              Comment System
            </div>
          </div>
          <div class="card-body">

            <div class="d-lg-flex justify-content-lg-between">
              <div class="col-12 col-lg-6">
                <textarea name=""  cols="30" rows="2" class="form-control" v-model="comment" placeholder="enter comment here!" @keyup.enter="sendComment"></textarea>
                <button class="btn btn-primary btn-sm w-100" @click="sendComment">send comment</button>
              </div>
              <div class="col-12 col-lg-6">
                <div v-for="(comment,index) in commentLists.reverse()" :key="index">
                  <div class="card d-inline-block p-2 m-2 bg-info rounded-pill text-white">
                      {{ comment.comment }}
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
  name: "SingleProduct",
  data() {
    return {
      product: "",
      catName: "",
      quantity: '1',
      price: "",
      defaultPrice: "",
      location: "",
      comment: "",
      commentLists: [],
      cartLists: 1
    }
  },
  methods: {
    change(event){
      this.quantity = event.target.value;
      if(this.quantity > 0 && this.quantity < 11 ){
        if(this.quantity === "1"){
          this.price = this.defaultPrice
        }else if(this.quantity === "2"){
          this.price =  this.defaultPrice * 2
        }
        else if(this.quantity === "3"){
          this.price =  this.defaultPrice * 3
        }
        else if(this.quantity === "4"){
          this.price =  this.defaultPrice * 4
        }
        else if(this.quantity === "5"){
          this.price =  this.defaultPrice * 5
        }
        else if(this.quantity === "6"){
          this.price =  this.defaultPrice * 6
        }
        else if(this.quantity === "7"){
          this.price =  this.defaultPrice * 7
        }
        else if(this.quantity === "8"){
          this.price =  this.defaultPrice * 8
        }
        else if(this.quantity === "9"){
          this.price =  this.defaultPrice * 9
        }
        else if(this.quantity === "10"){
          this.price =  this.defaultPrice * 10
        }
      }
    },

    addtocart(){

      if( this.quantity !== '' && this.location !== ''){
        axios.post('http://aps.mms-student.online/api/cart',{
          'product_id' : this.$route.params.id,
          'price' : this.price,
          'qty' : this.quantity,
          'location' : this.location,
        }).then((res)=>{
          window.alert('This product have been success add to cart!');
          console.log('success to add cart');

          window.location.href = '/singleproduct/'+this.$route.params.id;
        });
      }else{
        window.alert('please enter your location!');
      }
    },

    ordernow(){

      if( this.quantity !== '' && this.location !== ''){
        axios.post('http://aps.mms-student.online/api/order',{
          'product_id' : this.$route.params.id,
          'price' : this.price,
          'qty' : this.quantity,
          'location' : this.location
        }).then((res)=>{
          window.alert('This product have been success order!');
          console.log('success to order');
          this.location = ''
        });
      }else{
        window.alert('please enter your location!');
      }
    },

    sendComment(){
      if(this.comment === '' ){
        window.alert('please enter your comment first!');
      }
      else{
        axios.post('http://aps.mms-student.online/api/comment',{
          'product_id' : this.$route.params.id,
          'comment' : this.comment
        }).then((res)=>{
          // window.alert('successfully send comment');
          this.commentLists.push(res.data.comment);
          this.comment = '';
        });
      }

    }
  },

  mounted() {
    //get single product
    axios.get('http://aps.mms-student.online/api/product/'+this.$route.params.id).then((res)=>{
      this.product = res.data
      this.price = res.data.price
      this.defaultPrice = res.data.price
      axios.get('http://aps.mms-student.online/api/cat/'+this.product.cat_id).then((res)=> {
        this.catName = res.data.name
      });
    });

    axios.get('http://aps.mms-student.online/api/getallcomment').then((res)=>{
      this.commentLists = res.data.reverse();
    });
  }
}
</script>

<style scoped>

</style>