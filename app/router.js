'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/page/:id', controller.home.page);
  router.get('/category/:id', controller.home.category);
  router.get('/produce/:id', controller.home.article);
  router.post('/upload', controller.upload.upload)
  require('./router/admin')(app)
};
