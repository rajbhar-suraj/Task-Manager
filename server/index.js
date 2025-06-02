require('dotenv').config();

const express = require('express')
const cors = require('cors')
const TaskRoute = require('./router/TaskRoute')
const connectDB = require('./config/db'); // import your mongoose connection


const app = express()
connectDB()

const corsOptions = {
    origin: 'https://task-manager-git-main-suraj-rajbhars-projects.vercel.app/', // exact frontend URL
    credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json());

app.use('/tasks', TaskRoute)

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))