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
      let searchInput = action.payload.searchInput;
      let buttonRadio = action.payload.checkBox;
      console.log(searchInput);
      console.log(buttonRadio);
      function FilterProducts() {
        let filter = [];

        if (buttonRadio && searchInput !== "") {
          filter.push(
            ...state.products.filter(
              (evento) =>
                evento.name
                  .toLowerCase()
                  .includes(searchInput.trim().toLowerCase()) &&
                evento.category === buttonRadio
            )
          );
        } else if (buttonRadio && searchInput === "") {
          filter.push(
            ...state.products.filter(
              (evento) => evento.category === buttonRadio
            )
          );
        } else if (!buttonRadio && searchInput !== "") {
          filter.push(
            ...state.products.filter((evento) =>
              evento.name
                .toLowerCase()
                .includes(searchInput.trim().toLowerCase())
            )
          );
        } else {
          filter.push(...state.products);
        }
        return filter;

        // return product.name
        //   .toLowerCase()
        //   .startsWith(action.payload.searchInput.toLowerCase().trim());
      }

      return {
        ...state,
        filterProducts: FilterProducts(),
      };
    default:
      return state;
  }
};

export default citiesReducer; //se importa en mainReducer
