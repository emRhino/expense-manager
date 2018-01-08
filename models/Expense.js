import mongoose, { Schema } from 'mongoose';

const expenseSchema = new Schema({
  description: String,
  amount: Number,
  month: String,
  year: Number
});

module.exports = mongoose.model('Expense', expenseSchema);
