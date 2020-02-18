import Vue from "vue";
import axios from "axios";

const $axios = axios.create ({
  baseURL: 'https://webdev-api.loftschool.com/'
});

const slideshow = {
  template: "#slideshow-reviews",
  props: ["reviews"],
  
  methods: {
    reviewAuthorPic(review) {
      const baseUrl = 'https://webdev-api.loftschool.com/';
      return review && reviews.photo ? (baseUrl + review.photo) : '';
    }
  },
}


new Vue ({
  el: "#reviews-component",
  template: "#reviews-container",
  components: { slideshow },

  data() {
    return {
      reviews: [],
      activePage: 0,
    }
  },

  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.author_pic}`);
        item.author_pic = requirePic;
        return item;
      });
    },

    slide(direction){
      switch(direction) {
        case "next":
          flkty.next();
          
          break;
        case "prev":
          flkty.previous();
          break;
      }
    },

  },


  async created() {
    const { data } = await $axios.get("/reviews/282");
    this.reviews = data;
    // const data = require("../data/reviews.json");
    // this.reviews = this.makeArrWithRequiredImages(data);
  }

});



// Flickity SLIDER

var elem = document.querySelector('.reviews-slideshow');
var flkty = new Flickity( elem, {
  
 cellAlign: 'left',
 pageDots: false,
 wrapAround: false,
 initialIndex: 2,

//  initialIndex: 3,
//         prevNextButtons: true,
//         pageDots: true,
//         wrapAround: true,
//         freeScroll: true

});

