const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./src/config/dbConfig');
const auth = require('./src/routes/auth');
const ticket = require('./src/routes/ticket');
const user = require('./src/routes/usersRoutes');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", auth)
app.use("/api/v1/user", user)
app.use("/api/v1/ticket", ticket)


const port = 1000
app.listen(port, async()=>{
    await connectDb()
    console.log(`Server running on ${port}`);
})