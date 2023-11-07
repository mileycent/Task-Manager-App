const express = require('express');
const mongoose = require('mongoose')

const app = express();

// const MONGO_URI = process.env.MONGO_URI
// mongoose.connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
// .then((result) => app.listen(5000, console.log('listening on port 5000')))
// .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// routes
app.use(require('./routes/index'))
app.use(require('./routes/todo'))


app.listen(5000, () => console.log('Server started at port 5000'))
