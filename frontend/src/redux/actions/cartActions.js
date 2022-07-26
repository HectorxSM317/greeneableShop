import axios from "axios";

const urlBack = "http://localhost:4000";

const cartActions = {
  createSummary: (summary) => {
    console.log(summary);
    return async (dispatch, getState) => {
      let res = await axios.post(`${urlBack}/api/summary`, {
        summary,
      });
      dispatch({
        type: "SUMMARY",
        payload: summary,
      });
    };
  },

  getOneSummary: (id) => {
    return async (dispatch, getState) => {
      const res = await axios(`${urlBack}/api/summary/${id}`);
    };
  },
  checkOut: (summary) => {
    return async (dispatch, getState) => {};
  },
};

export default cartActions;
