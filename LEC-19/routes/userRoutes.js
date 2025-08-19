const express = require("express");
const router = express.Router();

const{postAllUsers,getAllUsers,getUserById}=require("../controller/userController")
//create
router.post("/",postAllUsers)
//create
router.get("/",getAllUsers)

router.get("/:id",getUserById)

module.exports=router;