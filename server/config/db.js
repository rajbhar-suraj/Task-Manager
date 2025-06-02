const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Todos').then(()=>console.log('db connected')).catch((error)=>console.log('server issue',error))

module.exports = mongoose