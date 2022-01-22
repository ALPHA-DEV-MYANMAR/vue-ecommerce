<template>
  <div>
    <div id="nav">
      <Nav :categories="catList"></Nav>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Nav from "./components/Nav";

import axios from "axios";

export default {
  components: {Nav} ,

  data() {
    return {
      catList: []
    }
  },

  mounted() {
    axios.get('http://127.0.0.1:8000/api/cats').then((res)=>{
      this.catList = res.data
    });
  }
}
</script>