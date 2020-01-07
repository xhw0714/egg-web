'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const banners = await ctx.service.admin.index.getAllbanner()
    const newProduce = await ctx.service.admin.index.getAllArticle({ limit: 3 })
    await ctx.render('index/index.tpl',{ banners, newProduce })
  }

  async page() {
    const { ctx } = this
    const pageContent = await ctx.service.admin.index.getCategory(ctx.params.id)
    let categories = await this.getSubCategories(pageContent)
    if (categories.length > 0 && pageContent.pid == 0) {
      if (categories[0].type == 2) {
        await ctx.redirect('/page/' + categories[0].id)
      } else {
        await ctx.redirect('/category/' + categories[0].id)
      } 
    }
    this.logger.info(pageContent)
    this.logger.info(categories)
    const pid = await this.getParentId(ctx.params.id)
    await ctx.render('index/page.tpl', { pageContent, pid, subCategories: categories.length > 0 ? categories : null })
  }

  async category() {
    const { ctx } = this
    const pageContent = await ctx.service.admin.index.getCategory(ctx.params.id)
    let articles = []
    if(pageContent != null) {
      articles = await ctx.service.admin.index.getArticleByCid(pageContent.id)
    }
    let categories = await this.getSubCategories(pageContent)
    if (categories.length > 0 && pageContent.pid == 0) {
      if (categories[0].type == 2) {
        await ctx.redirect('/page/' + categories[0].id)
      } else {
        await ctx.redirect('/category/' + categories[0].id)
      } 
    }
    const pid = await this.getParentId(ctx.params.id)
    await ctx.render('index/category.tpl', { pageContent, pid, subCategories: categories.length > 0 ? categories : null, articles })
  }

  async article() {
    const { ctx } = this
    const article = await ctx.service.admin.index.getArticle(ctx.params.id)
    const pageContent = await ctx.service.admin.index.getCategory(article.cid)
    const pid = await this.getParentId(pageContent.id)
    this.logger.info(article)
    await ctx.render('index/article.tpl', { pageContent, pid, article })
  }

  async getSubCategories(payload) {
    if (payload != null) {
      if (payload.pid != 0){
        return await this.ctx.service.admin.index.getCategoryByPid(payload.pid)
      } else {
        return await this.ctx.service.admin.index.getCategoryByPid(payload.id)
      }
    }
  }

  async getParentId(id) {
    const { ctx } = this
    const item =  await ctx.service.admin.index.getCategory(id)
    if (item.pid != 0) {
      return await this.getParentId(item.pid)
    } else {
      return item.id
    }
  }
}

module.exports = HomeController;
