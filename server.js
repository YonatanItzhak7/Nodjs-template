const express = require('express')
const cors = require('cors')

const app = express();
const port =  3000;

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get('/',(req,res)=>{
    res.send({message:'success'})
})

app.listen(port,()=>{
    console.log(`server listening on port:${port}`);
}) 