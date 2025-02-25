const express = require('express');
const app = express();
const port = process.env.PORT || 4500;
const cors = require('cors');
const connectionWithMongoose = require('./config/config');
const userRoute = require('./routers/userRouter');
const taskRoute = require('./routers/taskRouter'); 

app.use(cors());

app.use(express.json());

connectionWithMongoose();

app.use('/task/our-user', userRoute);
app.use('/task', taskRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
