const mongoose = require('mongoose');
require('dotenv').config();

//Database Connection
mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser:true,
      useCreateIndex:true,
      useUnifiedTopology: true
}).then(()=> console.log("Conectado a la base de datos"))
    .catch((err)=> console.log("No conectado, error", err))


module.exports = mongoose;
 