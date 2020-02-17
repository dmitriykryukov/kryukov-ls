<template lang="pug">
  .card.card--works
    .card__header
      figure.works__figure
        img(:src="workPhoto(work.photo)" style="object-fit: cover; object-position: center")
        figcaption.works__figcaption
          vc-tags(:techs="work.techs")
    .card__content
      .works__row
        h3.page-subtitle {{ work.title}}
      .works__row
        p {{ work.description }}
      .works__row
        a(:href="work.link" target="_blank").btn.btn--link {{ work.link }}
    .card__footer
      .controls
        .controls__btn
          button(type="button" @click="editWork").btn.btn--edit Править
        .controls__btn
          button(type="button" @click="deleteTheWork(work.id)").btn.btn--cross Удалить
</template>


<script>
import { mapActions } from 'vuex';

export default {
  name: 'works-item',
  props: ['work'],
  components: {
    vcTags: () => import('./tags.vue')
  },
  methods: {
    ...mapActions('works', ['deleteWork']),
    workPhoto (photo) {
      return `https://webdev-api.loftschool.com/${ photo }`;
    },
    editWork () {
      this.$emit('editWork', this.work);
    },
    deleteTheWork (payload) {
      this.deleteWork(payload);
    }
  }
};

</script>


<style lang="pcss" scoped>
  .btn {
    &--edit {
      background-image: svg-load('pencil.svg', fill=blue, height=17px);
      background-position: center right;
      padding-right: 30px;
    }

    &--cross {
      background-image: svg-load('cross.svg', fill=red, height=15px);
      background-position: center right;
      padding-right: 30px;
    }
  }
</style>