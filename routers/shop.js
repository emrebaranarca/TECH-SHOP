const express=require("express")
const router=express.Router()

const shopController=require("../contollers/shop")

router.get("/",shopController.getIndex)
router.get("/products",shopController.getProduct)
router.get("/details",shopController.getProductDetails)
router.get("/card",shopController.getCard)
router.get("/orders",shopController.getOrders)

router.get("/products/:productID",shopController.getProductID)
router.get("/category/:categoryID",shopController.getProductFromCategory)



module.exports=router