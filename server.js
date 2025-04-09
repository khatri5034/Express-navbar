const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express();

//middleware to servve static content
app.use(express.static(path.join(__dirname,'public')))
app.get('/typesetting',(req,res)=>{
    res.redirect('https://github.com/khatri5034/Typesetting.git')
})
app.get('/climateCrisis',(req,res)=>{
    res.redirect('https://github.com/khatri5034/ClimateCrisis.git')
})
app.get('/fourAlgorigthm',(req,res)=>{
    res.redirect('https://github.com/khatri5034/Sorting.git')
})
const PORT= 3000|| process.env.PORT

//add moran logger as a middleware 
app.use(morgan('tiny'))
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})