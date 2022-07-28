import React from "react";
import "../styles/products.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "../redux/actions/productsActions";
import Product from "../components/Product";
import Checkbox from "@mui/material/Checkbox";
import { RiLeafFill } from "react-icons/ri";
import { RiLeafLine } from "react-icons/ri";

export default function Products() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);
  const [input, setInput] = useState("");
  const [buttonRadio, setbuttonRadio] = useState("");
  const [orderSort, setorderSort] = useState("");
  const [catProducts, setCatProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sustainableRank, setSustainableRank] = useState("");

  const [firstLeaf, setFirstLeaf] = useState(false);
  const [secondLeaf, setSecondLeaf] = useState(false);
  const [thirdLeaf, setThirdLeaf] = useState(false);
  const [cuartoLeaf, setCuartoLeaf] = useState(false);
  const [quinthLeaf, setQuinthLeaf] = useState(false);
  const [noLeaf, setNoLeaf] = useState(true);

  // const [asdProducts, setAsdProducts] = useState();
  // console.log(cart);
  const categories = new Set(catProducts.map((cat) => cat.category));
  // console.log(orderSort);
  const arrayCategories = [...categories];
  console.log(sustainableRank);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsActions.getProducts()).then((res) =>
      setCatProducts(res.data.response)
    );
  }, []);

  useEffect(() => {
    dispatch(
      productsActions.filterProducts(
        input,
        buttonRadio,
        orderSort,
        sustainableRank
      )
    );
  }, [input, buttonRadio, orderSort, sustainableRank]);

  let products = useSelector((store) => store.productsReducer?.filterProducts);
  console.log(products);

  return (
    <div className="p-0 mr-0 flex flex-col min-h-[100vh]">
      <div className="upper-box bgInputs gap-2 flex flex-col sm:flex-row justify-center m-0 p-4 px-5 container-box bg-slate-100 sticky items-center sm:justify-around ">
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
          <label className="mx-2" htmlFor="order"></label>
          <select
            onChange={(e) => setorderSort(e.target.value)}
            name="order"
            className="bg-white border-2 rounded-t-md p-2"
            id="order"
          >
            <option value={false}>Sort by</option>
            <option value="as-name">Ascending name</option>
            <option value="des-name">Descending name</option>
            <option value="high-price">Higher price</option>
            <option value="low-price">Lower price</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex py-5 gap-5">
          <label htmlFor="leaf" className="flex items-center pr-3">
            {noLeaf ? (
              <RiLeafFill style={{ color: "grey", fontSize: "35px" }} />
            ) : (
              <RiLeafLine style={{ color: "grey", fontSize: "35px" }} />
            )}

            <input
              className="hidden"
              name="leaf"
              type="radio"
              id="leaf"
              value=""
              onChange={(e) => {
                setFirstLeaf(false);
                setSecondLeaf(false);
                setThirdLeaf(false);
                setCuartoLeaf(false);
                setQuinthLeaf(false);
                setNoLeaf(e.target.checked);
                setSustainableRank(e.target.value);
              }}
              // icon={<RiLeafLine style={{ color: "green", fontSize: "28px" }} />}
              // checkedIcon={
              //   <RiLeafFill style={{ color: "green", fontSize: "28px" }} />
              // }
            />
          </label>
          <label htmlFor="leaf1">
            {firstLeaf ||
            secondLeaf ||
            thirdLeaf ||
            cuartoLeaf ||
            quinthLeaf ? (
              <RiLeafFill style={{ color: "green", fontSize: "35px" }} />
            ) : (
              <RiLeafLine style={{ color: "green", fontSize: "35px" }} />
            )}

            <input
              className="hidden"
              name="leaf"
              type="radio"
              id="leaf1"
              value="leaf1"
              onChange={(e) => {
                setNoLeaf(false);
                setSecondLeaf(false);
                setThirdLeaf(false);
                setCuartoLeaf(false);
                setQuinthLeaf(false);
                setFirstLeaf(e.target.checked);
                setSustainableRank(e.target.value);
              }}
            />
          </label>
          <label htmlFor="leaf2">
            {secondLeaf || thirdLeaf || cuartoLeaf || quinthLeaf ? (
              <RiLeafFill style={{ color: "green", fontSize: "35px" }} />
            ) : (
              <RiLeafLine style={{ color: "green", fontSize: "35px" }} />
            )}

            <input
              className="hidden"
              name="leaf"
              type="radio"
              id="leaf2"
              value="leaf2"
              onChange={(e) => {
                setNoLeaf(false);
                setThirdLeaf(false);
                setCuartoLeaf(false);
                setQuinthLeaf(false);
                setSecondLeaf(e.target.checked);
                setSustainableRank(e.target.value);
              }}
            />
          </label>
          <label htmlFor="leaf3">
            {thirdLeaf || cuartoLeaf || quinthLeaf ? (
              <RiLeafFill style={{ color: "green", fontSize: "35px" }} />
            ) : (
              <RiLeafLine style={{ color: "green", fontSize: "35px" }} />
            )}

            <input
              className="hidden"
              name="leaf"
              type="radio"
              id="leaf3"
              value="leaf3"
              onChange={(e) => {
                setNoLeaf(false);
                setCuartoLeaf(false);
                setQuinthLeaf(false);
                setThirdLeaf(e.target.checked);
                setSustainableRank(e.target.value);
              }}
            />
          </label>
          <label htmlFor="leaf4">
            {cuartoLeaf || quinthLeaf ? (
              <RiLeafFill style={{ color: "green", fontSize: "35px" }} />
            ) : (
              <RiLeafLine style={{ color: "green", fontSize: "35px" }} />
            )}

            <input
              className="hidden"
              name="leaf"
              type="radio"
              id="leaf4"
              value="leaf4"
              onChange={(e) => {
                setNoLeaf(false);
                setQuinthLeaf(false);
                setCuartoLeaf(e.target.checked);
                setSustainableRank(e.target.value);
              }}
            />
          </label>
          <label htmlFor="leaf5">
            {quinthLeaf ? (
              <RiLeafFill style={{ color: "green", fontSize: "35px" }} />
            ) : (
              <RiLeafLine style={{ color: "green", fontSize: "35px" }} />
            )}

            <input
              className="hidden"
              name="leaf"
              type="radio"
              id="leaf5"
              value="leaf5"
              onChange={(e) => {
                setNoLeaf(false);
                setQuinthLeaf(e.target.checked);
                setSustainableRank(e.target.value);
              }}
            />
          </label>
        </div>
      </div>

      <div className="bg-white my-3 w-full px-5 sm:justify-center flex gap-5 lg:gap-15 flex-wrap">
        <label className="flex gap-2 items-center">
          <input type="radio" name="asd" onClick={() => setbuttonRadio("")} />
          All categories
        </label>

        {arrayCategories.map((cat, i) => {
          return (
            <label key={i} className="flex gap-2 items-center">
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
