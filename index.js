// require('dotenv').config()
// const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USE,  process.env.DB_PASS, {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: 'mysql'
// })

// const Task = sequelize.define(
//     'products',
//     {
//         name: {
//             type: DataTypes.STRING
//         },
//         price: {
//             type: DataTypes.INTEGER
//         },
//         screen: {
//             type: DataTypes.STRING
//         },
//         blackcamera: {
//             type: DataTypes.STRING
//         },
//         frontcamera: {
//             type: DataTypes.STRING
//         },
//         img: {
//             type: DataTypes.STRING
//         },
//         description: {
//             type: DataTypes.STRING
//         },
//         type: {
//             type: DataTypes.STRING
//         }
//     }
// )
// const syncModel = async () => {
//     await Task.sync({ force: true })
//     console.log('đã đồng bộ Task')
// }
// syncModel()

const createTask = async (name, price, screen) => {
    const newTask = await Task.create({
        name, price, screen
    })
}
// createTask('Iphone', '24000000', '640x800')
const getAllTask = async () => {
    const taskList = await Task.findAll()
    console.log("taskList: ", JSON.stringify(taskList, null, 2));
}

const getTaskByID = async (id) => {
    const taskListID = await Task.findOne({

        where: {
            id
        }
    })
    console.log("taskListID: ", JSON.stringify(taskListID, null, 2));
}

const updateTaskById = (data, id) => {
    Task.update(
        data
        , {
            where: {
                id
            }
        })
}
updateTaskById({
    name: 'Samsung',
    price: '20000000',
    screen: '400x400'
}, 1)
// getAllTask()
// getTaskByID(1)
const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Ket noi thanh cong')
    } catch (error) {
        console.log("Ket noi khong thanh cong: ", error);

    }
}
checkConnect()