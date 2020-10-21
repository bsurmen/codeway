<template>
  <component :is="type" :class="[className]">
    {{ text }}
  </component>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: { type: String, default: "p" },
    className: String,
  },
  data() {
    return {};
  },
};
</script>