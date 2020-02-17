<template lang="pug">
  .page__container
    .page__header
      .page__columns
        h1.page-title.works__title Блок «Работы»
    .page__content
      .page__row(v-if="showAddingCard")
        vc-works-add-new(:work="work" @hideAddingCard="hideAddingCard")
      .page__row
        ul.works__list
          li.works__item
            .card.card--add
              button(type="button" @click="showAddingCard = true").btn.btn--add.btn--xbig

          li(v-for="work in getWorks" :key="work.id").works__item
            vc-works-item(:work="work" @editWork="editWork")

</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    showAddingCard: false,
    work: {
      title: '',
      link: 'http://www.web-page.com',
      description: '',
      techs: '',
      photo: ''
    }
  }),
  components: {
    vcInput: () => import('../input.vue'),
    vcWorksItem: () => import('../works-item.vue'),
    vcWorksAddNew: () => import('../works-add-new.vue'),
  },
  methods: {
    ...mapActions('works', ['loadWorks']),

    hideAddingCard () {
      this.showAddingCard = false;
      this.work = { ...{
          title: '',
          link: 'http://fast.com',
          description: '',
          techs: '',
          photo: ''
        } }
    },
    editWork (payload) {
      this.work = payload;
      this.showAddingCard = true;
    }
  },
  computed: {
    ...mapGetters('works', ['getWorks']),
    ...mapState('user', {
      userID: state => state.user.id
    })
  },
  created () {
    this.loadWorks(this.userID);
  }
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
//     background-image: svg-load('cross.svg', fill=#000,   height=10px);
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



