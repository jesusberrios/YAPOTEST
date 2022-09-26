const NodeCache = require('node-cache')
const cache = new NodeCache()

module.exports = app => {
  app.use(async({request, response}, next) => {
    const cacheKey = request.header.name || 'no-key'
    if(cache.has(cacheKey)){
      response.body = cache.get(cacheKey)
      response.set('X-Cache-id', `${cacheKey}`);
      response.set('X-Cache-ttl', `${cache.getTtl(cacheKey)}`);
    }
    await next();
    cache.set(cacheKey, response.body, 3600)
  });

};
