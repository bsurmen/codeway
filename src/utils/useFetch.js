import { toRefs, reactive } from "vue";
import { mountChart } from "./mountChart";

export default function(url, options, id) {
  const state = reactive({
    response: [],
    date: [],
    total: [],
    error: null,
    fetching: false,
  });
  const fetchData = async () => {
    state.fetching = true;
    try {
      const res = await fetch(url, options);
      const json = await res.json();

      for (let d in json.payload.data) {
        const date = convertDateToString(d);
        state.date.push(date);
        state.total.push(json.payload.data[d]);
      }

      mountChart(id, state.date, state.total);
    } catch (errors) {
      state.error = errors;
    } finally {
      state.fetching = false;
    }
  };
  return { ...toRefs(state), fetchData };
}

// Converts chart date labels into new
const convertDateToString = (date) => {
  const yyyy = date.slice(0, 4);
  const mm = date.slice(5, 6);
  const dd = date.slice(6, 8);
  const today = dd + "-" + mm + "-" + yyyy;
  return today;
};
