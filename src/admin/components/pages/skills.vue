<template lang="pug">
   .page__container
    .page__header
      .page__columns
        h2.page-title Блок «Обо мне»
      .page__columns
        button(type="button" @click="showAddingCard = true").btn.btn--add.btn--text Добавить группу
    .page__content
      ul.about__list
        //------------ADD NEW CATEGORY
        li(v-if="showAddingCard").about__item
          .card
            vc-skills-title(:category="{ showAddingCard }" @hideCard="hideCard")
            .card__content
            .card__footer
              vc-skills-add-new()

              
        //----------------SHOW ALL CATEGORIES
        li(v-for="category, index in getCategories" :key="index").about__item
          .card
            vc-skills-title(:category="category")
            .card__content
              ul.skills
                li(v-for="skill in category.skills" :key="skill.id")
                  vc-skills-item(:skill="skill")
            .card__footer
              vc-skills-add-new(:category="category")




        // li.about__item
        //   .card
        //     form.card__header
        //       .card__column
        //         .page-subtitle Workflow
        //       .card__column
        //         .controls
        //           .controls__btn
        //             button.btn.btn-icon--edit(type='button')
        //     .card__content
        //       ul.skills
        //         li
        //           .skills__row
        //             .skills__cell GIT
        //             .skills__cell 15 %
        //             .skills__cell
        //               .controls
        //                 .controls__btn
        //                   button.btn.btn-icon--edit(type='button')
        //                 .controls__btn
        //                   button.btn.btn-icon--delete(type='button')
        //         li
        //           .skills__row
        //             .skills__cell Terminal
        //             .skills__cell 25 %
        //             .skills__cell
        //               .controls
        //                 .controls__btn
        //                   button.btn.btn-icon--edit(type='button')
        //                 .controls__btn
        //                   button.btn.btn-icon--delete(type='button')
        //         li
        //           .skills__row
        //             .skills__cell Gulp
        //             .skills__cell 50 %
        //             .skills__cell
        //               .controls
        //                 .controls__btn
        //                   button.btn.btn-icon--edit(type='button')
        //                 .controls__btn
        //                   button.btn.btn-icon--delete(type='button')
        //         li
        //           .skills__row
        //             .skills__cell Webpack
        //             .skills__cell 50 %
        //             .skills__cell
        //               .controls
        //                 .controls__btn
        //                   button.btn.btn-icon--edit(type='button')
        //                 .controls__btn
        //                   button.btn.btn-icon--delete(type='button')
        //     .card__footer
        //       form.add-new-skill
        //         .add-new-skill__cell
        //           .input
        //             .input__wrapper
        //               input#input__title.input__element( autocomplete='off' type='text' name='title' placeholder='Новый навык')
        //             .input-tooltip
        //         .add-new-skill__cell
        //           .input
        //             .input__wrapper
        //               input#input__percent.input__element(autocomplete='off' type='number' name='percent' placeholder='')
        //             .input-tooltip
        //         .add-new-skill__cell
        //           button.btn.btn--add.btn--big(type='submit')

</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    showAddingCard: false,
    formBlocked: false,
    title: '',
    skill: {
      title: '',
      percent: 0,
      category: 0
    }
  }),
  components: {
    vcSkillsItem: () => import('../skills-item.vue'),
    vcSkillsTitle: () => import('../skills-title.vue'),
    vcSkillsAddNew: () => import('../skills-add-new.vue'),
  },
  computed: {
    ...mapGetters('categories', ['getCategories']),
    ...mapState('user', {
      userID: state => state.user.id
    })
  },
  methods: {
    ...mapActions('categories', ['loadCategories']),
    hideCard () {
      this.showAddingCard = false;
    }
  },
  created () {
    this.loadCategories(this.userID);
  }
};
</script>

<style lang="pcss">
@import "../../../styles/mixins.pcss";

.about {
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    @include tablets {
      flex-direction: column;
    }
  }

  &__item {
    flex-basis: calc(50% - 30px);
    margin-left: 30px;
    margin-bottom: 30px;
  }
}
</style>



