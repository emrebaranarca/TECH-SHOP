//const connection=require("../utility/database")

/*

module.exports=class Product{
    constructor(name,price,description,image,categoryid){
        this.categoryid=categoryid
        this.name=name
        this.price=price
        this.description=description
        this.image=image
    }

    saveProduct(){
        return new Promise((resolve,reject)=>{
            connection.execute("INSERT INTO products (name,price,image,description,categoryid) VALUES(?,?,?,?,?)",
            [this.name,this.price,this.image,this.description,this.categoryid],(err,results,fields)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(results)
                }
            })
        })

    }

    static getAll() {
        return new Promise((resolve, reject) => {
          connection.execute("SELECT * FROM products", (err, results, fields) => {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          });
        });
    }
      
      

    static getDetailID(productid){
        return new Promise((resolve, reject) => {
            connection.execute("SELECT * FROM products WHERE products.id=? ",[productid], (err, results, fields) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            });
        });
    }

    static uptadeProduct(product){
        return new Promise((resolve,reject)=>{
            connection.execute("UPDATE products SET name=?,price=?,image=?,description=?,categoryid=? WHERE products.id=? ",
            [product.name,product.price,product.image,product.description,product.categoryid,product.id],(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
     
    }

    static deleteProduct(id){

        return new Promise((resolve,reject)=>{
            connection.execute("DELETE FROM products WHERE products.id=?",[id],(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })

    }
    static getProductCategory(id){
        return new Promise((resolve,reject)=>{
            connection.execute("SELECT  *FROM products WHERE products.categoryid=? ",[id],(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })

    }
      
}

*/
const sequelize=require("../utility/database")
const { Sequelize, DataTypes } = require('sequelize');

const Product = sequelize.define('products', {
    // Model attributes are defined here
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true,
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
        type:Sequelize.DataTypes.STRING,
        allowNull: true
    },
    image:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    }
  }
)

module.exports=Product