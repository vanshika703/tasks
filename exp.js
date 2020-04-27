let express = require('express')
let app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req,res) =>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/submit', (req,res) =>{
    console.log(req.body.name)
    res.end()
})

app.get('*', (req,res) =>{
    res.sendFile(__dirname+'/index.html')
})

app.listen(8000, (err) => {
    if(err) throw err
    console.log('server running on 8000')
})