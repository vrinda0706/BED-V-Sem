const express = require("express");
const router = express.Router();//app ka subset

const {postAddBlog,getAllBlogs,deleteAllBlogs} =require("../controller/blogController")
//create
router.post("/blogs",postAddBlog)
router.get("/",getAllBlogs)
router.delete("/:blogId",deleteAllBlogs)
module.exports = router;