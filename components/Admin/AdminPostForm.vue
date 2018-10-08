<template>
    <section class="new-post-form">
            <form @submit.prevent="onSave">
                <AppControlInput v-model="post.author">Author</AppControlInput>
                <AppControlInput v-model="post.title">Title</AppControlInput>
                <AppControlInput v-model="post.thumbnailLink">Thumbnail Link</AppControlInput>                      
                <AppControlInput
                            control-type="textarea"
                            v-model="post.content">Content</AppControlInput>
                <AppControlInput
                            control-type="textarea"
                            v-model="post.previewText">Preview Text</AppControlInput>                    
                <AppButton type="submit">Save</AppButton>                    
                <AppButton
                            type="button"
                            style="margin-left: 10px"
                            btn-style="cancel"
                            @click="onCancel">Cancel</AppButton>
            </form>
        </section>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
    components: {
        AppControlInput,
        AppButton
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    methods: {
        onSave() {
            // Save the post
            this.$emit('submit', this.editedPost)
        },
        onCancel() {
            // Navigate back
            this.$router.push('/admin')
        }
    }
}

</script>
