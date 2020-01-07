"use strict";

const Controller = require("egg").Controller;

class BannerController extends Controller {
  async index() {
    const banners = await this.ctx.service.admin.index.getAllbanner();
  this.logger.info(banners)
    await this.ctx.render("admin/banner.tpl", { banners });
  }

  // async getBanner() {
  //   const banner = await this.ctx.service.admin.index.getBannerById(this.ctx.params.id)
  //   if(banner != null){
  //     await this.ctx.render("exception.tpl", {
  //       message: "添加成功",
  //       goTo: "/admin/article/" + this.ctx.params.id,
  //       urlTitle: "返回文章管理"
  //     });
  //   } else {
  //     await this.ctx.render("exception.tpl", { message: "添加失败" });
  //   }
  // }

  async addbanner() {
    const {
      ctx: { request, service, params }
    } = this;
    this.logger.info(request.body);
    const payload = {
      title: request.body.title,
      image: request.body.image,
      url: request.body.url
    };
    const result = await service.admin.index.addBanner(payload);
    if (result) {
      await this.ctx.render("exception.tpl", {
        message: "添加成功",
        goTo: "/admin/banner",
        urlTitle: "返回幻灯片"
      });
    } else {
      await this.ctx.render("exception.tpl", { message: "添加失败" });
    }
  }

  async postupdatebanner() {
    const {
      ctx: { service, params }
    } = this;
    if (params.id == 0) {
      await this.ctx.render("admin/addbanner.tpl", {
        postUrl: "/admin/banner/add"
      });
    } else {
       const result = await service.admin.index.getBannerById(params.id)
       if(result) {
        await this.ctx.render("admin/addbanner.tpl", { ...result, postUrl: "/admin/banner/update/" + params.id })
       } else {
        await this.ctx.render("exception.tpl", { message: "没有此幻灯片" });
       }
    }
  }
  async updateBanner() {
    const {
      ctx: { request, service, params }
    } = this;
    const payload = {
      id: params.id,
      title: request.body.title,
      image: request.body.image,
      url: request.body.url
    };
    const result = await service.admin.index.updateBanner(payload);
    if (result) {
      await this.ctx.render("exception.tpl", {
        message: "修改成功",
        goTo: "/admin/banner",
        urlTitle: "返回幻灯片"
      });
    } else {
      await this.ctx.render("exception.tpl", { message: "修改失败" });
    }
  }

  async delBanner() {
    const result = await this.ctx.service.admin.index.delBanner(this.ctx.params.id)
    if (result) {
      await this.ctx.render("exception.tpl", {
        message: "删除成功",
        goTo: "/admin/banner",
        urlTitle: "返回幻灯片"
      });
    } else {
      await this.ctx.render("exception.tpl", { message: "删除失败" });
    }
  }
}

module.exports = BannerController;
