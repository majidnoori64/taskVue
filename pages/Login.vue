<template>
  <div class="continer">
    <form class="form-submit" @submit.prevent="userLogin">
      <h1>login</h1>
      <div class="input">
        <input v-model="login.email" type="text" placeholder="User Name">
        <input v-model="login.password" type="password" placeholder="Password">
      </div>
      <button class="btn" type="submit">
        submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin () {
      try {
        const httpRespance = await this.$dataApi.login({
          ...this.login
        })
        localStorage.setItem('token', httpRespance.token)
        this.$router.push({ name: 'List' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style lang="scss">
.continer {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  .form-submit {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 20%;
    h1 {
      font-size: 5rem;
      text-align: center;
      margin-bottom: 1rem;
    }
    .input {
      display: flex;
      flex-direction: column;
      input {
        margin: 0.5rem 0;
        height: 3rem;
        padding: 0.5rem;
        &:focus {
          outline-color: #93c5fd;
        }
      }
    }
    .btn {
      background: #93c5fd;
      padding: 1rem;
      width: 100%;
      color: #fff;
    }
  }
}
</style>
