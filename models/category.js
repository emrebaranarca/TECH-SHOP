
//category model

//const connection=require("../utility/database")
/*

module.exports=class Category{
    constructor(name,description){
        this.id=id
        this.name=name
        this.description=description
    }

    saveCategory(){
        return  new Promise((resolve,reject)=>{
            connection.execute("INSERT INTO categories (name,description) VALUES(?,?)",[this.name,this.description],(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        }) 
    }

    static getAll()
    {
        return new Promise((resolve,reject)=>{
            connection.execute("SELECT * FROM categories ",(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static deleteCategory(id)
    {   
        return new Promise((resolve,reject)=>{
            connection.execute("DELETE FROM categories WHERE id=?  ",[id],(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
        
    }

    static getCategoryByID(id)
    {
        return new Promise((resolve,reject)=>{
            connection.execute("SELECT * FROM products WHERE products.id=?",[id],(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static uptadeCategory(category)
    {
        return new Promise((resolve,reject)=>{
            connection.execute("UPDATE categories SET name=?, description=?  ",[category.name,category.description],(err,result)=>{
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

const Category=sequelize.define("category",{
    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
      },

    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:Sequelize.DataTypes.STRING,
        allowNull: true
    }

}
)

module.exports=Category