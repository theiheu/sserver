const express = require("express");
const {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProductById,
} = require("../controllers/products.controller");
const routerProduct = express.Router();

// ResFul APIs

// READ ALL
routerProduct.get("/", getAllProduct);

// GET BY ID
routerProduct.get("/:id", getProductById);

// CREATE
routerProduct.post("/", createProduct);

// UPDATE
routerProduct.put("/:id", updateProduct);

// DELETE
routerProduct.delete("/:id", deleteProductById);

module.exports = routerProduct;
