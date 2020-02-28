const { Router } = require('express');

const { 
  validateData,
  validateUniqueId,
  count
} = require('./middlewares/data-validation.middleware');

const routes = Router();

const projects = require('./projects');

routes.post('/projects', count, validateData, (req, res) => {
  projects.push(req.body);
  return res.json(projects);
});

routes.get('/projects', count, (req, res) => {
  return res.json(projects);
});

routes.put('/projects/:id', count, validateUniqueId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(res => res.id === id);
  project.title = title;
  return res.json(projects);
});

routes.delete('/projects/:id', count, validateUniqueId, (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex(res => res.id == id);
  projects.splice(index, 1);
  return res.json(projects);
});

routes.post('/projects/:id/tasks', count, validateUniqueId, (req, res) => {
  const { id } = req.params;
  const { newTask } = req.body;
  const project = projects.find(res => res.id === id);
  project.tasks.push(newTask);
  return res.send(projects);
});

module.exports = routes