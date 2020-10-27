<template>
  <button :class="[className]" @click="action" :type="btnType">
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
    btnType: String,
  },
  setup(props) {
    const type = ref(props.route);
    return { type };
  },
};
</script>