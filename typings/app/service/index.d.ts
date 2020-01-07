// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminIndex = require('../../../app/service/admin/index');
import ExportAdminLogin = require('../../../app/service/admin/login');

declare module 'egg' {
  interface IService {
    admin: {
      index: ExportAdminIndex;
      login: ExportAdminLogin;
    }
  }
}
