const mongoose = require('mongoose');
const dbUser = "dbUser";
const dbPass = "cluster0";
const dbName = "veterinaria";

const dbUrl = `mongodb+srv://${dbUser}:${dbPass}@cluster0.wvjve.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(dbUrl, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).then(()=> console.log("Conectado a la base de datos"))
  .catch((err)=> console.log("No conectado, error", err))

module.exports = mongoose;