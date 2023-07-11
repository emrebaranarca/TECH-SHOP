const express=require("express")

const router=express.Router()

const adminController=require("../contollers/admin")

router.get("/admin/add-product",adminController.getAddProduct)


router.post("/admin/add-product",adminController.getPostProduct)

router.get("/admin/products",adminController.getProduct)

router.post("/admin/products",adminController.postEditProduct)

router.post("/admin/delete-product",adminController.deleteProduct)

router.get("/admin/products/:productID",adminController.getEditProduct)

module.exports=router
