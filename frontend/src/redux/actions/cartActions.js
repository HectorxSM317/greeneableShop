import axios from "axios";
import urlBack from "../../urlBack";

const cartActions = {
  createSummary: (cart) => {
    return async (dispatch, getState) => {
      let res = await axios.post(`${urlBack}/api/summary`, { cart });
      // console.log(res.data)
    };
  },

  getOneSummary: (id) => {
    return async (dispatch, getState) => {
      const res = await axios(apiUrl + `/summary/${id}`);
    };
  },
};

export default cartActions;
