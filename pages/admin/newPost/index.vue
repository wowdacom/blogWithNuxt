<template>
    <div class="admin-new-post-page">
        <AdminPostForm :post="post" @submit="onSubmitted" />
    </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'


export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            post: {
                    author: "",
                    title: "",
                    thumbnailLink: "",
                    content: "",
                    previewText: ""
                }
        }
    },
    methods: {
        onSubmitted(postData) {
            this.$store.dispatch('addPost', postData)
                .then((res)=>{
                    //console.log(res)
                    this.$router.push("/admin")
                })
        }
    }
}
</script>


<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>