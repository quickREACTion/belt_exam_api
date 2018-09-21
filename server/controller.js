const productsSchema = require("./models.js");

module.exports = {
    allProducts: (req, res) => productsSchema.find({})
                                          .then(data=>res.json(data))
                                          .catch(errs=>res.json(errs)),
    specificProduct: (req, res) => productsSchema.findById(req.params.id)
                                           .then(data=>res.json(data))
                                           .catch(errs=>res.json(errs)),
    createProduct: (req, res) => productsSchema.create(req.body)
                                             .then(data=>res.json(data))
                                             .catch(errs=>res.json(errs)),
    updateProduct: (req, res) => productsSchema.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
                                                .then(data=>res.json(data))
                                                .catch(errs=>res.json(errs)),
    deleteProduct: (req, res) => productsSchema.findByIdAndRemove(req.params.id)
                                                .then(data=>res.json(data))
                                                .catch(errs=>res.json(errs)),

}