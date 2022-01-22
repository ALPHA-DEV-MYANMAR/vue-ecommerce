<template>
  <div class="container-fluid ">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Shop</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              </ul>

                <ul class="navbar-nav ">
                  <li class="nav-item">
                    <button type="button" class="btn btn-primary btn-sm position-relative" @click="cartview">
                      <i class="fas fa-shopping-basket"></i>
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <span>
                          {{ cart_count }}
                        </span>
                        <span class="visually-hidden">unread messages</span>
                      </span>
                    </button>
                  </li>
                </ul>

            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Nav",
  data() {
    return {
      cart_count: '',
      query_count: '',
      total: ''
    }
  },

  props: ['categories'],

  methods: {

    goDetail(categories) {
      this.$router.push({name: 'DetailCategories',params: { cat_id : categories.id }});
    },

    cartview(){
      this.$router.push({ name: 'Cart' });
    }
  },

  mounted() {
    axios.get('http://aps.mms-student.online/api/getallcart').then((res)=>{
      this.cart_count = res.data.msg.length;
    });
  }

}
</script>

<style scoped>

</style>