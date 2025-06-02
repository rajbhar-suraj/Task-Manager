const express = require('express')
const cors = require('cors')
const TaskRoute = require('./router/TaskRoute')

const app = express()

app.use(cors())
app.use(express.json());

app.use('/tasks',TaskRoute)

const PORT = 5000;

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))