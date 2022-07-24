import axios from "axios";

const urlBack = "http://localhost:4000";

const cartActions = {
  createSummary: (summary) => {
    console.log(summary);
    return async (dispatch, getState) => {
      let res = await axios.post(`${urlBack}/api/summary`, { summary });
      // console.log(res.data)
    };
  },

  getOneSummary: (id) => {
    return async (dispatch, getState) => {
      const res = await axios(`${urlBack}/api/summary/${id}`);
    };
  },

  // addCarrito: (idProduct) => {
  //   return async (dispatch, getState) => {
  //     const res = await axios(`${urlBack}/api/summary/${idProduct}`);
  //   };
  // },
};

export default cartActions;
