const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());

//Routes
const billboard = require('./routes/billboard')
const comingSoon = require('./routes/comingSoon')
 
//Use routes
app.use('/',billboard);
app.use('/comingSoon',comingSoon);
 
 
app.listen(PORT, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
  
  