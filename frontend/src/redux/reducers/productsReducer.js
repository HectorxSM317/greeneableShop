const initialState = {
  products: [],
  oneProduct: {},
  filterProducts: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (
    action.type //condiciones
  ) {
    case "GETPRODUCTS":
      return {
        ...state,
        products: action.payload,
        filterProducts: action.payload,
      };
    case "GETONEPRODUCT":
      return {
        ...state,
        oneProduct: action.payload,
      };
    case "FILTERPRODUCTS":
      let filter = state.products.filter((product) =>
        product.name
          .toLowerCase()
          .startsWith(action.payload.toLowerCase().trim())
      );

      return {
        ...state,
        filterProducts: filter,
      };
    default:
      return state;
  }
};

export default citiesReducer; //se importa en mainReducer
