<template>
  <app-header />
  <router-view />
</template>

<script>
import "./styles/main.scss"
import Header from "./components/organisms/Header";

export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style lang="scss" scoped>
</style>
