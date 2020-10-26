<template>
  <canvas :id="id" height="65" />
</template>
<script>
import useDaily from "../../utils/useDailyData";

export default {
  name: "LineChart",
  props: {
    id: { type: String, required: true },
    label: {
      type: String,
    },
    options: {
      type: Object,
    },
  },
  setup(props) {
    useDaily(props.id, "/daily/downloads", props.label);
  },
};
</script>

<style>
</style>
