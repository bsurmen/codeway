import { toRefs, reactive } from "vue";
import { mountChart } from "./mountChart";
import axios from "../services/axios";

export default function(id, url, label) {
  let dailyChartData = reactive({
    list: [],
    date: [],
    total: [],
    error: null,
    fetching: false,
  });

  const { date, total, error, fetching } = fetchData(url, {}, id, label);

  dailyChartData.date = date;
  dailyChartData.total = total;
  dailyChartData.error = error;
  dailyChartData.fetching = fetching;

  return { ...toRefs(dailyChartData) };
}

// Converts date value format yyyymmdd => dd-mm-yyyy
const convertDateToString = (date) => {
  const yyyy = date.slice(0, 4);
  const mm = date.slice(5, 6);
  const dd = date.slice(6, 8);
  const today = dd + "-" + mm + "-" + yyyy;
  return today;
};

const fetchData = async (url, options, id, label) => {
  const state = reactive({
    date: [],
    total: [],
    error: null,
    fetching: false,
  });

  try {
    state.fetching = true;
    const { data } = await axios.get(url, options);
    const res = data.payload.data;

    for (let key in res) {
      const date = convertDateToString(key);
      state.date.push(date);
      state.total.push(res[key]);
    }
    mountChart(id, state.date, state.total, label);
  } catch (errors) {
    state.error = errors;
  } finally {
    state.fetching = false;
  }

  return { ...toRefs(state) };
};
