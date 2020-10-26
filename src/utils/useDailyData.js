import { toRefs, reactive } from "vue";
import { mountChart } from "./mountChart";

export default function(id, url, label) {
  let dailyChartData = reactive({
    list: [],
    date: [],
    total: [],
    error: null,
    fetching: false,
  });

  const { response, date, total, error, fetching } = fetchData(
    `https://codeway-dummy-rest-api.herokuapp.com/someapp${url}`,
    {},
    id,
    label
  );
  dailyChartData.list = response;
  dailyChartData.date = date;
  dailyChartData.total = total;
  dailyChartData.error = error;
  dailyChartData.fetching = fetching;

  return { ...toRefs(dailyChartData) };
}

// Converts chart date labels into new
const convertDateToString = (date) => {
  const yyyy = date.slice(0, 4);
  const mm = date.slice(5, 6);
  const dd = date.slice(6, 8);
  const today = dd + "-" + mm + "-" + yyyy;
  return today;
};

const fetchData = async (url, options, id, label) => {
  const state = reactive({
    response: [],
    date: [],
    total: [],
    error: null,
    fetching: false,
  });

  state.fetching = true;
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    state.response = json;
    for (let d in json.payload.data) {
      const date = convertDateToString(d);
      state.date.push(date);
      state.total.push(json.payload.data[d]);
    }
    mountChart(id, state.date, state.total, label);
  } catch (errors) {
    state.error = errors;
  } finally {
    state.fetching = false;
  }

  return { ...toRefs(state) };
};
