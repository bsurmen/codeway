<template>
    <button :class="[className]" @click="action">
      {{ text }}
    </button>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
    className: String,
    route: { type: String, default: "" },
    action: Function,
  },
  data() {
    return {
      type: this.route,
    };
  },
};
</script>

<style lang="scss">
</style>