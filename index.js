const express = require('express');
const app = express();
const port = process.env.PORT || 4000 ;
const cors = require('cors');
const connectionWithMongoose = require('./config/config');
const userRoute = require('./routers/userRouter')


app.use(cors())

app.use(express.json())

connectionWithMongoose()

app.use('/task/our-user' , userRoute)




app.listen(port)






