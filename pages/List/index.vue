<template>
  <div class="container mx-auto">
    <h1 class="my-6 font-bold text-center text-2xl">
      Hello ReqRes users!
    </h1>
    <p>{{ search }}</p>
    <div class="grid grid-cols-4 text-center ">
      <div v-for="item in list.data" :key="item.id" class="my-8">
        <nuxt-link :to="{name: 'List-id' , params: {id: item.id}}" class="my-5">
          <h1 class="mb-3 font-bold">
            {{ `${item.first_name} ${item.last_name}` }}
          </h1>
          <p class="mb-3">
            {{ item.email }}
          </p>
          <img :src="item.avatar" alt="" class="mx-auto">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListUser',
  middleware: 'authenticated',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      this.list = await this.$dataApi.getList()
    }
  }

}
</script>
