import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'PersistedKey',
    paths:['']
  })(store)
}