const express = require("express");
const app = express();
const router = require("./routers/root.router");
const productRouter = require('./routers/product.router');

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use(express.json());
app.use('/api/products', productRouter);
app.use(router);

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Hello world' });
});

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'Hello world' });
});

// // Database setup
// const { sequelize } = require('./model');
// sequelize.sync({ alter: true }).catch(err => {
//     console.error('Database connection error:', err);
// });

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    });
}



