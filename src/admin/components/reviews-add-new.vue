<template lang="pug">
.card
  .card__header
    .card__column
      .page-subtitle Новый отзыв
  .card__content
    form(@submit.prevent="reviewCard(newReview)" @reset.prevent="hideAddingCard").edit-form.edit-form--reviews.form--strong
      .edit-form__column
        input(
          type="file"
          name="reviews-image"
          @change="appendFileAndRenderPhoto")#upload-pic.edit-form__file
        .edit-form__row
          .edit-form__frame(:class="{ filled: renderedPhoto.length }" :style="renderedBackground")
        .edit-form__row
          .edit-form__button
            label(for="upload-pic").btn.btn--link Добавить фото
        vc-tooltip-input(:errorText="validation.firstError('newReview.photo')")
      .edit-form__column
        .edit-form__row-double
          .edit-form__row: vc-input(
            type="text"
            name="author"
            title="Имя автора"
            placeholder="Имя автора"
            v-model="newReview.author"
            :errorText="validation.firstError('newReview.author')")
          .edit-form__row: vc-input(
            type="text"
            name="occ"
            title="Титул автора"
            placeholder="Титул автора"
            v-model="newReview.occ"
            :errorText="validation.firstError('newReview.occ')")
        .edit-form__row: vc-input(
          type="textarea"
          name="text"
          title="Отзыв"
          placeholder="Отзыв автора"
          v-model="newReview.text"
          :errorText="validation.firstError('newReview.text')")
        .edit-form__row
          .controls.edit-form__btns
            .controls__btn: button(type="reset").btn.btn--link Отмена
            .controls__btn: button(type="submit" :class="{ 'is-blocked': isBlocked }").btn.btn--gradient Сохранить
</template>


<script>
import SimpleVueValidator from 'simple-vue-validator';
import showErrorTooltip from '../helpers/showErrorTooltip.js';

const Validator = SimpleVueValidator.Validator;

import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  mixins: [SimpleVueValidator.mixin],
  name: 'reviews-add-new',
  props: {
    review: Object
  },
  data () {
    return {
      isBlocked: false,
      renderedPhoto: '',
      newReview: { ...this.review }
    };
  },
  components: {
    vcInput: () => import('./input.vue'),
    vcTooltipInput: () => import('./tooltip-input.vue')
  },
  validators: {
    'newReview.author': function (value) {
      return Validator.value(value).required()
    },
    'newReview.occ': function (value) {
      return Validator.value(value).required()
    },
    'newReview.text': function (value) {
      return Validator.value(value).required()
    },
    'newReview.photo': function (value) {
      return Validator.value(value).required()
    }
  },
  methods: {
    ...mapActions('reviews', ['saveReview', 'updateReview']),
    hideAddingCard () {
      this.$emit('hideAddingCard');
    },
    appendFileAndRenderPhoto (e) {

      this.newReview.photo = e.target.files[0];
      const reader = new FileReader();

      try {
        reader.readAsDataURL(this.newReview.photo);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        };
      } catch (error) {
        showErrorTooltip(e, error);
      }
    },
    async reviewCard (payload) {
      if (await this.$validate()) {
        this.isBlocked = true;

        const isChanged = Object.keys(this.newReview).some(key => {
          return this.newReview[key] !== this.review[key];
        });

        if (isChanged) {
          payload.id ? await this.updateReview(payload) : await this.saveReview(payload);
        }

        this.$emit('hideAddingCard');
      }
    }
  },
  computed: {
    ...mapGetters('reviews', ['getReviews']),
    renderedBackground () {
      return this.renderedPhoto ? `background-image: url(${ this.renderedPhoto });` : '';
    }
  },
  created () {
    this.newReview = { ...this.review };
    if(this.review.photo) {
      this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.review.photo;
    }
  },
  watch: {
    review () {
      console.log('watch');
      this.newReview = { ...this.review };
      this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.review.photo;
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