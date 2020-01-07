"use strict";

const Controller = require("egg").Controller;

class ArticleController extends Controller {
  async index() {
    const categoryies = await this.ctx.service.admin.index.cateGory();
    const category = await this.ctx.service.admin.index.getCategory(
      this.ctx.params.id
    );
    let articles = null;
    if (this.ctx.params.id == 0) {
      articles = await this.ctx.service.admin.index.getAllArticle();
    } else {
      articles = await this.ctx.service.admin.index.getArticleByCid(
        this.ctx.params.id
      );
    }
    // this.logger.info(categoryies);
    this.logger.info(articles);
    if (categoryies != null) {
      await this.ctx.render("admin/article.tpl", {
        id: this.ctx.params.id,
        categoryies,
        categoryTitle: category != null ? category.title : null,
        categoryType: category != null ? category.type : null,
        articles: articles || []
      });
    } else {
      await this.ctx.render("exception.tpl", {
        message: "请先添加菜单目录",
        goTo: "/admin/category",
        urlTitle: "返回菜单管理"
      });
    }
  }
  
  async article (){
    const category = await this.ctx.service.admin.index.getCategory(
      this.ctx.params.id
    );
    await this.ctx.render("admin/addArticle.tpl", {
      id: this.ctx.params.id,
      categoryTitle: category != null ? category.title : null,
    });
  }

  async addArticle() {
    this.logger.info(this.ctx.request.body)
    const result = await this.service.admin.index.addArticle({ cid: this.ctx.params.id, ...this.ctx.request.body })
    if (result) {
      await this.ctx.render("exception.tpl", {
        message: "添加成功",
        goTo: "/admin/article/" + this.ctx.params.id,
        urlTitle: "返回文章管理"
      });
    } else {
      await this.ctx.render("exception.tpl", { message: "添加失败" });
    }
  }

  async getupdateArticle() {
    const article = await this.ctx.service.admin.index.getArticle(
      this.ctx.params.id
    );
    this.logger.info(article)
    await this.ctx.render("admin/updateArticle.tpl", {
      id: this.ctx.params.id,
      article: article,
    });
  }

  async postupdateArticle() {
    this.logger.info(this.ctx.request.body)
    const result = await this.service.admin.index.updateArticle({ id: this.ctx.params.id, ...this.ctx.request.body })
    if (result) {
      await this.ctx.render("exception.tpl", {
        message: "修改成功",
        goTo: "/admin/article/0",
        urlTitle: "返回文章管理"
      });
    } else {
      await this.ctx.render("exception.tpl", { message: "添加失败" });
    }
  }

  async deleteArticle() {
    const result = await this.service.admin.index.deleteArticle(this.ctx.params.id)
    if (result) {
      await this.ctx.render("exception.tpl", {
        message: "删除成功",
        goTo: "/admin/article/0",
        urlTitle: "返回文章管理"
      });
    } else {
      await this.ctx.render("exception.tpl", { message: "删除失败" });
    }
  }
}

module.exports = ArticleController;
