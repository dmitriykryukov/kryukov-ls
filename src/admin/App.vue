<template lang="pug">
  .root-wrapper-container
    .root-container
      router-view(name="header")
      router-view(name="tabs")
      .content-container(:class="{ 'content-container--dark': $route.path === '/login' }")
        router-view
</template>

<script>


export default {
  components: {
    
  }
  
};
</script>


<style lang="pcss">
@import "./styles/main.pcss";
</style>


