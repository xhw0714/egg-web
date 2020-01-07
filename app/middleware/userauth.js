
module.exports = options => {
  return async function checkAuth(ctx, next) {
    const { logger, request } = ctx
    const userId = ctx.cookies.get('userId', {
      encrypt: true,
    })
    if (userId) {
      const user = ctx.service.admin.index.checkUser(userId)
      if (user != null) {
        await next();
      } else {
        await ctx.redirect('/admin')
      }
    } else {
      await ctx.redirect('/admin')
    } 
  };
};