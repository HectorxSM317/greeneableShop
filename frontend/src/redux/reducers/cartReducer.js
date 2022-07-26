const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newItem = action.payload;

      let itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );

      const newReduxState = itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item._id === newItem._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };

      localStorage.setItem("product", JSON.stringify(newReduxState.cart));

      return newReduxState;
    }

    case "REMOVE_ONE_FROM_CART": {
      let itemToDelete = state.cart.find((item) => item._id === action.payload);

      const newReduxStore =
        itemToDelete.quantity > 1
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item._id === action.payload
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: state.cart.filter((item) => item._id !== action.payload),
            };

      localStorage.setItem("product", JSON.stringify(newReduxStore.cart));

      return newReduxStore;
    }
    case "REMOVE_ALL_FROM_CART": {
      console.log(action.payload);
      const newReduxStore = {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
      console.log(newReduxStore.cart);
      localStorage.setItem("product", JSON.stringify(newReduxStore.cart));

      return newReduxStore;
    }
    case "CLEAR_CART":
      localStorage.removeItem("product");
      return {
        ...state,
        cart: [],
      };

    case "CART_STORAGE":
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer; //se importa en mainReducer