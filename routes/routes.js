const Router = require("express").Router(); //permite leer los endpoints
const passport = require("../config/passport");

//USERS

const usersControllers = require("../controllers/usersControllers");
const validator = require("../config/validator");
const { userSignUp, userSignIn, getAllUsers, verifyEmail, verifyToken } =
  usersControllers;

Router.route("/auth/signUp").post(validator, userSignUp).get(getAllUsers);

Router.route("/auth/signIn").post(userSignIn);

Router.route("/verify/:string").get(verifyEmail);

Router.route("/auth/signInToken").get(
  passport.authenticate("jwt", { session: false }),
  verifyToken
);

//COMMENTS
const commentsControllers = require("../controllers/commentsControllers");
const { addComment, editComment, deleteComment } = commentsControllers;

Router.route("/comments")
  .post(passport.authenticate("jwt", { session: false }), addComment)
  .put(passport.authenticate("jwt", { session: false }), editComment);

Router.route("/comments/:id").post(
  passport.authenticate("jwt", { session: false }),
  deleteComment
);

//Products

const ProductsControllers = require("../controllers/productControllers");
const {
  getProducts,
  getOneProduct,
  addProduct,
  modifyProduct,
  removeProduct,
  multiplesProducts,
  getFiveProducts,
} = ProductsControllers;

Router.route("/products").get(getProducts).post(addProduct);

Router.route("/product/:id")
  .post(removeProduct)
  .put(modifyProduct)
  .get(getOneProduct);

Router.route("/fiveproducts/random").get(getFiveProducts);

Router.route("/multiplesproducts").post(multiplesProducts);

const {
  createSummary,
  getOneSummary,
} = require("../controllers/cartControllers");

Router.route("/summary").post(createSummary);
Router.route("/summary/:id").get(getOneSummary);

Router.route("/fiveproducts/random").get(getFiveProducts);

module.exports = Router;
