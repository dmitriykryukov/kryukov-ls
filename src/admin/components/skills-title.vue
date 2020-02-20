<template lang="pug">
  form(@submit="skillsGroupTitle" @keyup.esc="editMode = false").card__header
    .card__column(v-if="editMode")
      vc-input(
        :autofocus="true"
        type="text"
        placeholder="Название новой группы"
        v-model="newTitle"
        :errorText="validation.firstError('newTitle')")
    .card__column(v-else)
      .page-subtitle {{ category.category }}
    .card__column
      .controls(v-if="editMode")
        .controls__btn
          button(type='submit').btn.btn-icon--check
        .controls__btn
          button(type='button' @click="deleteSkillGroup").btn.btn-icon--cancel
      .controls(v-else)
        .controls__btn
          button(type='button' @click="editMode = true").btn.btn-icon--edit
</template>


<script>
import { mapActions } from 'vuex';
import SimpleVueValidator from 'simple-vue-validator';

const Validator = SimpleVueValidator.Validator;

export default {
  name: 'skills-title',
  mixins: [SimpleVueValidator.mixin],
  props: {
    category: Object
  },
  data () {
    return {
      editMode: this.category.showAddingCard,
      newTitle: ''
    };
  },
  components: {
    vcInput: () => import('./input.vue')
  },
  validators: {
    newTitle: value => {
      return Validator.value(value).required();
    }
  },
  methods: {
    ...mapActions('categories', ['addCategory', 'updateCategory', 'deleteCategory']),
    async skillsGroupTitle () {
      if (await this.$validate()) {
        if (this.newTitle === this.category.category) {
          return this.editMode = false;
        }

        if (!this.category.id) {
          await this.addCategory(this.newTitle);
          return this.$emit('hideCard');
        }

        await this.updateCategory({ title: this.newTitle, id: this.category.id });
        this.editMode = false;
      }
    },
    async deleteSkillGroup () {
      if (!this.category.id) {
        return this.$emit('hideCard');
      }

      this.editMode = false;
      await this.deleteCategory(this.category.id);
    }
  },
  watch: {
    editMode () {
      if (this.editMode) {
        this.newTitle = this.category.category || '';
      }
    }
  }
};
</script>