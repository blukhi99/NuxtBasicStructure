<template>
    <div class="display-contents">
        <div>
          <b-pagination 
            class="float-right"
            size="sm"
            v-model="usersData.page"
            :total-rows="usersData.total"
            :per-page="usersData.per_page" />
        </div>
        <b-table-simple bordered hover small responsive sticky-header class="h-100 mb-0 d-inline-block sticky-table">
          <b-thead head-variant="dark">                            
              <b-tr>
                  <b-th class="text-nowrap">id</b-th>
                  <b-th class="text-nowrap">First Name</b-th>
                  <b-th class="text-nowrap">Last name</b-th>
                  <b-th class="text-nowrap">Avatar</b-th>
              </b-tr>
          </b-thead>
          <b-tbody>
              <b-tr v-for="(user, $index) in usersData.data" :key="$index">
                  <b-td>{{user.id}}</b-td>
                  <b-td>{{user.first_name}}</b-td>
                  <b-td>{{user.last_name}}</b-td>
                  <b-td><b-img-lazy :src="user.avatar" :alt="user.first_name" /></b-td>
              </b-tr>
          </b-tbody>            
        </b-table-simple>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  asyncData(context) {
    return { }
  },
  data() { 
    return { usersData : { total : 1, per_page: 3, page: 1, }, cancelActiveUserToken : null}
  },
  computed : {
      
  },
  watch : {
    "usersData.page"(newValue, oldValue) {
      if(newValue !== oldValue){
        this.getUsers()
      }
    }
  },
  mounted() {
    this.getUsers()
  },
  methods : {
    async getUsers() {
      try {
        if(this.cancelActiveUserToken){
          this.cancelActiveUserToken.cancel();
        }
       this.cancelActiveUserToken = this.$cancelToken()
       const reqData = this.$deepClone(this.usersData)
       
       delete reqData["data"]
       delete reqData["support"]

       const { status, data } =  await this.$getUsers(reqData, this.cancelActiveUserToken)
       if(status === 200) {
         this.usersData = data
       }
      } catch (e) {
        console.log("Error", e)
      }
    }
  }
}
</script>
<style scoped>
  .display-contents {
    display:contents
  }
  .display-contents >>> ul {
    margin-bottom: 0px;
  }
</style>