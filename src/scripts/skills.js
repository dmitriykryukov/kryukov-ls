import Vue from "vue";
import axios from "axios";

const $axios = axios.create ({
  baseURL: 'https://webdev-api.loftschool.com/'
});

const skill = {
  template: "#skill",
  props: {
    skill: Object
  },
  data() {
    return {
      animatDelay: ''
    };    
  },

  created() {
    const data =this.skill.percent;
    this.animatDelay = data;
  }

}

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: ["skill"]
}

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    skillsRow
  },
  data: {
    color: 'red' 
  },
  

  data() {
    return {
      skills: []
    };    
    
  },

  async created() {
    // const data = require("../data/skills.json");
    const { data } = await $axios.get("/categories/282");
    this.skills = data;
  }
});

