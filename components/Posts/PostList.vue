<template>
    <section class="post-list">
        <Post-preview
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :is-admin="isAdmin"
            :title="post.title"
            :previewText="post.previewText"
            :thumbnailLink="post.thumbnailLink"
        />
      </section>
</template>
<script>
import PostPreview from '~/components/Posts/PostPreview.vue'

export default {
  components: {
    PostPreview
  },
  props: {
      isAdmin: {
          type: Boolean,
          default: false
      },
      posts: {
          type: Array,
          require: true
      }
  }
}
</script>
<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>