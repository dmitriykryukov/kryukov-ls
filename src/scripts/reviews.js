import Vue from "vue";
import axios from "axios";
// import EventBus from '../EventBus';
import Flickity from 'vue-flickity';

const $axios = axios.create ({
  baseURL: 'https://webdev-api.loftschool.com/'
});


new Vue ({
  el: "#reviews-component",
  template: "#reviews-container",
  components: { Flickity },

  data() {
    return {
      reviews: [],
      activePage: 0,
      slidesPerPage: 2,
      pages: '',
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        groupCells: 2,
        wrapAround: false,
        cellAlign: "left",
      }
    }
  },

  methods: {
    getPages() {
      if (this.slidesPerPage > 1) {
        return this.reviews.length % 2 === 1 ? (this.reviews.length - 1) / 2 : (this.reviews.length / 2 - 1);
      }
      return this.reviews.length - 1;
    },

    slide(direction){
      this.pages = this.getPages();
      switch(direction) {
        case "next":
          this.$refs.flickity.next();
          this.activePage = this.$refs.flickity.selectedIndex();
          break;
        case "prev":
          this.$refs.flickity.previous();
          this.activePage = this.$refs.flickity.selectedIndex();
          break;
      }
    },

    calcSlidesPerPage(self) {
      function calc() {
        self.slidesPerPage = (window.innerWidth <= 768) ? 1 : 2;
      }
      calc();
      window.addEventListener('resize', calc);
    }
  },

  mounted() {
    this.calcSlidesPerPage(this);
    this.flickityOptions.groupCells = this.slidesPerPage;
  },

  // watch: {
  //   slidesPerPage() {
  //     EventBus.$emit('pages', this.pages());
  //   }
  // },


  async created() {
    const { data } = await $axios.get("/reviews/282");
    this.reviews = data.map(item => {
          item.photo = "https://webdev-api.loftschool.com/" + item.photo;
          return item;
    });

    this.$nextTick(function () { this.$refs.flickity.rerender() });
  }

})