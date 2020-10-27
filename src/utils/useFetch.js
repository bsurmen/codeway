import { toRefs, reactive } from "vue";
import { customAxios } from "../services/axios";

export default async (url, options) => {
  const state = reactive({
    response: [],
    error: null,
    fetching: false,
  });

  try {
    state.fetching = true;
    const { data } = await customAxios.get(url, options);

    state.response = data;
  } catch (errors) {
    state.error = errors;
  } finally {
    state.fetching = false;
  }

  return { ...toRefs(state) };
};
