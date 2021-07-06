<template>
  <div class="preloader">
    <div class="preloader__loader"></div>
    <div class="preloader__text"></div>
  </div>
</template>

<script>
export default {
  name: 'preloader',
};
</script>

<style lang="scss" scoped>
  .preloader {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    padding: 30px 0;
    &__loader {
      height: 40px;
      width: 40px;
      border: 5px solid rgba(7, 165, 15, 0.5);
      border-top: 5px solid #409b29;
      border-radius: 50%;
      animation: rotate 2s infinite linear;
    }
    &__text {
      position: relative;
      &::before {
        position: absolute;
        content: 'Loading';
        font-size: 18px;
        font-weight: 700;
        top: 50%;
        right: 50%;
        color: #409b29;
        transform: translate(50%);
        animation: loading 4s ease-out infinite;
      }
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loading {
    0% {
      content: 'Loading';
    }
    25% {
      content: 'Loading.';
    }
    50% {
      content: 'Loading..';
    }
    100% {
      content: 'Loading...';
    }
  }
</style>
