<template>
  <div>
    <b-card no-body class="full-screen">
      <b-row class="mx-0">
        <b-col class="text-left">
          <span class="h3">Users</span>
        </b-col>
        <b-col class="text-right"></b-col>
      </b-row>

      <Users />
      
    </b-card>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  asyncData(context) {
    return { }
  },
  data() { 
    return { tabIndex : 0 }
  },
  mounted() {
  },
  methods : {
  }
}
</script>
<style scoped>
  .alarm-tabs {
       display: contents;
  }
  .alarm-tabs >>> .tab-content {
       display: contents;
  }
  .alarm-tabs >>> .tab-pane {
       display: contents;
  }
</style>