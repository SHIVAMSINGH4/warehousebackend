const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:Rsavita@warehouse.qqgdchj.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Successfully connect to MongoDB.")
}).catch((error) => {
  console.log("Connection error", error)
})