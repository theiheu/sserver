const productServices = require("../services/products.services");

const getAllProduct = async (req, res) => {
    const productList = await productServices.getALl();
    res.status(200).send(productList);
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await productServices.getById(id);
    if (product) {
        res.status(200).send(product);
    } else {
        res.status(404).send("not found");
    }
};
const createProduct = async (req, res) => {
    const { name, price, screen } = req.body;
    const newProduct = await productServices.create(name, price, screen);
    res.status(201).send(newProduct);
};
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, screen } = req.body;
    const product = await productServices.update(id, name, price, screen);
    if (product) {
        res.status(200).send(product);
    } else {
        res.status(404).send("not found!");
    }
};
const deleteProductById = async (req, res) => {
    const { id } = req.params;

    const productDelete = await productServices.deleteById(id);

    if (productDelete) {
        res.status(200).send(productDelete);
    } else {
        res.status(404).send("Not Found!");
    }
};

module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProductById,
};
