
const express=require("express")
const app=new express()

const port=3000


const bodyParser = require('body-parser')
const path=require("path")
const errorController=require("./contollers/errors")

const connection=require("./utility/database")


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))


const adminRouter=require("./routers/admin")
const userRouter=require("./routers/shop")

//routes
app.use(adminRouter)
app.use(userRouter)


app.set('view engine', 'pug')


/*
connection.execute("SELECT * FROM products", function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
*/
const Category=require("./models/category")
const Product=require("./models/product")

Product.belongsTo(Category,{
  foreignKey:{allowNull:false}
})
const sequelize=require("./utility/database")
sequelize.sync().then((result=>console.log(result))).catch(err=>console.log(err))






app.use(errorController.error404)

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})