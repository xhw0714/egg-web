'use strict';

const Controller = require('egg').Controller;
const moment = require("moment");

class CategoryController extends Controller {
  async cateGory() {
    const categoryies = await this.ctx.service.admin.index.cateGory();
    this.logger.info(categoryies);
    await this.ctx.render("admin/cateGory.tpl", {
      title: "分类管理",
      categoryies
    });
  }
  async addCateGory() {
    if (this.ctx.params.id == 0) {
      await this.ctx.render("admin/addCategory.tpl", {
        pMenu: { id: 0, title: "一级菜单" }
      });
    } else {
      const menu = await this.ctx.service.admin.index.getCategory(
        this.ctx.params.id
      );
      if (menu != null) {
        await this.ctx.render("admin/addCategory.tpl", { pMenu: menu });
      } else {
        await this.ctx.render("exception.tpl", { message: "菜单不存在" });
      }
    }
  }
  async postCategory() {
    const { ctx } = this;
    const { request } = ctx;
    const payload = {
      pid: ctx.params.id,
      createTime: moment().format("YYYY-MM-DD HH:mm:ss"),
      createUserId: ctx.cookies.get("userId"),
      ...request.body
    };
    this.logger.info(payload);
    const result = await ctx.service.admin.index.insertCategory(payload);
    if (result) {
      await this.ctx.render("exception.tpl", {
        message: "添加成功",
        goTo: "/admin/category",
        urlTitle: "返回菜单管理"
      });
    } else {
      await this.ctx.render("exception.tpl", { message: "添加失败" });
    }
  }

  async getCategory() {
    const menu = await this.ctx.service.admin.index.getCategory(
      this.ctx.params.id
    );
    this.logger.info(menu);
    if (menu != null) {
      await this.ctx.render("admin/updateCategory.tpl", { menu });
    } else {
      await this.ctx.render("exception.tpl", { message: "菜单不存在" });
    }
  }

  async updateCategory() {
    const { ctx } = this;
    const { request } = ctx;
    const payload = {
      id: ctx.params.id,
      ...request.body
    };
    this.logger.info(payload);
    const result = await ctx.service.admin.index.updateCategory(payload);
    if (result) {
      await this.ctx.render("exception.tpl", {
        message: "修改成功",
        goTo: "/admin/category",
        urlTitle: "返回菜单管理"
      });
    } else {
      await this.ctx.render("exception.tpl", { message: "修改失败" });
    }
  }

  async delCategory() {
    const result = await this.ctx.service.admin.index.delCategory(
      this.ctx.params.id
    );
    if (result) {
      await this.ctx.render("exception.tpl", {
        message: "删除成功",
        goTo: "/admin/category",
        urlTitle: "返回菜单管理"
      });
    } else {
      await this.ctx.render("exception.tpl", { message: "删除失败" });
    }
  }
}

module.exports = CategoryController;
