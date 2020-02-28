const projects = require('../projects');

const reqCount = require('../reqCount');

const validateData = (req, res, next) => {
  const { id, title } = req.body;

  if (!id || !title) {
    return res.send("No id or Title");
  }

  return next();
};

const validateUniqueId = (req, res, next) => {
  const { id } = req.params;
  const project = projects.find(res => res.id === id);
  if (!project) {
    return res.send({ message: 'project not found' });
  }
  return next();
};

const count = (req, res, next) => {
  const { count } = reqCount;
  const newValue = count + 1;
  reqCount.count = newValue;
  console.log(`number of requests: ${reqCount.count}`);
  next();
};

module.exports = {
  validateData,
  validateUniqueId,
  count
};