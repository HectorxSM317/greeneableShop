import axios from "axios";

const urlBack = "http://localhost:4000";

const cartActions = {
  createSummary: (summary) => {
    return async (dispatch, getState) => {
      let res = await axios.post(`${urlBack}/api/summary`, {
        summary,
      });
      dispatch({
        type: "SUMMARY",
        payload: summary,
      });
      return res.data.res.success;
    };
  },

  getSummaryUser: () => {
    return async (dispatch, getState) => {
      const res = await axios(`${urlBack}/api/summary/checkouts`);
    };
  },
  checkOut: (summary) => {
    return async (dispatch, getState) => {};
  },
};

export default cartActions;
