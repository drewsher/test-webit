<template>
  <div class="home">
    <h2>Slides</h2>
    <Carousel
      :navigationEnabled="true"
    >
      <Slide
        v-for="(slide, index) in slides"
        :key="slide.id"
      >
        <img
          :src="getImageURL(slide.normal_photo)"
          :alt="slide.name"
        />
      </Slide>
    </Carousel>
    <h2>News</h2>
    <NewsList :limit="5" />
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';
  import NewsList from '@/components/NewsList.vue';

  export default {
    name: 'Home',
    components: {
      Carousel,
      Slide,
      NewsList
    },
    data() {
      return {
        slides: null
      }
    },
    created() {

      // fetch slides

      fetch('https://shop.anyprinter.ru/api/slider')
        .then((response) => response.json())
        .then((data) => (this.slides = data));

    }
  }
</script>
