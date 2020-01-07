"use strict";

const Service = require("egg").Service;
const moment = require("moment")

class IndexService extends Service {
  async getWebInfo () {
    return await this.app.mysql.get("webinfo", { id: 1 })
  }
  async updateInfo(payload) {
    return await this.app.mysql.update('webinfo', payload)
  }
  async checkUser(id) {
    return await this.app.mysql.get("user", { id });
  }
  async cateGory() {
    let categories = await this.app.mysql.select("category");
    if (categories != null) {
      categories.forEach(e => {
        categories.forEach(e1 => {
          if (e.pid === e1.id) {
            if (e1.children) {
              e1.children.push(e);
            } else {
              e1.children = [e];
            }
          }
        });
      });
      categories = categories.filter(e => e.pid === 0);
    }
    return categories;
  }
  async getCategory(id) {
    return await this.app.mysql.get("category", { id });
  }
  async getCategoryByPid(pid) {
    return await this.app.mysql.select("category", { where: { pid } });
  }
  async insertCategory(payload) {
    return await this.app.mysql.insert("category", payload);
  }
  async updateCategory(payload) {
    return await this.app.mysql.update("category", payload);
  }
  async delCategory(id) {
    return await this.app.mysql.delete("category", { id });
  }
  async getAllArticle(payload = {}) {
    const articles = await this.app.mysql.select("article", payload);
    if (articles != null) {
      for (const e of articles) {
        const category = await this.getCategory(e.cid);
        if (category != null) {
          e.category = category.title
          e.createTime = moment(e.createTime).format('YYYY-MM-DD HH:mm:ss')
        }
      }
    }
    return articles;
  }

  async getArticleByCid(id) {
    const articles = await this.app.mysql.select("article", {
      where: { cid: id }
    });
    if (articles != null) {
      for (const e of articles) {
        const category = await this.getCategory(e.cid);
        if (category != null) {
          e.category = category.title
          e.createTime = moment(e.createTime).format('YYYY-MM-DD HH:mm:ss')
        }
      }
    }
    return articles;
  }

  async addArticle(payload) {
    this.logger.info(payload)
    const result = await this.app.mysql.insert('content', { content: payload.content })
    const data = {
      cid: payload.cid,
      thumb: payload.thumb,
      title: payload.title,
      des: payload.des,
      aid: result.insertId,
      createTime: this.app.mysql.literals.now
    }
    return await this.app.mysql.insert('article', data)
  }

  async getContent(id) {
    return await this.app.mysql.get("content", { id });
  }

  async getArticle(id) {
    const article = await this.app.mysql.get('article',{ id })
    if(article != null) {
      const category = await this.getCategory(article.cid)
      const content = await this.getContent(article.aid)
      article.category = category != null ? category.title : null
      article.content = content != null ? content.content : null
      article.createTime = moment(article.createTime).format('YYYY-MM-DD HH:mm:ss')
    }
    return article
  }

  async updateArticle (payload) {
    const result = await this.app.mysql.update('content', { content: payload.content, id: payload.aid })
    const data = {
      id: payload.id,
      thumb: payload.thumb,
      title: payload.title,
      des: payload.des
    }
    return await this.app.mysql.update('article', data)
  }

  async deleteArticle (id) {
    const article = await this.app.mysql.get('article', {id })
    await this.app.mysql.delete('content', { id: article.aid })
    return await this.app.mysql.delete("article", { id });
  }

  async getAllbanner () {
    return await this.app.mysql.select('banner')
  }
  async addBanner(payload) {
    return await this.app.mysql.insert('banner', payload)
  }
  async getBannerById(id) {
    return await this.app.mysql.get('banner', { id })
  }
  async updateBanner(payload) {
    return await this.app.mysql.update('banner', payload)
  }
  async delBanner(id) {
    return await this.app.mysql.delete('banner', {id})
  }
}

module.exports = IndexService;
