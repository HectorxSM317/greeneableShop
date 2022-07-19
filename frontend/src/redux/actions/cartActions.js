import axios from "axios";

const urlBack = "http://localhost:4000";

const cartActions = {
  createSummary: (cart) => {
    return async (dispatch, getState) => {
      let res = await axios.post(`${urlBack}/api/summary`, { cart });
      // console.log(res.data)
    };
  },

  getOneSummary: (id) => {
    return async (dispatch, getState) => {
      const res = await axios(apiUrl + `/api/summary/${id}`);
    };
  },
};

export default cartActions;
