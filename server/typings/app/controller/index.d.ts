// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogMessage from '../../../app/controller/log/message';
import ExportSystemMenu from '../../../app/controller/system/menu';
import ExportSystemRole from '../../../app/controller/system/role';
import ExportSystemUser from '../../../app/controller/system/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    log: {
      message: ExportLogMessage;
    }
    system: {
      menu: ExportSystemMenu;
      role: ExportSystemRole;
      user: ExportSystemUser;
    }
  }
}
