<template>
  <b-container>

      <b-row class="vh-100">
        <b-col sm="9" md="7" lg="5" class="mx-auto my-auto">
           <b-overlay :show="isLoading" rounded="sm" >
              <b-card @submit="onSubmitLogin" title="Sign In">
                <b-form>
                  <b-form-group
                      id="input-username-group"
                      label="Username:"
                      label-for="input-username"
                      description="We'll never share your username with anyone else. (Type Any Email Just for validation)">
                      <b-form-input
                        id="input-username"
                        v-model.trim="loginForm.username"
                        type="text"
                        placeholder="Enter Username"
                        required />                      
                  </b-form-group>

                  <b-form-group
                      id="input-password-group"
                      label="Password:"
                      label-for="input-password"
                      description="We'll never share your password with anyone else. (Type Any Passoword Just for validation)">
                      <b-form-input
                        id="input-password"
                        v-model.trim="loginForm.password"
                        type="password"
                        placeholder="Enter Password"
                        required />                      
                  </b-form-group>

                  <b-button block type="submit" variant="primary">Login</b-button>                  
                </b-form>
              </b-card>

          </b-overlay>
        </b-col>
      </b-row>

  </b-container>
</template>

<script>

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {  
  layout: 'myauth',
  // middleware: 'guest',
  // computed: {...mapState('auth', ['loggedIn', 'user'])},
  mounted(){ },
  data() { return { isLoading : false, loginForm : {  } } },
  methods : {
    ...mapActions("myauth", ["login"]),
   async onSubmitLogin(event){
      event.preventDefault()

      this.isLoading = true
      const { status, data } = await this.login(this.loginForm)
      this.isLoading = false

      if(status === 200){
        console.log("Response", "Success")
      }else{
        console.log("Response", "Error")
      }

    }
  },
}
</script>