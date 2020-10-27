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
    url: { type: String, required: true },
  },
  setup(props) {
    useDaily(props.id, props.url, props.label);
  },
};
</script>