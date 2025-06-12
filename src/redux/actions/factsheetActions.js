import axios from "axios";
const BASE_URL = "https://api.lotusdew.in";

export const fetchFactSheetData = (token, userId, productId, isModal = false) => async (dispatch) => {
  console.log("fetchFactSheetData called with", { token, userId, productId, isModal });
  dispatch({ type: "FACTSHEET_REQUEST" });

  try {
    const headers = { Authorization: `Bearer ${token}` };
    const endpoint = isModal ? "/aif/ModelAifFactsheet" : "/aif/AifFactsheet";

    const { data } = await axios.post(
      `https://api.lotusdew.in${endpoint}`,
      { product_id: productId },
      { headers, withCredentials: true }
    );

    console.log("API response data", data);

    dispatch({ type: "FACTSHEET_SUCCESS", payload: data });
  } catch (error) {
    console.error("API fetch error", error);
    dispatch({
      type: "FACTSHEET_FAIL",
      payload: error.response?.data?.message || error.message,
    });
  }
};
