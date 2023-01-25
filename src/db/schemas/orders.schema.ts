import * as mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
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
