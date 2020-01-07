module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/admin', controller.admin.login.index)
  router.post('/admin/login', controller.admin.login.login)
  router.get('/admin/logout', controller.admin.login.logout)
  router.get('/admin/index', middleware.userauth(), controller.admin.index.index)
  router.post('/admin/index/info/:id', middleware.userauth(), controller.admin.index.updateInfo)

  router.get('/admin/category', middleware.userauth(), controller.admin.category.cateGory)
  router.get('/admin/category/add/:id', middleware.userauth(), controller.admin.category.addCateGory)
  router.post('/admin/category/add/:id', middleware.userauth(), controller.admin.category.postCategory)
  router.get('/admin/category/update/:id', middleware.userauth(), controller.admin.category.getCategory)
  router.post('/admin/category/update/:id', middleware.userauth(), controller.admin.category.updateCategory)
  router.get('/admin/category/del/:id', middleware.userauth(), controller.admin.category.delCategory)

  router.get('/admin/article/:id', middleware.userauth(), controller.admin.article.index)
  router.get('/admin/article/add/:id', middleware.userauth(), controller.admin.article.article)
  router.post('/admin/article/add/:id', middleware.userauth(), controller.admin.article.addArticle)
  router.get('/admin/article/update/:id', middleware.userauth(), controller.admin.article.getupdateArticle)
  router.post('/admin/article/update/:id', middleware.userauth(), controller.admin.article.postupdateArticle)
  router.get('/admin/article/del/:id', middleware.userauth(), controller.admin.article.deleteArticle)

  router.get('/admin/banner', middleware.userauth(), controller.admin.banner.index)
  router.get('/admin/banner/:id', middleware.userauth(), controller.admin.banner.postupdatebanner)
  router.get('/admin/banner/del/:id', middleware.userauth(), controller.admin.banner.delBanner)
  router.post('/admin/banner/add/', middleware.userauth(), controller.admin.banner.addbanner)
  router.post('/admin/banner/update/:id', middleware.userauth(), controller.admin.banner.updateBanner)
};