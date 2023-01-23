import * as mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

UsersSchema.virtual('id').get(function () {
  // return this._id.toHexString();
  return this._id;
});

UsersSchema.set('toJSON', {
  virtuals: true,
});

UsersSchema.set('toObject', {
  virtuals: true,
});

export default UsersSchema;
