const mongoose = require('mongoose');
const dbUser = "dbUser";
const dbPass = "delete";
const dbName = "cinema";
const dbUrl = `mongodb+srv://${dbUser}:${dbPass}@cluster0.slqoe.mongodb.net/${dbName}?retryWrites=true&w=majority`;
//const dbUrl = `mongodb+srv://${dbUser}:${dbPass}@cluster0.slqoe.mongodb.net/${dbName}?retryWrites=true&w=majority`;
 
mongoose.connect(dbUrl, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).then(()=> console.log("Conectado a la base de datos"))
  .catch((err)=> console.log("No conectado, error", err))

module.exports = mongoose;
 