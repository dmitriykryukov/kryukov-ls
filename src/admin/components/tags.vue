<template lang="pug">
  .tags
    ul.tags__list
      li(v-for="(tag, index) in tags" :key="tag").tags__item
        span {{ tag }}
        button(v-if="tagButton" type="button" @click="delTag(index)").btn.btn--cross
</template>

<script>
  export default {
    name: 'tags',
    props: ['techs', 'tagButton'],
    data() {
      return {
        tags: [],
      }
    },
    methods: {
      delTag(index) {
        this.tags.splice(index, 1);
        this.$emit('updateTag', this.tags.join(','));
      }
    },
    created() {
      if (this.techs.length > 0) {
        this.tags =  this.techs.split(',');
      }
    },
    watch: {
      techs() {
        this.tags = this.techs.split(',');
      }
    }
  };
</script>

<style lang="postcss" scoped>


</style>