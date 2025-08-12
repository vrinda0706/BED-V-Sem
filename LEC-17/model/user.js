const mongoose =require("mongoose");
const Schema = mongoose.Schema;


const users = new Schema({
  name: String,
  password: String,
  date: Date
});
const MyModel = mongoose.model('USERS', users);

module.exports = MyModel;