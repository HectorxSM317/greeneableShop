import React from "react";
import "../styles/products.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "../redux/actions/productsActions";
import { Checkbox } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

export default function Products() {
  // const categories = [
  //   {
  //     name: "Lamp",
  //     image:
  //       "https://www.sme-news.co.uk/wp-content/uploads/2020/10/sustainable-products-1024x576.jpg",
  //   },
  //   {
  //     name: "Sustainable",
  //     image:
  //       "https://massachusetts.revolusun.com/wp-content/uploads/sites/2/2018/06/PowerGreen-15000Mah-Solar-Power-Bank-Portable-Solar-Phone-Battery-Charger-External-Power-Pack-for-LG-Phones-1.jpg",
  //   },
  //   {
  //     name: "Recycled",
  //     image:
  //       "https://i.pinimg.com/736x/57/5c/2e/575c2edfbd6bea407ee2298cffd6cfab--plumbing-pipe-pvc-pipes.jpg",
  //   },
  //   {
  //     name: "Vintage",
  //     image:
  //       "https://www.divinedistribution.co.uk/wp-content/uploads/2019/01/20200729_075701458_iOS-375x400.jpg",
  //   },
  //   {
  //     name: "Toys",
  //     image:
  //       "https://afilii.com/en/wp-content/uploads/sites/3/2018/09/eco-toys-toys-of-wood-Bowles-by-Julie-Chrpova-1.jpg",
  //   },
  // ];

  const [age, setAge] = React.useState("");
  // const [products, setProducts] = useState()

  const [input, setInput] = useState("");
  const [az, setAz] = useState("");

  let checkBox = [];

  const dispatch = useDispatch();
  // console.log(input);

  useEffect(() => {
    dispatch(productsActions.filterProducts(input, checkBox));
  }, [input]);

  let products = useSelector((store) => store.productsActions?.filterProducts);
  // const store = useSelector((store) => store);
  // console.log(store);

  let category = new Set(products.map((product) => product.category));
  console.log(category);
  let categories = [...category];

  const handleChange = (e) => {
    if (e === "as-name") {
      setAz("asc");
    } else {
      setAz("des");
    }
  };

  console.log(checkBox);

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
            onChange={(e) => handleChange(e.target.value)}
            name="order"
            className="bg-transparent"
            id="order"
          >
            <option value="as-name">Ascending name</option>
            <option value="des-name">Descending name</option>
            <option value="high-price">Higher price</option>
            <option value="low-price">Lower price</option>
          </select>
        </div>
      </div>

      <div className="bg-white my-3 w-full justify-center flex gap-5 flex-wrap">
        {categories.map((cat, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                value={cat}
                onClick={(ev) => {
                  if (ev.target.checked) {
                    checkBox.push(ev.target.value);
                  } else {
                    checkBox = checkBox.filter(
                      (categoryCheckBox) => categoryCheckBox !== ev.target.value
                    );
                  }

                  console.log(checkBox);
                }}
              />
              {cat}
            </label>
            // <div
            //   key={i}
            //   className="flex justify-center items-center border p-5"
            //   onClick={(ev) => console.log(ev)}
            // >
            //   <p>{cat}</p>
            // </div>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center justify-around my-1 w-full grow">
        {products.length > 0 ? (
          products?.map((product, i) => {
            return (
              <div key={i} className="max-w-[15rem]">
                <div className="max-w-sm rounded overflow-hidden shadow-lg h-[15rem] w-[15rem] m-1">
                  <img
                    className="w-full h-full object-cover"
                    src={product.photo}
                    alt="Sunset in the mountains"
                  />
                </div>
                <div className="min-h-[12rem]">
                  <div className="px-6 py-4">
                    <p className="font-bold text-lg text-slate-900 mb-2">
                      {product.name}
                    </p>
                    <p className="font-bold text-2xl">{product.price} USD</p>
                  </div>
                </div>
                <LinkRouter
                  to={`/details/${product._id}`}
                  className="absolute center bottom-4 text-center pt-2 text-black font-bold rounded-lg h-10 w-32"
                >
                  View more
                </LinkRouter>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center items-center my-5">
            <p>
              Sadly, we can't find any products to match your query. Try
              broadening your search!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
