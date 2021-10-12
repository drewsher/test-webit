<template>
  <div class="news-item">
    <h3 class="news-item__title">
      {{ newsItem.name }}
    </h3>
    <img
      :src="getImageURL(
        newsItem.normal_photo ||
        (
          newsItem.photos &&
          newsItem.photos[0].normal_photo
        )
      )"
      class="news-item__image"
    />
    <div
      class="news-item__preview"
      v-html="newsItem.short_text || newsItem.full_text"
    >
    </div>
    <h3>Gallery</h3>

    <Carousel
      :navigationEnabled="true"
    >
      <Slide
        v-for="(slide, index) in newsItem.photos"
        :key="slide.id"
      >
        <img
          :src="getImageURL(slide.normal_photo)"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    name: 'NewsItem',
    props: {
      data: {
        type: Object,
        require: false
      }
    },
    components: {
      Carousel,
      Slide
    },
    data() {
      return {
        newsItem: this.data || {}
      }
    },
    created() {

      if (!this.data) {
        const id = this.$route.params.id;

        fetch(`https://shop.anyprinter.ru/api/news/${id}`)
          .then((response) => response.json())
          .then((data) => (this.newsItem = data));
      }
    }
  }
</script>
