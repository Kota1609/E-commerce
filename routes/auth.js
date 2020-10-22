const express = require("express");
const router = express.Router();

//requiresignin checks weather it is a authenticated user or not in built middleware
const {
    signup,
    signin,
    signout,
    requireSignin
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

router.get('/hello', requireSignin, (req,res) => {
 res.send("hello there")
})

module.exports = router;
