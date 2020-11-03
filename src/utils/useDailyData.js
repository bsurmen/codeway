import { toRefs, reactive } from "vue";
import { mountChart } from "./mountChart";
import useFetch from "./useFetch";

export default async function(id, url, label, isUpdated) {
  let dailyChartData = reactive({
    date: [],
    total: [],
    error: null,
    fetching: false,
  });

  const { response, error, fetching } = await useFetch(url);
  const responseData = response.value.payload.data;

  const rawDate = Object.keys(responseData);
  const total = Object.values(responseData);
  dailyChartData.total = total;
  dailyChartData.error = error;
  dailyChartData.fetching = fetching;

  rawDate.forEach((date) => {
    dailyChartData.date.push(convertDateToString(date));
  });

  mountChart(id, dailyChartData.date, dailyChartData.total, label, isUpdated);

  return { ...toRefs(dailyChartData) };
}

// Converts date value format yyyymmdd => dd-mm-yyyy
const convertDateToString = (date) => {
  const yyyy = date.slice(0, 4);
  const mm = date.slice(5, 6);
  const dd = date.slice(6, 8);
  const newFormat = dd + "-" + mm + "-" + yyyy;
  return newFormat;
};
