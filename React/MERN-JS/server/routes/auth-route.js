const express = require("express");
const router = express.Router();
const authcotroller=require('../contollers/auth-contoller')

//const app=express();
///using express we add 'app' while in module router of express class we use 'router'
//more std way of defining as we can add methods in it like .post .delete etc inspite of writing whole tings
//as we will add more controllers {home,register} this is will increase for imports inspite of that we can use diff way by importing authcotroller and adding it as 'authcotroller.home' so on in get function



router.route("/").get(authcotroller.home);
router.route('/register').get(authcotroller.register);

module.exports = router;































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































