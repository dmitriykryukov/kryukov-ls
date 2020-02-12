<template lang="pug">
  .page__container
    .page__header
      .page__columns
        h2.page-title Блок «Навыки»
      .page__columns
        button(type="button").btn.btn--add.btn--text Добавить группу
    .page__content
      ul.about__list
        li.about__item
          .card
            form.card__header
              .card__column
                .input
                  .input__wrapper
                    input#input__undefined.input__element(autocomplete='off' autofocus='autofocus' type='text' placeholder='Название новой группы')
                  .input-tooltip
              .card__column
                .controls
                  .controls__btn
                    button.btn.btn-icon--check(type='submit')
                  .controls__btn
                    button.btn.btn-icon--cancel(type='button')
            .card__content
            .card__footer
              form.add-new-skill.is-blocked
                .add-new-skill__cell
                  .input
                    .input__wrapper
                      input#input__title.input__element(autocomplete='off' type='text' name='title' placeholder='Новый навык')
                    .input-tooltip
                .add-new-skill__cell
                  .input
                    .input__wrapper
                      input#input__percent.input__element(autocomplete='off' type='number' name='percent' placeholder='')
                    .input-tooltip
                .add-new-skill__cell
                  button.btn.btn--add.btn--big(type='submit')

        li.about__item
          .card
            form.card__header
              .card__column
                .page-subtitle Workflow
              .card__column
                .controls
                  .controls__btn
                    button.btn.btn-icon--edit(type='button')
            .card__content
              ul.skills
                li
                  .skills__row
                    .skills__cell GIT
                    .skills__cell 15 %
                    .skills__cell
                      .controls
                        .controls__btn
                          button.btn.btn-icon--edit(type='button')
                        .controls__btn
                          button.btn.btn-icon--delete(type='button')
                li
                  .skills__row
                    .skills__cell Terminal
                    .skills__cell 25 %
                    .skills__cell
                      .controls
                        .controls__btn
                          button.btn.btn-icon--edit(type='button')
                        .controls__btn
                          button.btn.btn-icon--delete(type='button')
                li
                  .skills__row
                    .skills__cell Gulp
                    .skills__cell 50 %
                    .skills__cell
                      .controls
                        .controls__btn
                          button.btn.btn-icon--edit(type='button')
                        .controls__btn
                          button.btn.btn-icon--delete(type='button')
                li
                  .skills__row
                    .skills__cell Webpack
                    .skills__cell 50 %
                    .skills__cell
                      .controls
                        .controls__btn
                          button.btn.btn-icon--edit(type='button')
                        .controls__btn
                          button.btn.btn-icon--delete(type='button')
            .card__footer
              form.add-new-skill
                .add-new-skill__cell
                  .input
                    .input__wrapper
                      input#input__title.input__element( autocomplete='off' type='text' name='title' placeholder='Новый навык')
                    .input-tooltip
                .add-new-skill__cell
                  .input
                    .input__wrapper
                      input#input__percent.input__element(autocomplete='off' type='number' name='percent' placeholder='')
                    .input-tooltip
                .add-new-skill__cell
                  button.btn.btn--add.btn--big(type='submit')

</template>

<script>
export default {
  components: {

  },
  
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



