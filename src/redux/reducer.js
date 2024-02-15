import { FETCH_DATA } from "./actionType";

const init = {
  data: null,
  loading: true,
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return { ...state, data: payload, loading: false };

    default:
      return state;
  }
};
export default reducer;
