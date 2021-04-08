<template>
  <div>
    <b-jumbotron header="Dashboard">
      <p>Data Unavailable</p>
    </b-jumbotron>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import authuser from "@/inheritance/authuser";

export default {
  name : "index",
  computed: mapState([]),
  mixins:[authuser],
  methods : {
    ...mapMutations([])
  }
}
</script>