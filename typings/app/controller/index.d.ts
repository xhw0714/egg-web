// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportUpload = require('../../../app/controller/upload');
import ExportAdminArticle = require('../../../app/controller/admin/article');
import ExportAdminBanner = require('../../../app/controller/admin/banner');
import ExportAdminCategory = require('../../../app/controller/admin/category');
import ExportAdminIndex = require('../../../app/controller/admin/index');
import ExportAdminLogin = require('../../../app/controller/admin/login');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    upload: ExportUpload;
    admin: {
      article: ExportAdminArticle;
      banner: ExportAdminBanner;
      category: ExportAdminCategory;
      index: ExportAdminIndex;
      login: ExportAdminLogin;
    }
  }
}
