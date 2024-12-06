const { Products } = require("../model");

const getALl = async () => {
    const productList = await Products.findAll();
    if (productList) {
        return productList;
    } else {
        return "Not Found!";
    }
};

const getById = async (id) => {
    const product = await Products.findOne({
        where: {
            id,
        },
    });
    return product;
};

const create = async (name, price, screen, blackcamera, frontcamera, img, description, type) => {
    const newProduct = await Products.create({ name, price, screen, blackcamera, frontcamera, img, description, type });
    return newProduct;
};

const update = async (id, name, price, screen, blackcamera, frontcamera, img, description, type) => {
    const product = await Products.findOne({
        where: {
            id,
        },
    });
    if (product) {
        product.name = name;
        product.price = price;
        product.screen = screen;
        product.blackcamera = blackcamera;
        product.frontcamera = frontcamera;
        product.img = img;
        product.description = description;
        product.type = type;
        const productUpdated = await product.save();
        return productUpdated;
    } else {
        return null;
    }
};

const deleteById = async (id) => {
    const product = await Products.findOne({
        where: {
            id,
        },
    });
    if (product) {
        await Products.destroy({
            where: {
                id,
            },
        });
        return product;
    } else {
        return false;
    }
};

module.exports = {
    getALl,
    getById,
    create,
    update,
    deleteById,
};
