const express = require("express");
const app = express();
const router = require("./routers/root.router");
const productRouter = require('./routers/product.router');
app.use(express.json());

// app.use(router);
app.use('/api/products', productRouter);
app.use(router);
app.use('/test', (req, res) => {
    res.send('Hello world');
})


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});

// setup sequelize
const { sequelize } = require('./model')
sequelize.sync({ alter: true })