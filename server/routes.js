const productsRoute = require('./controller.js');
const bp = require('body-parser');
const path = require('path');

module.exports = function(app) {
    app.use(bp.json())

    app.get('/api/products', productsRoute.allProducts);

    app.get('/api/specproducts/:id', productsRoute.specificProduct);

    app.post('/api/products', productsRoute.createProduct);

    app.put('/api/products/:id', productsRoute.updateProduct);

    app.delete('/api/products/:id', productsRoute.deleteProduct);

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });


    return app;
}