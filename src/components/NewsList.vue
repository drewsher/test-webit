<template>
  <div class="news-list">
    <div class="news-item"
      v-for="(newsItem, index) in news"
      :key="newsItem.id"
    >
      <NewsItem
        :data="newsItem"
      />
      <router-link :to="`/news/${newsItem.id}`">
        more
      </router-link>
    </div>
  </div>
</template>

<script>
  import getImageURLMixin from '@/mixins/getImageURL.js';
  import NewsItem from '@/components/NewsItem.vue';

  export default {
    name: 'NewsList',
    props: {
      limit: {
        type: Number,
        require: false,
        default: 0
      }
    },
    mixins: [getImageURLMixin],
    components: {
      NewsItem
    },
    data() {
      return {
        news: null
      }
    },
    created() {

      const hasLimit = this.limit > 0;
      const limitPostfix = hasLimit ? `?limit=${this.limit}` : '';

      fetch(`https://shop.anyprinter.ru/api/news/${limitPostfix}`)
        .then((response) => response.json())
        .then((data) => (this.news = data));
    }
  }
</script>
