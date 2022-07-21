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
      let buttonRadio = action.payload.buttonRadio;
      // let orderSort = action.payload.orderSort;
      // console.log(orderSort);

      function filterProducts() {
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

        // if (orderSort) {
        //   sortProducts(filter);
        // }

        return filter;
      }

      // let asd = filterProducts();
      // console.log(asd);
      // let filter = [...state.products];

      // if (orderSort) {
      //   sortProducts(filter);
      // }

      // function sortProducts(filter) {
      //   if (orderSort === "des-name") {
      //     console.log(filter);
      //     filter = filter.sort((x, y) => x.price - y.price);
      //     console.log("de la A a la Z");
      //     console.log("sortdentrofilter", filter);
      //   }
      //   console.log("sort", filter);
      //   return filter;
      // }

      return {
        ...state,
        filterProducts: filterProducts(),
      };

    default:
      return state;
  }
};

export default citiesReducer; //se importa en mainReducer
