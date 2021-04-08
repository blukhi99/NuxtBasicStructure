<template>
    <b-navbar type="light" variant="light" id="navheader" class="header" sticky>
        <b-navbar-nav>
            <font-awesome-icon :icon="['fas', 'bars']" style="font-size: 20px; cursor : pointer;" @click="toggleSideBar"/>
            <b-navbar-brand href="#" class="px-3">MyApp</b-navbar-brand>
            <!-- <b-img src="@/assets/images/" fluid class="main-logo px-4"/> -->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item @click="logout">Logout</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    computed: {
    },
    setup() {
        
    },
    methods : {
        ...mapMutations("sidebar", ["toggleSideBar"]),
        ...mapActions("myauth", ["logout"]),
    }
}
</script>
<style scoped>
    .header{
        height: 50px;
    }
    .main-logo {
        height: 30px;
    }
</style>