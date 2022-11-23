export default function({ $axios }, inject) {
    const login = async(data) => {
        try {
            return await $axios.$post('login', data)
        } catch (error) {
            return error
        }
    }

    const getList = async() => {
        try {
            return await $axios.$get('users?page=1')
        } catch (error) {
            return error
        }
    }
    const getSingleUser = async(id) => {
        try {
            return await $axios.$get(`users/${id}`)
        } catch (error) {
            return error
        }
    }
    inject('dataApi', {
        login,
        getList,
        getSingleUser
    })
}