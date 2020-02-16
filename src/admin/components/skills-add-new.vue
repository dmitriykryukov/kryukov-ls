<template lang="pug">
  form(@submit.prevent="addNewSkill" :class="{ 'is-blocked': formBlocked }").add-new-skill
    .add-new-skill__cell
      vc-input(
        type="text"
        name="title"
        placeholder='Новый навык'
        v-model="skill.title"
        :errorText="validation.firstError('skill.title')")
    .add-new-skill__cell
      vc-input(
        type="number"
        name="percent"
        v-model="skill.percent"
        :errorText="validation.firstError('skill.percent')")
    .add-new-skill__cell
      button(type="submit").btn.btn--add.btn--big
</template>


<script>
import { mapActions } from 'vuex';
import SimpleVueValidator from 'simple-vue-validator';

const Validator = SimpleVueValidator.Validator;

export default {
  mixins: [SimpleVueValidator.mixin],
  name: 'skills-add-new',
  props: ['category'],
  data () {
    return {
      formBlocked: !this.category,
      skill: {
        title: '',
        percent: 0
      }
    };
  },
  validators: {
    
    'skill.title': value => {
      return Validator.value(value).required('Заполните название');
    },
    'skill.percent': value => {
      return Validator.value(value)
        .integer('Должно быть числом')
        .between(0, 100, 'Значение должно быть от 0 до 100')
        .required('Поле не может быть пустым');
    }
  },
  components: {
    vcInput: () => import('./input.vue')
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    async addNewSkill () {
      if (await this.$validate()) {
        this.formBlocked = true;
        this.skill.category = this.category.id;
        await this.addSkill(this.skill);
        this.formBlocked = this.skill.title = '';
        this.skill.percent = 0;
        this.validation.reset();
      }
    }
  }
};
</script>