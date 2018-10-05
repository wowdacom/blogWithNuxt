<template>
  <div class="loading" v-if="isLoading">
    It's Loading
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
      isLoading: {
          type: Boolean,
          require: true
      }
  }
}
</script>


<style scoped>
.loading {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    text-align: center;
    line-height: 100vh;
    font-size: 50px;
    background-color: black;
    color: white;
}
</style>
