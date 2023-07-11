const Product=require("../models/product")
const Category=require("../models/category")

exports.getAddProduct=(req,res,next)=>{
    Category.findAll()
        .then((category)=>{
            res.render("admin/add-product",{ title: 'Add product',path:"/admin/add-product",category:category})
        }).catch(err=>console.log(err))
  
}


exports.getPostProduct=(req,res,next)=>{
    //const product=new Product(req.body.name,req.body.price,req.body.description,req.body.image)
    /*product.saveProduct()
        .then(()=>{
            res.redirect("/")
        })
        .catch(err=>console.log(err))
    */
    Product.create({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        image:req.body.image,
        categoryId:req.body.categoryid

    }).then(result=>{
        console.log(result)
        res.redirect("/")
    }).catch(err=>console.log(err))
}


exports.getProduct=(req,res,next)=>{
    
    Product.findAll()
        .then((products)=>{
            Category.findAll().then((category)=>{
                res.render("admin/products",{ title: 'Homepage',products:products,path:"/admin/products",action:req.query.action,category:category })
            }).catch((err)=>{console.log(err)})         
        })
        .catch((err)=>{console.log(err)})
    
}



exports.postEditProduct=(req,res,next)=>{
    
    const id=req.body.id
    const name=req.body.name
    const price=req.body.price
    const image=req.body.image
    const description=req.body.description
    const categoryid=req.body.categoryid


    Product.findByPk(id)
        .then((product)=>{
            product.name=name
            product.price=price
            product.image=image
            product.description=description
            product.categoryId=categoryid
            return product.save()           
        }).then(result=>{
            res.redirect("/admin/products?action=edit")
        })
        .catch(err=>console.log(err))

    
}


exports.getEditProduct=(req,res,next)=>{

    const productID=req.params.productID
    Product.findByPk(productID)
        .then((pro)=>{
            Category.findAll().then((category)=>{
                res.render("admin/edit-product",{title:pro.name,products:pro,path:"/admin/products",category:category})
            }).catch(err=>console.log(err))            
        })
        .catch(err=>console.log(err))
    
}


exports.deleteProduct=(req,res,next)=>{
    const id=req.body.id
    Product.destroy({
        where: {
          id: id
        }
      })
        .then(()=>{
            res.redirect("/admin/products?action=delete")
        })
        .catch(err=>console.log(err))
    

}