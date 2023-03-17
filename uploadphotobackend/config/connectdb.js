const mongoose = require('mongoose')
const connectToDb = async () => {
  try {
    const res = await mongoose.connect(
      "mongodb+srv://kamikaze:M8ARdNjTl1Wu0X98@cluster0.8mco3.mongodb.net/?retryWrites=true&w=majority"
    );
    if (res) {
      console.log("connected succesfuly");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDb;
