<template>
  <img :src="src" :class="[`img ${className}`]" :alt="alt" />
</template>

<script>
export default {
  name: "Image",
  props: {
    src: { type: String, required: true },
    className: { type: String, default: "" },
    alt: { type: String, default: "image", required: true },
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>
