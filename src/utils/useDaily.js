import { toRefs, reactive } from "vue";
import useFetch from "./useFetch";

export default function(id, url) {
  let dailyChartData = reactive({
    list: [],
    date: [],
    total: [],
    error: null,
    fetching: false,
  });

  const { response, error, fetchData, fetching, date, total } = useFetch(
    `https://codeway-dummy-rest-api.herokuapp.com/someapp${url}`,
    {},
    id
  );
  fetchData();
  dailyChartData.list = response;
  dailyChartData.date = date;
  dailyChartData.total = total;
  dailyChartData.error = error;
  dailyChartData.fetching = fetching;

  return { ...toRefs(dailyChartData) };
}
