const goose = require('mongoose');
// const hash = require('mongoose-hash');

const productsSchema = new goose.Schema({
    _id: {
        type: Number,
    },
    name: {
        type: String,
        required: [true, 'Name is a required field!'],
        minlength: [3, 'Name requires a minimum of 3 characters']
    },
    quantity: {
        type: Number,
        required: [true, "Quanty is required!"],
        min: [0, "Quantity must be 0 or greater!"]
    },
    price: {
        type: Number,
        required: [true, "The price is required!"],
        min: [0.00, "Price must be 0 or greater!"]
    }
}, {timestamps: true})

// productsSchema.plugin(hash, {
//     field: '_id',
//     size: 20
// });

goose.connect("mongodb://localhost:27017/beltProducts_2", {useNewUrlParser: true}, (errs)=>console.log(errs?errs: "db is gucci fam"));

module.exports = goose.model("beltProducts_2", productsSchema);