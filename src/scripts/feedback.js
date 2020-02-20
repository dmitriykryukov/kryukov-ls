import Vue from "vue";
import SimpleVueValidator from 'simple-vue-validator';

const Validator = SimpleVueValidator.Validator;

new Vue ({
  el: "#feedback-component",
  template: "#feedback-container",
  mixins: [SimpleVueValidator.mixin],
  
  data: () => ({
    name: '',
    email: '',
    message: ''
  }),
  components: {
    vcInput: () => import('../components/input.vue')
  },
  validators: {
    name: function (value) {
      return Validator.value(value).required();
    },
    email: function (value) {
      return Validator.value(value).required().email();
    },
    message: function (value) {
      return Validator.value(value).required().minLength(15);
    }
  },
  methods: {
    submit () {
      this.$validate()
      
    }
  }
})
