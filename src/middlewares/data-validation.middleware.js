const projects = require('../projects')

const validateData = (req, res, next) =>{
    const { id, title } = req.body

    if(!id || !title){
        return res.send("No id or Title");
    }

    return next();
};

const validateUniqueId = (req, res, next) =>{
    const { id } = req.params
    const project = projects.find(res=> res.id === id)
    if(!project){
        return res.send({message: 'project not found'})
    }
    return next()
} 

module.exports = {
    validateData,
    validateUniqueId
}