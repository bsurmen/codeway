<template>
  <input :type="type" :placeholder="placeholder" :class="className" />
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: { type: String },
    type: { type: String, default: "text" },
    className: { type: String },
    func: Function,
  },
};
</script>

<style lang="scss" scoped>
.radius {
  &--top {
    border-radius: 8px 8px 0 0;
    border-bottom: none;
  }
  &--center {
    border-radius: 0;
    border-bottom: none;
  }
  &--bottom {
    border-radius: 0 0 8px 8px;
  }
}
</style>
