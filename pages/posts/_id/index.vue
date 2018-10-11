<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{ LoadedPost.title }}</h1>
            <div class="post-details">
                <div class="post-detail">Last updated on {{ LoadedPost.updateDate | date }}</div>
                <div class="post-detail">Written by {{ LoadedPost.author }}</div>
            </div>
            <p class="post-content">{{ LoadedPost.content }}</p>
        </section>
        <section class="post-feedback">
            <p>Let me know what you think about the post, send a mail to <a href="mailto:wowdacom@gmail.com">wowdacom@gmail.co</a>.</p>
        </section>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  asyncData({ params }, callback) {
        let LoadedPost = {}
        const url = `https://nuxt-blog-52d1f.firebaseio.com/posts/${params.id}.json`
        return axios.get(url)
          .then((res) => {
              console.log(res.data)
              callback(null, { LoadedPost: { ...res.data } })
          })
          .catch( e => console.log(e))
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>