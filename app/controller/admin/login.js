'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  async index() {
    await this.ctx.render('admin/login.tpl')
  }

  async login() {
    const { body } = this.ctx.request
   this.app.logger.info(body)
   const users = await this.ctx.service.admin.login.checkUser(body)
   this.logger.info(users)
   if(users != null) {
      this.ctx.cookies.set('userId', String(users.id), {
        httpOnly: true, // 默认就是 true
        encrypt: true, // 加密传输
      })
      this.ctx.redirect('/admin/index')
   } else {
     await this.ctx.render('exception.tpl', { message: '账号或密码错误' })
   }
  }

  async logout() {
    this.ctx.cookies.set('userId', null)
    this.ctx.redirect('/admin')
  }
}

module.exports = LoginController;
