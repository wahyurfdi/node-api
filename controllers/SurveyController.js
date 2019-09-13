const models = require('../models/index')
const Pemohon = models.pemohon
const Penugasan = models.penugasan
const Files = models.files
const Persetujuan = models.persetujuan

module.exports.getSurvey = async (req,res) => {
    const id_petugas = req.params.id
    res.setHeader('content-type', 'application/json')

    Penugasan.findAll({
        include : {
            model : Pemohon
        },
        where : {
            id_petugas : id_petugas
        }
    })
    .then(list => {
        res.send(JSON.stringify({
            status : {
                code : 200,
                message : 'Load data successed!'
            },
            pemohon : getList(list)
        }))
    })
    .catch(error => { res.send(JSON.stringify(error)) })
}

module.exports.getFilesPemohon = async (req,res) => {
    res.setHeader('content-type', 'application/json')
    
    const id_pemohon = req.params.id
    let temp = {
        status : {
            error : false,
            message : ''
        },
        files_pemohon : []
    }
    
    let status = temp.status

    Files.findAll({
        where : {
            id_pemohon : id_pemohon,
        }
    })
    .then(files => {
        status.message = 'Load data successed!'
        temp.files_pemohon = getFiles(files)

        res.send(JSON.stringify(temp))
    })
    .catch(err => {
        return res.send(err)
    })
}

module.exports.getPersetujuan = async (req,res) => {
    res.setHeader('content-type', 'application/json')

    const id_pemohon = req.params.id
    Persetujuan.findAll({
        where : {
            id_pemohon : id_pemohon
        }
    })
    .then(persetujuan => {
        res.send(JSON.stringify({
            status : {
                error : false,
                message : 'Load data successed!'
            },
            persetujuan : persetujuan
        }))
    })
    .catch(err => res.send(JSON.stringify(err)))
}

module.exports.updatePersetujuan = async (req,res) => {
    res.setHeader('content-type', 'application/json')
    const id_pemohon = req.params.id
    const body = req.body
    const temp = {
        status : {
            error : false,
            message : ''
        }
    }
    const status = temp.status

    Persetujuan.update(
        {
            persetujuan1 : body.persetujuan1,
            persetujuan2 : body.persetujuan2,
            persetujuan3 : body.persetujuan3,
            persetujuan4 : body.persetujuan4,
        },
        {
            where : {
                id_pemohon : id_pemohon
            }
        }
    )
    .then(persetujuan => {
        if(persetujuan[0] == true){ //Update
            status.message = 'Updated!'
            return res.send(JSON.stringify(temp))
        }else{
            status.error = true
            status.message = 'Update failed!'
            return res.send(JSON.stringify(temp))
        }
    })
    .catch(err => res.send(JSON.stringify(err)))
}

function getList(list){
    let temp = []
    
    for(let i=0;i<list.length;i++){
        temp[i] = list[i].pemohon
    }

    return temp
}

function getFiles(files){
    let temp = []
    const link = 'https://api-pkbl.herokuapp.com'


    for(let i=0;i<files.length;i++){
        temp[i] = {
            id_pemohon : files[i].id_pemohon,
            filename : files[i].filename,
            url : link+'/'+files[i].filename
        }
    }
    
    return temp
}