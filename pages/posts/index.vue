<template>
    <div class="posts-pages">
        <PostList :posts="loadedPosts" />
    </div>
</template>
<script>


export default {
  components: {
    PostPreview
  }
}
</script>
<script>
import PostList from '~/components/Posts/PostList.vue'
import axios from 'axios'

export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
<style scoped>
.posts-pages {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
