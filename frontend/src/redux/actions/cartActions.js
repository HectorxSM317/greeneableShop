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

  getSustainable: () => {
    return async (dispatch, getState) => {
      let res = await axios.get(`${urlBack}/api/summary/sustainable`);
      console.log(res);
      return res;
    };
  },
};

export default cartActions;
