export default {
  data() {
    return {
      domain: 'https://shop.anyprinter.ru'
    }
  },
  methods: {
    getImageURL(imageURL) {
      return `${this.domain}/${imageURL}`;
    }
  }
}
