const express = require('express'); // Use require for CommonJS modules
const loginRouter = require('./src/routes/login.js'); // Use require for CommonJS modules
const userRouter = require('./src/routes/user.js');
const questionRouter = require('./src/routes/question.js');
const mongoose =  require('mongoose');

const app = express();
app.use(express.json());

const DB_URI='mongodb+srv://gagan:ifdHNZMATHECM94g@cluster0.uxby9nn.mongodb.net/'

mongoose.connect(DB_URI).then(()=>console.log('DB connected')).catch((err)=>{
    console.log(err)
})
console.log('hello')
app.get('/', (req, res) => res.send('ok'));

// Mount the loginRouter on the '/v1/login' path
const baseRoute = '/v1'
app.use(`${baseRoute}/login`, loginRouter);
app.use(`${baseRoute}/user`, userRouter)
app.use(`${baseRoute}/questions`, questionRouter)

app.listen(8002, () => {
    console.log('Server running on port 8002');
});
