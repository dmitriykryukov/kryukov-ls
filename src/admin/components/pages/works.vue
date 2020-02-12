<template lang="pug">
  .page__container
    .page__header
      .page__columns
        h2.page-title Блок «Работы»
    .page__content
      .page__row
        .card
          .card__header
            .card__column
              .page-subtitle Редактирование работы
          .card__content
            form.edit-form.form--strong
              .edit-form__column
                input#upload-pic.edit-form__file(type='file' name='work-image')
                .edit-form__row
                  .edit-form__frame
                    .edit-form__info Перетащите или загрузите для загрузки изображения
                    .edit-form__button
                      label.btn.btn--gradient( for='upload-pic') ЗАГРУЗИТЬ
                .input-tooltip
              .edit-form__column
                .edit-form__row
                  .input
                    label.input__label(for='input__title') Название
                    .input__wrapper
                      input#input__title.input__element(autocomplete='off' type='text' name='title' placeholder='Дизайн сайта для...')
                    .input-tooltip
                .edit-form__row
                  .input
                    label.input__label(for='input__link') Ссылка
                    .input__wrapper
                      input#input__link.input__element( autocomplete='off' type='url' name='link' placeholder='https://www.google.com')
                    .input-tooltip
                .edit-form__row
                  .input
                    label.input__label(for='input__description') Описание
                    .input__wrapper
                      textarea#input__description.input__element( name='description' placeholder='')
                    .input-tooltip
                .edit-form__row
                  .input
                    label.input__label(for='input__techs') Добавление тэга
                    .input__wrapper
                      input#input__techs.input__element(autocomplete='off' type='text' name='techs' placeholder='Jquery, Vue.js, HTML5')
                    .input-tooltip
                .edit-form__row
                  .tags
                    ul.tags__list
                .edit-form__row
                  .controls.edit-form__btns
                    .controls__btn
                      button.btn.btn--link(type='reset') Отмена
                    .controls__btn
                      button.btn.btn--gradient(data-v-38aced63='' type='submit') Сохранить
      .page__row
        ul.works__list
          li.works__item
            .card.card--add
              button.btn.btn--add.btn--xbig(type='button')
          li.works__item
            .card.card--works
              .card__header
                figure.works__figure
                  img( src='../../../images/admin/1.jpg' style='object-fit: cover; object-position: center center;')
                  figcaption.works__figcaption
                    .tags
                      ul.tags__list
                        li.tags__item
                          span HTML1
                        li.tags__item
                          span CSS
                        li.tags__item
                          span Javascript
              .card__content
                .works__row
                  h3.page-subtitle Сайт школы образования
                .works__row
                  p
                    | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!
                .works__row
                  a.btn.btn--link(href='#') #
              .card__footer
                .controls
                  .controls__btn
                    button.btn-tool.btn-tool--edit(type='button') Править
                  .controls__btn
                    button.btn-tool.btn-tool--cross(type='button') Удалить

      
</template>

<script>
export default {
  components: {
    
  },
  
};
</script>

<style lang="pcss">
@import "../../../styles/mixins.pcss";

.works {
  img {
    width: 100%;
  }

  &__figure {
    position: relative;
    margin: 0;
    padding: 0;
  }

  &__figcaption {
    position: absolute;
    bottom: 3%;
    right: 3%;
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

.tags {
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: -9px;
    margin-left: -9px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f4f9;
    color: rgba($tags-color, .7);
    font-size: 15px;
    font-weight: 600;
    line-height: 31px;
    border-radius: 22px;
    padding: 0 15px 0 15px;
    margin: 9px 0 0 9px;
    white-space: nowrap;
    min-height: 31px;
  }
}

// .btn {
//   height: 10px;
//   width: 10px;

//   &--cross {
//     background-image: svg-load('cross.svg', fill=#000, height=10px);
//     background-position: right center;
//     margin-left: 15px;
//   }
// }

figcaption {
  .tags__item {
    background-color: #fff;
  }
}


</style>



