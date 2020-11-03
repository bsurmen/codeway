<template>
  <section class="home__chart">
    <div class="home__chart__info">
      <i class="fad fa-chart-bar home__chart__icon" />
      <app-text :text="title" type="h4" className="home__chart__text" />
    </div>
    <line-chart :id="id" :url="url" :label="label" />
  </section>
</template>

<script>
import TextField from "../atoms/TextField";
import LineChart from "../atoms/LineChart";

export default {
  name: "Chart",
  components: {
    lineChart: LineChart,
    appText: TextField,
  },
  props: {
    title: { type: String, required: true },
    url: { type: String, required: true },
    label: { type: String, required: true },
    id: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__chart {
    margin: 0 1em;
    background-color: $bunting;
    padding: 1em;
    height: max-content;
    border-radius: 8px;

    @include lt-md {
      padding: 0.5em 0.1em;
    }

    &__text {
      font-weight: 300;
      margin: 0;
      margin-left: 0.8em;
      color: $white;
    }

    &__icon {
      color: $fuchsia-pink;
    }

    &__info {
      @include flex {
        justify-content: flex-start;
      }
      flex-direction: row;
      padding: 8px 0 1.5rem 8px !important;
    }
  }
}
</style>
