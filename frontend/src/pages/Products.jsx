import React from "react";
import "../styles/products.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "../redux/actions/productsActions";
import Product from "../components/Product";

export default function Products() {
  const [input, setInput] = useState("");
  const [buttonRadio, setbuttonRadio] = useState("");
  const [orderSort, setorderSort] = useState("");
  const [catProducts, setCatProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // const [asdProducts, setAsdProducts] = useState();
  // console.log(cart);
  const categories = new Set(catProducts.map((cat) => cat.category));
  // console.log(orderSort);
  const arrayCategories = [...categories];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsActions.getProducts()).then((res) =>
      setCatProducts(res.data.response)
    );
  }, []);
  console.log(useSelector((store) => console.log(store)));
  useEffect(() => {
    dispatch(productsActions.filterProducts(input, buttonRadio, orderSort));
  }, [input, buttonRadio, orderSort]);

  let products = useSelector((store) => store.productsReducer?.filterProducts);

  function sortProducts(e) {
    // if (e === "des-name") {
    //   console.log(products);
    //   products = products.sort((x, y) => x.price - y.price);
    //   console.log("de la A a la Z");
    //   console.log("sortdentrofilter", products);
    // }
    // console.log("sort", products);
    // return products;
  }

  return (
    <div className="p-0 mr-0 flex flex-col min-h-[100vh]">
      <div className="upper-box flex flex-col sm:flex-row justify-center m-0 p-4 px-5 container-box bg-slate-100 sticky items-center sm:justify-around ">
        <div className="input-search">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="min-w-[18rem] block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by product..."
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
        <div className="order">
          <label className="mx-2" htmlFor="order">
            Order by
          </label>
          <select
            onChange={(e) => setorderSort(e.target.value)}
            name="order"
            className="bg-transparent"
            id="order"
          >
            <option value={false}>Sort</option>
            <option value="as-name">Ascending name</option>
            <option value="des-name">Descending name</option>
            <option value="high-price">Higher price</option>
            <option value="low-price">Lower price</option>
          </select>
        </div>
      </div>

      <div className="bg-white my-3 w-full px-5 flex gap-5 flex-wrap">
        <label>
          <input type="radio" name="asd" onClick={() => setbuttonRadio("")} />
          All categories
        </label>

        {arrayCategories.map((cat, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                name="asd"
                value={cat}
                onClick={(ev) => setbuttonRadio(ev.target.value)}
              />
              {cat}
            </label>
          );
        })}
      </div>
      <div className="productList">
        {products && products?.length > 0 ? (
          products?.map((product) => {
            return (
              <Product product={product} key={product._id} setCart={setCart} />
            );
          })
        ) : (
          <div className="notResult">
            <p>
              Sadly, we can't find any products to match your query. Try
              broadening your search!
            </p>
            <img
              src="https://i.ibb.co/pZLvF6D/planet.png"
              alt="planet"
              border="0"
              className="planet"
            />
          </div>
        )}
      </div>
    </div>
  );
}
