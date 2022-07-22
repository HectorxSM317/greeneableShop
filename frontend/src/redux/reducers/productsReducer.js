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

    case "ADD_TO_CART": {
      console.log(state.products);
      let newItem = state.products.find(
        (product) => product._id === action.payload._id
      );
      console.log(newItem);
      console.log(state.cart);
      let itemInCart = state.cart.find((item) => item._id === newItem._id);
      console.log(itemInCart);
      return itemInCart
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
    }

    case "REMOVE_ONE_FROM_CART": {
      let itemToDelete = state.cart.find((item) => item._id === action.payload);
      console.log(itemToDelete);

      return itemToDelete.quantity > 1
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
    }
    case "REMOVE_ALL_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
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
