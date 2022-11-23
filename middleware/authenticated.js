export default function({ redirect }) {
    const token = window.localStorage && localStorage.getItem('token')
    if (!token) {
        return redirect('/Login')
    }
}