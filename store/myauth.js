
export const state = () => ({ })

export const actions = {
    async login(context, _reqData) {
      return await this.$auth.loginWith('local', { data: _reqData  })
    },
    
    async logout(){
        await this.$auth.logout()
    },
}

export const getters = {
}