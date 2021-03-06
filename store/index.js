import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost( state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
                state.loadedPosts[postIndex] = editedPost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios
                    .$get('/posts.json')
                    .then(data => {
                        const postsArray = []
                        for (const key in data) {
                            postsArray.push({ ...data[key], id: key })
                        }
                        vuexContext.commit('setPosts', postsArray)
                    })
                    .catch( e => console.log(e))
            },
            addPost(vuexContext, post) {
                const createPost = {
                    ...post,
                    updateDate: new Date()
                }
                return this.$axios
                .$post('/posts.json', createPost)
                .then(data => {
                    vuexContext.commit('addPost', { ...createPost, id: data.name })
                })
                .catch(e => console.log(e))
            },
            editedPost(vuexContext, editedPost) {
                const url = `/posts/${editedPost.id}.json`
                return this.$axios
                    .$put(url, editedPost)
                    .then((res)=>{
                        vuexContext.commit('editPost', editedPost)
                    })
                    .catch((e)=> console.log(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore