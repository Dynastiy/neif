<template>
  <div class="lg:h-screen md:h-screen flex justify-center items-center">
    <div class="lg:p-12 md:p-8 p-8 lg:bg-white md:bg-white  lg:w-6/12 md:w-7/12 w-full h-max">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.name
    }
  }
}
</script>

<style>
.left-side {
  background: url('@/assets/img/bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
