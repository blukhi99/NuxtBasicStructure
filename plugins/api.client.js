export default (context, inject) => {
    inject('cancelToken', () => context.$axios.CancelToken.source())

    //Users
    inject('getUsers', (_reqData, _cancelToken) => { return context.$axios.get(`/users`, { params: _reqData, cancelToken:_cancelToken.token }) })

    //Property
    inject('getProperties', (_reqData) => { return context.$axios.get(`/unknown`) })
    inject('addProperty', (_reqData) => { return context.$axios.post(`/unknown`, _reqData) })
    inject('editProperty', (_reqData) => { const {_id} = _reqData; return context.$axios.patch(`/unknown/${_id}`, _reqData) })
    inject('deleteProperty', ({_id}) => { return context.$axios.delete(`/unknown/${_id}`) })
}