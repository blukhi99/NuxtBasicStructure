<template>
  <div id="wrapper" :class="toggleSideBar?'toggled':''" v-if="isInitLoaded">
    <layoutsHeader />
    <layoutsSidebar />
    <Nuxt id="page-content-wrapper"/>
  </div>
  <div v-else>
    <layoutsMainLoading />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import myAuth from "@/inheritance/myauth";

export default {
  // middleware: 'auth',
  mixins: [myAuth],
  computed: {
    ...mapState("sidebar", ["toggleSideBar"])
  },
  data(){ return { } },
  setup() {
    
  },

}
</script>

<style>


</style>
<style scoped>
  #page-content-wrapper {
      margin-left: 300px;
      -webkit-transition: margin .25s ease-out;
      -moz-transition: margin .25s ease-out;
      -o-transition: margin .25s ease-out;
      transition: margin .25s ease-out;
  }
  .toggled #page-content-wrapper {
      margin-left: 0px;
  }
  @media (max-width: 767px) {
      #page-content-wrapper {
          margin-left: 0px;
      }
  }
</style>
