<template>
  <div class="container mx-auto">
    <h1 class="my-6 font-bold text-center text-2xl">
      Single users
    </h1>
    <div class="grid grid-cols-4 text-center">
      <div class="my-5">
        <h1 class="mb-3 font-bold">
          {{ `${single?.data?.first_name} ${single?.data?.last_name}` }}
        </h1>
        <p class="mb-3">
          {{ single?.data?.email }}
        </p>
        <img :src="single?.data?.avatar" alt="" class="mx-auto">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListUser',
  data () {
    return {
      single: []
    }
  },
  mounted () {
    this.getSingleUser()
  },
  methods: {
    async getSingleUser () {
      this.single = await this.$dataApi.getSingleUser(this.$route.params.id)
    }
  }

}
</script>
