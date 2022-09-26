module.exports = app => {
  app.use(async({ httpRequestDuration, request, response, params, state }, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    response.set('X-Response-Time', `${ms}ms`);

  });

};
