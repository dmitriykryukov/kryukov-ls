import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercent: Number
  },
  data() {
    return {
      animatDelay: ''
    };    
  },

  created() {
    const data =this.skillPercent;
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

  created() {
    const data = require("../data/skills.json");
    this.skills = data;
  }
});

