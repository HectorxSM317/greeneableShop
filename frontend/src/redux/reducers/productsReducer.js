const initialState = {
  products: [],
  oneProduct: {},
  filterProducts: [],
  cart: [],
};

const productReducer = (state = initialState, action) => {
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
        let filterP = [];

        if (buttonRadio && searchInput !== "") {
          filterP.push(
            ...state.products.filter(
              (evento) =>
                evento.name
                  .toLowerCase()
                  .includes(searchInput.trim().toLowerCase()) &&
                evento.category === buttonRadio
            )
          );
        } else if (buttonRadio && searchInput === "") {
          filterP.push(
            ...state.products.filter(
              (evento) => evento.category === buttonRadio
            )
          );
        } else if (!buttonRadio && searchInput !== "") {
          filterP.push(
            ...state.products.filter((evento) =>
              evento.name
                .toLowerCase()
                .includes(searchInput.trim().toLowerCase())
            )
          );
        } else {
          filterP.push(...state.products);
        }

        // if (orderSort) {
        //   sortProducts(filter);
        // }

        return filterP;
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
      return initialState;

    case "CART_STORAGE":
      return {
        cart: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer; //se importa en mainReducer
