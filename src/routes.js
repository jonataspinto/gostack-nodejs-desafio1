const { Router } = require('express');

const { validateData } = require('./middlewares/data-validation.middleware')

const routes = Router()

const projects = [
    {
        id: 1,
        title: "Novo Projeto",
        tasks: []
    }
]

routes.post('/projects', validateData, (req, res)=>{

    projects.push(req.body)

    return res.json(projects)
})

routes.get('/projects', (req, res)=>{
    return res.json(projects)
})

routes.put('/projects/:id', ()=>{

})


module.exports = routes