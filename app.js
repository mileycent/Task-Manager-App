const express = require('express');
const mongoose = require('mongoose')


const app = express();



app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// routes
app.use(require('./routes/index'))
app.use(require('./routes/todo'))
app.use(express.static('public'))


// app.listen(5000, () => console.log('Server started at port 5000'))
const MONGO_URI = 'mongodb+srv://ashton:kutcher@clustercheckpoint3.67g5hl6.mongodb.net/taskmainretryWrites=true&w=majority'
mongoose.connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(5000, console.log('listening on port 5000')))
.catch((err) => console.log(err));
