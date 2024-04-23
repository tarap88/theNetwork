<script setup>
import { computed, onMounted } from 'vue';
import { postService } from '../services/PostService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';


const posts = computed(()=> AppState.posts)




async function getPosts() {
	try {
	await postService.getPosts()
	}
	catch (error) {
		Pop.error(error);
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

<style scoped lang="scss">

</style>
