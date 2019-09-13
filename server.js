const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
// const users = require('./models').users
// const access = require('./models').access


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', require('./routes/api'))
app.use(express.static(__dirname+'/files'));

// users.create({
//     username : 'petugas',
//     password : 'petugas123',
//     id_access : 1
// })
// .then(users=>{
//     users.createAccess({
//         access_name : 'petugas'
//     }).then(()=>console.log('Added!'))
// })

app.listen(PORT, ()=>console.log('Server on port 3000'))