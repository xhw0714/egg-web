"use strict";

const Controller = require("egg").Controller;

class IndexController extends Controller {
  async index() {
    const result = await this.ctx.service.admin.index.getWebInfo()
    // this.logger.info(result)
    if(result != null) {
      await this.ctx.render("admin/index.tpl", { title: "后台管理", info: result });
    }else {
      await this.ctx.render("admin/index.tpl", { title: "后台管理" });
    }
  }

  async updateInfo() {
    const payload = { id: this.ctx.params.id, ...this.ctx.request.body }
    this.logger.info(payload)
    const result = await this.ctx.service.admin.index.updateInfo(payload)
    if (result) {
      this.ctx.app.locals = { webinfo : payload }
      await this.ctx.render("exception.tpl", {
        message: "修改成功",
        goTo: "/admin/index",
        urlTitle: "返回"
      });
    } else {
      await this.ctx.render("exception.tpl", { message: "修改失败" });
    }
  }
}

module.exports = IndexController;
