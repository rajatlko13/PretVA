const Products = require('../models/Products');

const getList = async (req,res) => {
    try{
        console.log('in getList api');
        const productsList = await Products.find();
        res.json(productsList);
    }catch(err){
        res.json(err);
    }
}

const get = async (req,res) => {
    try{
        console.log('in get api');
        const product = await Products.findById(req.params.id);
        res.json(product);
    }catch(err){
        res.json(err);
    }
}

const getByName = async (req,res) => {
    try{
        console.log('in getByName api');
        const product = await Products.find({ buyer_name : {$regex : new RegExp(req.params.name, "i")}});
        res.json(product);
    }catch(err){
        res.json(err);
    }
}

const remove = async (req,res) => {
    try{
        console.log('in delete api');
        const deletedProduct = await Products.findByIdAndDelete(req.params.id);
        res.json(deletedProduct);
    }catch(err){
        res.json(err);
    }
}

module.exports = { getList, get, getByName, remove};