const { DataTypes } = require('sequelize')
const createProductsModel = (sequelize) => {
    return sequelize.define(
        'products',
        {
            name: {
                type: DataTypes.STRING
            },
            price: {
                type: DataTypes.INTEGER
            },
            screen: {
                type: DataTypes.STRING
            },
            blackcamera: {
                type: DataTypes.STRING
            },
            frontcamera: {
                type: DataTypes.STRING
            },
            img: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING
            },
            type: {
                type: DataTypes.STRING
            }
        }
    )
}
module.exports = {
    createProductsModel,
}