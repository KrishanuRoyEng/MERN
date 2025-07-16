const express = require('express');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const app = express();

//Configuration file
const config = require('config');
require('dotenv').config();
const PORT = process.env.PORT || config.get('server.port') || 3500;
const HOST = process.env.HOST || config.get('server.host') || 'localhost';



app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT, HOST, () => {
    console.log(`Server start and running on http://${HOST}:${PORT}`);
});
