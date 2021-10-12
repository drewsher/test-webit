<template>
  <div class="news">
    <h1>News</h1>
    <NewsList />
  </div>
</template>

<script>
  import NewsList from '@/components/NewsList.vue';

  export default {
    name: 'News',
    components: {
      NewsList
    }
  }
</script>
