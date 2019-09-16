// const User = require('../models/user.js')
// const Access = require('../models/access')
// const crypto = require('crypto')
const models = require('../models/index')
const User = models.users
const Access= models.access

module.exports.login = async (req,res) => {
    const body = req.body
    res.setHeader('content-type', 'application/json')

    User.findOne({
        where: {
            username: body.username,
            password: body.password  //crypto.createHash('md5').update(body.password).digest('hex')
        },
        include : {
            model : Access
        }
    })
    .then(user => {
        let temp = {
            status : {
                auth : false,
                code : 401,
                message : 'Username or password is wrong!'
            },
            user : user
        }
        let status = temp.status

        if(user0){
            status.auth = true
            status.code = 200
            status.message = 'Logged!'
        }

        return res.send(JSON.stringify(temp))
    })
    .catch(error => { return error })
}