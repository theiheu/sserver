const { Sequelize } = require('sequelize')
const { DB, HOST, PASSWORD, USER, PORT, dialect } = require('../configs/db.config')
const { createProductsModel } = require('../model/products.model')

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: dialect,
});
const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Ket noi thanh cong')
    } catch (error) {
        console.log("Ket noi khong thanh cong: ", error);

    }
}
checkConnect()
const Products = createProductsModel(sequelize)
module.exports = {
    sequelize,
    Products,
}