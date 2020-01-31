import Vue from "vue";



const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork"]
}

const btns = {
  template: "#slider-btns",
  props: ["currentWork", "currentIndex", "works"]
}

const display = {
  template: "#slider-display",
  components: { thumbs, btns },
  props: ["works", "currentWork", "currentIndex"],
  computed: {
    reversedWorks() {
      return [...this.works].reverse();
    }

  }
}

const tags = {
  template: "#slider-tags",
  props: ["tags"]
}

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ');
    }

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
      return this.works[this.currentIndex]
    }
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
    }
  },

  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
    
  }
})

