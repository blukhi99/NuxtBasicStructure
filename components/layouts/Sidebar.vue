<template>    
  <div id="sidebar-wrapper" class="full-screen">
    <div class="p-3" id="sidebarMenu">
      <nav class="mb-3">
        <b-nav vertical>
          <nuxt-link @click.native="closeSideBar" class="navLink" to="/">Dashboard</nuxt-link>
          <nuxt-link @click.native="closeSideBar" class="navLink" to="/page1">Page1</nuxt-link>
          <nuxt-link @click.native="closeSideBar" class="navLink" to="/page2">Page2</nuxt-link>
        </b-nav>
      </nav>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import authuser from "@/inheritance/authuser";

export default {
  mixins:[authuser],
  data() {
    return { 
      modalItem : { url : "" , size : { w: 500, h: 500 } }
    } 
  },
  computed : {
    ...mapState('sidebar', ['screens']),    
  },
  setup() {
    
  },
  mounted() {
  },
  methods : {
    ...mapMutations("sidebar", ["closeSideBar", "addScreen"]),
    activePage(name){
      return $nuxt.$route.name === name
    },
  }
}
</script>

<style scoped>
  .side-icon {
    width: 100px;
  }

  #sidebarMenu {
      width: 300px;
      padding-left: 7px;
      padding-right: 17px;
  }
  #sidebar-wrapper {
      z-index: 1000 !important;
      position: fixed;
      overflow: overlay;
      margin-left: -20rem;
      -webkit-transition: margin .25s ease-out;
      -moz-transition: margin .25s ease-out;
      -o-transition: margin .25s ease-out;
      transition: margin .25s ease-out;
      -webkit-overflow-scrolling: touch;
      background: white;
  }

  #sidebar-wrapper .sidebar-heading {
      font-size: 1.2rem;
  }

  #wrapper.toggled #sidebar-wrapper {
      margin-left: 0;
  }

  @media (min-width: 768px) {
      #sidebar-wrapper {
          margin-left: 0;
      }
      #page-content-wrapper {
          min-width: 0;
          width: 100%;
      }
      #wrapper.toggled #sidebar-wrapper {
          margin-left: -300px;
      }
  }
</style>

<style scoped>
  font-awesome-icon {
    padding: 10px;
  }
  .navLink {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    margin: 2px 0px;
    color: black;
    cursor: pointer;
  }
  .linkExactActiveClass img {
    filter: brightness(0) invert(1);
  }
</style>