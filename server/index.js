const express = require('express')
const cors = require('cors')
const TaskRoute = require('./router/TaskRoute')
require('dotenv').config();
const connectDB = require('./config/db'); // import your mongoose connection

const app = express()
connectDB()
app.use(cors())
app.use(express.json());

app.use('/tasks',TaskRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))