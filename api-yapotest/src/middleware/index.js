const timer = require('./timer');
const cache = require('./cache');
module.exports = app => {
  timer(app);
  cache(app);
};
