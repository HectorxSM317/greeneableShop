import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Details from "./pages/Details";

import AboutUs from "./pages/AboutUs";
// import AboutUs from './pages/AboutUs';
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "./redux/actions/productsActions";
import { useEffect } from "react";
import userActions from "./redux/actions/userActions";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsActions.getProducts());
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token");
      dispatch(userActions.verifyToken(token)); //CHEQUEAR
    }
  }, []);

  const loggedUser = useSelector((store) => store.usersReducer.loggedUser);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        {/* <Route path="/signUp" element={<SignUp />} />  */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {
          <Route
            path="/signUp"
            element={!loggedUser ? <SignUp /> : <Index />}
          />
        }
        {
          <Route
            path="/signIn"
            element={!loggedUser ? <SignIn /> : <Index />}
          />
        }
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
      {/* <ScrollToTop
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        smooth
        color='#142e34'
        viewBox="-10 -5 24 24"
        svgPath="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
      /> */}
    </>
  );
}

export default App;
