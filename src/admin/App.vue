<template lang="pug">
  .root-wrapper-container
    .root-container
      router-view(name="header")
      router-view(name="tabs")
      .content-container(:class="{ 'content-container--dark': $route.path === '/login' }")
        router-view
      vc-tooltip()
</template>

<script>
 export default {
    components: {
      vcTooltip: () => import('./components/tooltip.vue')
    }
  };
</script>


<style lang="pcss">
@import "./styles/main.pcss";
</style>


