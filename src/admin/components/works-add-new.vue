<template lang="pug">
  .card
    .card__header
      .card__column
        .page-subtitle Редактирование работы
    .card__content
      form(@submit.prevent="workCard(newWork)" @reset.prevent="hideAddingCard").edit-form.form--strong
        .edit-form__column
          input(
            type="file"
            name="work-image"
            @change="appendFileAndRenderPhoto")#upload-pic.edit-form__file
          .edit-form__row(v-if="renderedPhoto")
            .edit-form__frame
              img(:src="renderedPhoto")
          .edit-form__row(v-if="renderedPhoto")
            .edit-form__button
              button(type="button").btn
                label(for="upload-pic").btn.btn--link Изменить превью
          .edit-form__row(v-else)
            .edit-form__frame
              .edit-form__info Перетащите или загрузите для загрузки изображения
              .edit-form__button
                label(for="upload-pic").btn.btn--gradient ЗАГРУЗИТЬ
          vc-tooltip-input(:errorText="validation.firstError('newWork.photo')")
        .edit-form__column
          .edit-form__row
            vc-input(
              type="text"
              title="Название"
              name="title"
              v-model="newWork.title"
              :errorText="validation.firstError('newWork.title')"
              placeholder="Название проекта")
          .edit-form__row
            vc-input(
              type="url"
              title="Ссылка"
              name="link"
              v-model="newWork.link"
              :errorText="validation.firstError('newWork.link')"
              placeholder="https://www.web-page.com")
          .edit-form__row
            vc-input(
              type="textarea"
              title="Описание"
              name="description"
              v-model="newWork.description"
              :errorText="validation.firstError('newWork.description')"
              palceholder="Description")
          .edit-form__row
            vc-input(
              type="text"
              title="Добавление тэга"
              name="techs"
              v-model="newWork.techs"
              :errorText="validation.firstError('newWork.techs')"
              placeholder="Jquery, Vue.js, HTML5")
          .edit-form__row
            vc-tags(:techs="newWork.techs" :tagButton="true" @updateTag="updateTag")
          .edit-form__row
            .controls.edit-form__btns
              .controls__btn
                button(type="reset").btn.btn--link Отмена
              .controls__btn
                button(type="submit" :class="{ 'is-blocked': isBlocked }" :disabled="isBlocked").btn.btn--gradient Сохранить
</template>


<script>
import SimpleVueValidator from 'simple-vue-validator';
import showErrorTooltip from '../helpers/showErrorTooltip.js';
import { mapActions } from 'vuex';

const Validator = SimpleVueValidator.Validator;

export default {
  mixins: [SimpleVueValidator.mixin],
  name: 'work-add-new',
  props: ['work'],
  data () {
    return {
      isBlocked: false,
      renderedPhoto: '',
      newWork: { ...this.work }
    };
  },
  components: {
    vcInput: () => import('../components/input.vue'),
    vcTooltipInput: () => import('../components/tooltip-input.vue'),
    vcTags: () => import('../components/tags.vue'),
  },
  validators: {
    'newWork.title': function (value) {
      return Validator.value(value).required()
    },
    'newWork.link': function (value) {
      return Validator.value(value).required()
    },
    'newWork.description': function (value) {
      return Validator.value(value).required()
    },
    'newWork.techs': function (value) {
      return Validator.value(value).required()
    },
    'newWork.photo': function (value) {
      return Validator.value(value).required();
    }
  },
  methods: {
    ...mapActions('works', ['saveWork', 'updateWork']),
    hideAddingCard () {
      this.$emit('hideAddingCard');
    },
    appendFileAndRenderPhoto (e) {
      this.newWork.photo = e.target.files[0];
      const reader = new FileReader();

      try {
        reader.readAsDataURL(this.newWork.photo);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        };
      } catch (error) {
        showErrorTooltip(e, error);
      }
    },
    async workCard () {
      console.log(this.newWork);
      if (await this.$validate()) {
        this.isBlocked = true;

        const isChanged = Object.keys(this.newWork).some(key => {
          return this.newWork[key] !== this.work[key];
        });

        if (isChanged) {
          this.newWork.id ? await this.updateWork(this.newWork) : await this.saveWork(this.newWork);
        }

        this.$emit('hideAddingCard');
      }
    },
    updateTag (tags) {
      this.newWork.techs = tags;
    }
  },
  created () {
    this.newWork = { ...this.work };
    if(this.work.photo) {
      this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.work.photo;
    }
  },
  watch: {
    work () {
      this.newWork = { ...this.work };
      this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.work.photo;
    }
  }
};
</script>


<style scoped>
  .btn.is-blocked {
    cursor: unset;
    background: #ccc;
    user-select: none;
  }
</style>