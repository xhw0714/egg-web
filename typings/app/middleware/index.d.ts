// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNav = require('../../../app/middleware/nav');
import ExportUserauth = require('../../../app/middleware/userauth');

declare module 'egg' {
  interface IMiddleware {
    nav: typeof ExportNav;
    userauth: typeof ExportUserauth;
  }
}
