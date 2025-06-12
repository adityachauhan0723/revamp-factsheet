const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const factsheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FACTSHEET_REQUEST":
      return { ...state, loading: true, error: null };
    case "FACTSHEET_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FACTSHEET_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
