const express = require("express") ;
const morgan = require("morgan") ;
const userRouter =require('./routes/users.js')
const app = express();
const PORT = 3000;
app.use(morgan('dev'));
app.use(express.json());//parsear el body de la petición sino req.body es undefined

app.use('/user',userRouter)

app.listen(PORT,()=>console.log('server running on port '+PORT));