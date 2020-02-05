import Vue from "vue";

const slideshow = {
  template: "#slideshow-reviews",
  props: ["reviews"],
}


new Vue ({
  el: "#reviews-component",
  template: "#reviews-container",
  components: { slideshow },

  data() {
    return {
      reviews: [],
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
          console.log(direction);
          break;
        case "prev":
          console.log(direction);
          break;
      }
    },

  },

  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrWithRequiredImages(data);
  }

});



// Flickity SLIDER

var elem = document.querySelector('.reviews-slideshow');
var flkty = new Flickity( elem, {
  
 cellAlign: 'left',
 groupCells: 2,
 pageDots: false,
 wrapAround: false,

//  initialIndex: 3,
//         prevNextButtons: true,
//         pageDots: true,
//         wrapAround: true,
//         freeScroll: true

});

