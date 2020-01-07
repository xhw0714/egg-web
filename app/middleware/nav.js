
module.exports = options => {
  return async function checkAuth(ctx, next) {
    const nav = await ctx.service.admin.index.cateGory()
    ctx.app.locals = { nav, thisUrl: ctx.request.url }
    await next()
    // ctx.logger.info(ctx.request.url)
    // ctx.logger.info(nav)
  };
};