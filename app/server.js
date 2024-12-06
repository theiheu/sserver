const express = require("express");
const app = express();
const router = require("./routers/root.router");
const productRouter = require('./routers/product.router');
app.use(express.json());

// app.use(router);
app.use('/api/products', productRouter);

app.listen(7000, () => {
    console.log(`Server started on http://localhost:7000`);
});

// setup sequelize
const { sequelize } = require('./model')
sequelize.sync({ alter: true })