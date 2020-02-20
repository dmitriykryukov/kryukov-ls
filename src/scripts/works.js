import Vue from "vue";
import axios from "axios";

const $axios = axios.create ({
  baseURL: 'https://webdev-api.loftschool.com/'
});


const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork", "getPhoto"]
}

const btns = {
  template: "#slider-btns",
  props: ["currentWork", "currentIndex", "works"]
}

const display = {
  template: "#slider-display",
  components: { thumbs, btns },
  props: ["works", "currentWork", "currentIndex", "getImage"],
  computed: {
    reversedWorks() {
      return [...this.works].reverse();
    }
  },

  methods: {
    getPhoto (image) {
      return `https://webdev-api.loftschool.com/${ image }`;
    },
  }
}

// const tags = {
//   template: "#slider-tags",
//   props: ["tags"]
// }

const info = {
  template: "#slider-info",
  // components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork && this.currentWork.techs ? this.currentWork.techs.split(', ') : '';
    },

    currentInfo() {
      return this.currentWork ? this.currentWork : '';
    },

  }
}


new Vue ({
  el: "#slider-component",
  template: "#slider-container",
  components: { display, info },

  data() {
    return {
      works: [],
      currentIndex: 0    
    }
  },
  computed: {
    currentWork(){
      return this.works ? this.works[this.currentIndex] : '';
    },
    
    getImage() {
      const baseUrl = 'https://webdev-api.loftschool.com/';
      return this.currentWork && this.currentWork.photo ? (baseUrl + this.currentWork.photo) : '';
    },
  },

  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.photo}`);
        item.photo = requirePic;

        return item;
      });
    },

    handleSlide(direction){
      switch(direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },

    handleBtnImage(workId) {
      this.works.forEach((element, index) => {
        if (element.id === workId) {
          return this.currentIndex = index;
        }
      });
    },

  },

  async created() {
    // const data = require("../data/works.json");
    // this.works = this.makeArrWithRequiredImages(data);
    const { data } = await $axios.get("/works/282");
    this.works = data;
  }
})

