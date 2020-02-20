<template lang="pug">
  .input-tooltip(:class="{ 'input-tooltip--showed': errorText }") {{ errorText }}
</template>


<script>
  export default {
    props: {
      errorText: {
        type: String,
        default: ''
      }
    }
  };
</script>


<style lang="pcss" scoped>
  .input-tooltip {
    opacity: 0;
    position: absolute;
    left: 5%;
    font-size: 14px;
    line-height: 44px;
    color: #fff;
    background-color: $errors-color;
    padding: 0 20px;
    z-index: 9999;
    user-select: none;

    &:after {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 6px solid transparent;
      border-bottom-color: $errors-color;
    }

    &--showed {
      opacity: 1;
    }
  }
</style>