import express from 'express'
import mongoose from 'mongoose'

import loginRouter from './src/routes/login.js'
import userRouter from './src/routes/user.js'
import questionRouter from './src/routes/question.js'
import feedbackRouter from './src/routes/feedback.js'
import bannerRouter from './src/routes/banner.js'

const app = express();
app.use(express.json());

const DB_URI='mongodb+srv://gagan:ifdHNZMATHECM94g@cluster0.uxby9nn.mongodb.net/'

mongoose.connect(DB_URI).then(()=>console.log('DB connected')).catch((err)=>{
    console.log(err)
})

app.get('/', (req, res) => res.send('ok'));

// Mount the loginRouter on the '/v1/login' path
const baseRoute = '/v1'
app.use(`${baseRoute}/login`, loginRouter);
app.use(`${baseRoute}/user`, userRouter)
app.use(`${baseRoute}/questions`, questionRouter)
app.use(`${baseRoute}/feedback`, feedbackRouter)
app.use(`${baseRoute}/banner`, bannerRouter)

app.listen(8002, () => {
    console.log('Server running on port 8002');
});
