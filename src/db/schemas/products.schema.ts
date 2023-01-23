import * as mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  boughtUserId: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

ProductsSchema.virtual('id').get(function () {
  // return this._id.toHexString();
  return this._id;
});

ProductsSchema.set('toJSON', {
  virtuals: true,
});

ProductsSchema.set('toObject', {
  virtuals: true,
});

export default ProductsSchema;
