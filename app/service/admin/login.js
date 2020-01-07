'use strict';

const Service = require('egg').Service;
const md5 = require('md5')

class LoginService extends Service {
  async checkUser(body) {
  return await this.app.mysql.get('user', { username: body.username, password: md5(body.password) })
  }
}

module.exports = LoginService;
