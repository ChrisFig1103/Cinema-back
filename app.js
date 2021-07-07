const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
require('dotenv').config();


//Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).then(()=> console.log("Conectado a la base de datos"))
  .catch((err)=> console.log("No conectado, error", err))

//Middleware
app.use(express.json());

//Routes
const billboard = require('./routes/billboard')
const comingSoon = require('./routes/comingSoon')
 
//Use routes
app.use('/billboard',billboard);
app.use('/comingSoon',comingSoon);
 
 
app.listen(PORT, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
  
  