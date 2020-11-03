<template>
  <div class="real-time">
    <canvas :id="id" />
  </div>
</template>
<script>
import useDaily from "../../utils/useDailyData";
import { onUnmounted, ref } from "vue";

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
    const isUpdated = ref(true);
    const halfMin = ref(30000);

    useDaily(props.id, props.url, props.label);

    // Fetches current data each 30 sec.
    const getRealtimeData = setInterval(() => {
      useDaily(props.id, props.url, props.label, isUpdated.value);
    }, halfMin.value);

    onUnmounted(() => {
      clearInterval(getRealtimeData);
    });
  },
};
</script>