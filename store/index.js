import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(()=>{
                      vuexContext.commit('setPosts', [
                          {
                            id: '1',
                            title: 'First Post',
                            previewText: "This is our first post!",
                            thumbnail: "https://nuxtjs.org/nuxt-views-schema.png"
                          },
                          {
                            id: '2',
                            title: 'Seconed Post',
                            previewText: "This is our first post!",
                            thumbnail: "https://nuxtjs.org/nuxt-views-schema.png"
                          }
                        ]
                      )
                      resolve()
                    }, 2000)
                  })
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