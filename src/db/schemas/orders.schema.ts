import * as mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

OrdersSchema.virtual('id').get(function () {
  // return this._id.toHexString();
  return this._id;
});

OrdersSchema.set('toJSON', {
  virtuals: true,
});

OrdersSchema.set('toObject', {
  virtuals: true,
});

export default OrdersSchema;
