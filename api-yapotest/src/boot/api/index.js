const repositories = require('./repositories');
const auth = require('./yapo');

module.exports = app => {
  app.context.api = {};
  repositories(app);
  auth(app);
};
