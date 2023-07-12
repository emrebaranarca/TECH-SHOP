const Product=require("../models/product")
const Category=require("../models/category")

exports.getIndex=(req,res,next)=>{
    
    Product.findAll()
        .then((products)=>{
            Category.findAll().then((category)=>{
                res.render("shop/index",{ title: 'Homepage',products:products,path:"/" ,category:category})
            }).catch((err)=>{
                console.log(err)
            })           
        })
        .catch((err)=>{
            console.log(err)
        })
    
}

exports.getProduct=(req,res,next)=>{
    
    Product.findAll()
    .then((products)=>{
        Category.findAll().then((category)=>{
            res.render("shop/products",{title:"Products",products:products,path:"/products",category:category})
        }).catch((err)=>console.log(err))
    })
    .catch((err)=>console.log(err))
    
}

exports.getProductFromCategory=(req,res,next)=>{
    const id=req.params.categoryID
    
    Product.findAll({
        where:{id:id}
    })
        .then((products)=>{
            Category.findAll().then(category=>{
                res.render("shop/products",{title:"Products",products:products,path:"/products",category:category,selectedCategory:id})
            }).catch(err=>console.log(err))     
        })
        .catch(err=>console.log(err))   

}

exports.getProductDetails=(req,res,next)=>{
    const category=Category.getAll()
    res.render("shop/detail",{title:"Details",path:"/details",category:category})
}

exports.getCard=(req,res,next)=>{
    Category.findAll().then(category=>{
        res.render("shop/card",{title:"Card",path:"/card",category:category})
    }).catch(err=>{console.log(err)})
    
}
exports.getOrders=(req,res,next)=>{
    Category.findAll().then(category=>{
        res.render("shop/Orders",{title:"Orders",path:"/orders",category:category})
    }).catch(err=>{console.log(err)})
    
}

exports.getProductID=(req,res,next)=>{
    const productID=req.params.productID
    
    Product.findByPk(productID)
    .then((pro)=>{
        Category.findAll().then(category=>{
            console.log(pro)
            res.render("shop/product-detail",{title:pro.name,products:pro,path:"/products",category:category})
        }).catch(err=>console.log(err))              
    })
    .catch(err=>console.log(err))
    
    
}