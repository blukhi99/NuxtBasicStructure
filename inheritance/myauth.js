import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    data() { return { 
        isInitLoaded : false
    }},
    computed: {
        ...mapState('auth', ['loggedIn', 'user']),        
    },
    mounted() {             },
    watch : {
        loggedIn(oldValue, newValue){
            this.checkLogin()
        }
    },
    beforeMount(){
        this.checkLogin()
    },
    methods : {
       async checkLogin(){
            if(this.loggedIn){
                if($nuxt.$route.name === "login"){
                    this.$router.replace({name: "index"})
                }
            }else {
                if($nuxt.$route.name !== "login"){
                    this.$router.replace({name: "login"})
                }
            }
            await this.$nextTick()
            await this.$nextTick()
            this.isInitLoaded = true
        }
    }
}