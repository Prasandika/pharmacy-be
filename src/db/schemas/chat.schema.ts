import * as mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  socketId: {
    type: String,
    required: true,
  },

  messages: {
    type: Array,
    required: true,
  },
});

ChatSchema.virtual('id').get(function () {
  // return this._id.toHexString();
  return this._id;
});

ChatSchema.set('toJSON', {
  virtuals: true,
});

ChatSchema.set('toObject', {
  virtuals: true,
});

export default ChatSchema;
