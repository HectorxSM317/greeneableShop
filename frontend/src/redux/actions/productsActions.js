import axios from "axios";
const urlBack = "http://localhost:4000";

const productsActions = {
  getProducts: () => {
    return async (dispatch, getState) => {
      let res = await axios.get(`${urlBack}/api/products`);
      return res;
    };
  },

  getOneProduct: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get(`${urlBack}/api/product/${id}`);
      dispatch({ type: "GETONEPRODUCTS", payload: res.data.response });
      return res;
    };
  },

  filterProducts: (searchInput) => {
    return (dispatch, getState) => {
      dispatch({ type: "FILTERPRODUCTS", payload: searchInput });
    };
  },

  addProduct: (data) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${urlBack}/api/products`,
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: "MESSAGE",
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success,
        },
      });
      return res;
    };
  },
  modifyProduct: (data, id) => {
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      const res = await axios.put(
        `${urlBack}/api/product/${id}`,
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: "message",
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success,
        },
      });

      return res;
    };
  },
  removeProduct: (id) => {
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      const res = await axios.post(
        `${urlBack}/api/product/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: "message",
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success,
        },
      });
      return res;
    };
  },
};

export default productsActions;
