<template lang="pug">
  .page__container
    .page__header
      .page__columns
        h2.page-title Блок «Отзывы»
    .page__content
      .page__row
        .card
          .card__header
            .card__column
              .page-subtitle Новый отзыв
          .card__content
            form.edit-form.edit-form--reviews.form--strong
              .edit-form__column
                input#upload-pic.edit-form__file(type='file' name='reviews-image')
                .edit-form__row
                  .edit-form__frame
                .edit-form__row
                  .edit-form__button
                    label.btn.btn--link(for='upload-pic') Добавить фото
                .input-tooltip
              .edit-form__column
                .edit-form__row-double
                  .edit-form__row
                    .input(data-v-b4a4ba36='' )
                      label.input__label( for='input__author') Имя автора
                      .input__wrapper
                        input#input__author.input__element(data-v-b4a4ba36='' autocomplete='off' type='text' name='author' placeholder='Ковальчук Дмитрий')
                      .input-tooltip
                  .edit-form__row
                    .input
                      label.input__label( for='input__occ') Титул автора
                      .input__wrapper
                        input#input__occ.input__element(autocomplete='off' type='text' name='occ' placeholder='Основатель LoftSchool')
                      .input-tooltip
                .edit-form__row
                  .input
                    label.input__label(for='input__text') Отзыв
                    .input__wrapper
                      textarea#input__text.input__element(name='text' placeholder='Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool!')
                    .input-tooltip
                .edit-form__row
                  .controls.edit-form__btns
                    .controls__btn
                      button.btn.btn--link(type='reset') Отмена
                    .controls__btn
                      button.btn.btn--gradient(type='submit') Сохранить
      .page__row
        ul.reviews__list
          li.reviews__item
            .card.card--add
              button.btn.btn--add.btn--xbig(type='button')
          li.reviews__item
            .card
              .card__header
                .user
                  .user__column
                    .avatar.avatar--50
                  .user__column
                    .user__row.user__name Ковальчук Дмитрий
                    .user__row.user__occ Основатель Loftschool
              .card__content
                .reviews__row
                  p 
                    | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .card__footer
                .controls
                  .controls__btn
                    button.btn-tool.btn-tool--edit( type='button') Править
                  .controls__btn
                    button.btn-tool.btn-tool--cross( type='button') Удалить

      
</template>

<script>
export default {
  components: {
    
  },
  
};
</script>

<style lang="pcss">
@import "../../../styles/mixins.pcss";

.reviews{
  img {
    width: 100%;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
  }

  &__item {
    flex-basis: calc(100% / 3 - 30px);
    margin-left: 30px;
    margin-bottom: 30px;
    @include desktop {
      flex-basis: calc(100% / 2 - 30px);
    }
    @include tablets {
      flex-basis: 100%;
    }
  }

  &__row {
    display: flex;
    margin-bottom: 20px;

    p {
      color: rgba($text-color, .7);
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
    }
  }
}      

.btn.is-blocked {
    cursor: unset;
    background: #ccc;
    user-select: none;
  }

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-size: cover;
  background-position: center center;

  img {
    max-height: initial;
    height: auto;
  }
}


.avatar--50 {
  width: 50px;
  height: 50px;
  background-image: url('../../../images/content/kovalchuk.jpg');
}

</style>



