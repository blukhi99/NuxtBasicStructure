<template>
  <div v-if="isInitLoaded">
    <nuxt />
  </div>
  <div v-else>
    <layoutsMainLoading />
  </div>
</template>

<script>

import myAuth from "@/inheritance/myauth";
export default {
  mixins: [myAuth],
  // ...
}
</script>