import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    computed : {
        getMe(){
            return this.$auth.user || {}
        },  
    },
    methods : {
        ...mapMutations('sidebar', ['setScreens']),
    }
}