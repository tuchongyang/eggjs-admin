// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRequireLogin from '../../../app/middleware/requireLogin';

declare module 'egg' {
  interface IMiddleware {
    requireLogin: typeof ExportRequireLogin;
  }
}
