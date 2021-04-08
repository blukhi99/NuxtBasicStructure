export default function (context) {
    let { store, redirect, } = context
    if (store.state.auth.loggedIn) {
        return redirect('/')
    }
}