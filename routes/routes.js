const Router = require('express').Router(); //permite leer los endpoints
const passport = require('../config/passport')


//USERS


const usersControllers = require('../controllers/usersControllers');
const validator = require('../config/validator');
const { userSignUp, userSignIn, getAllUsers, verifyEmail, verifyToken } = usersControllers



Router.route('/auth/signUp')
    .post(validator, userSignUp)
    .get(getAllUsers)

Router.route('/auth/signIn')
    .post(userSignIn)

Router.route('/verify/:string')
    .get(verifyEmail)

Router.route('/auth/signInToken')
    .get(passport.authenticate('jwt', {session: false}) , verifyToken)




    //COMMENTS
const commentsControllers = require('../controllers/commentsControllers');
const { addComment, editComment, deleteComment } = commentsControllers

Router.route('/comments')
.post(passport.authenticate('jwt', {session: false}) , addComment)
.put(passport.authenticate('jwt', {session: false}) , editComment)

Router.route('/comments/:id')
.post(passport.authenticate('jwt', {session: false}) , deleteComment)



module.exports = Router 
