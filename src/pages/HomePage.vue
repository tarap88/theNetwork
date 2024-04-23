<script setup>
import { computed, onMounted } from 'vue';
import { postService } from '../services/PostService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';


const posts = computed(() => AppState.posts)




async function getPosts() {
  try {
    await postService.getPosts
  }
  catch (error) {
    logger.log('unable to send getPost request to service', error)
    Pop.toast('Unable to see posts at the moment', 'error')
  }
}


onMounted(() => {
  getPosts()
})
</script>

<template>
  <div class="container">
    <section class="row">
      Posts
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
