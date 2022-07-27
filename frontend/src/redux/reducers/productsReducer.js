const initialState = {
  products: [],
  oneProduct: {},
  filterProducts: [],
  cart: [],
  total: 0,
};

export const getTotal = (cart) => {
  let Total = cart?.reduce((amount, item) => item.price + amount, 0);

  return Total;
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
      let orderSort = action.payload.orderSort;
      let sustainableRank = action.payload.sustainableRank;
      console.log(sustainableRank);

      function filterProducts() {
        let filterP = [];

        if (buttonRadio && searchInput && sustainableRank !== 0) {
          filterP.push(
            ...state.products.filter(
              (evento) =>
                evento.name
                  .toLowerCase()
                  .includes(searchInput.trim().toLowerCase()) &&
                evento.category === buttonRadio &&
                evento.sustainable === sustainableRank
            )
          );
        } else if (buttonRadio && searchInput && sustainableRank === 0) {
          filterP.push(
            ...state.products.filter(
              (evento) => evento.category === buttonRadio
            )
          );
        } else if (!buttonRadio && searchInput && sustainableRank !== "") {
          filterP.push(
            ...state.products.filter(
              (evento) =>
                evento.name
                  .toLowerCase()
                  .includes(searchInput.trim().toLowerCase()) &&
                evento.sustainable === sustainableRank
            )
          );
        } else if (!buttonRadio && !searchInput && sustainableRank !== "") {
          filterP.push(
            ...state.products.filter(
              (evento) =>
                evento.name
                  .toLowerCase()
                  .includes(searchInput.trim().toLowerCase()) &&
                evento.sustainable === sustainableRank
            )
          );
        } else if (!buttonRadio && searchInput && !sustainableRank !== "") {
          filterP.push(
            ...state.products.filter(
              (evento) =>
                evento.name
                  .toLowerCase()
                  .includes(searchInput.trim().toLowerCase()) &&
                evento.sustainable === sustainableRank
            )
          );
        } else {
          filterP.push(...state.products);
        }

        if (orderSort) {
          filterP = sortProducts(orderSort, filterP);
        }

        return filterP;
      }

      function sortProducts(orderSort, filterP) {
        console.log("filterP", filterP);
        let filter;
        if (orderSort === "des-name") {
          filter = filterP
            .sort((a, b) => a.name.localeCompare(b.name))
            .reverse();
        } else if (orderSort === "as-name") {
          filter = filterP.sort((a, b) => a.name.localeCompare(b.name));
        } else if (orderSort === "high-price") {
          filter = filterP.sort((a, b) => a.price - b.price).reverse();
        } else if (orderSort === "low-price") {
          filter = filterP.sort((a, b) => a.price - b.price);
        } else if (orderSort === "false") {
          filter = filterP;
        }
        return filter;
      }

      function sortSustainable(filterP) {
        let sustArray = [];

        if (sustainableRank === "leaf1") {
          sustArray.push(
            ...state.products.filter((product) => product.sustainable === 1)
          );
        } else if (sustainableRank <= "leaf2") {
          sustArray.push(
            ...state.products.filter((product) => product.sustainable === 2)
          );
        } else if (sustainableRank <= "leaf3") {
          sustArray.push(
            ...state.products.filter((product) => product.sustainable === 3)
          );
        } else if (sustainableRank <= "leaf4") {
          sustArray.push(
            ...state.products.filter((product) => product.sustainable === 4)
          );
        } else if (sustainableRank <= "leaf5") {
          sustArray.push(
            ...state.products.filter((product) => product.sustainable === 5)
          );
        }
        console.log(sustArray);

        return sustArray;
      }

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

export default productReducer; //se importa en mainReducer
