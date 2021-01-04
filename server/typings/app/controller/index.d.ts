// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogMessage from '../../../app/controller/log/message';
import ExportSystemFile from '../../../app/controller/system/file';
import ExportSystemMenu from '../../../app/controller/system/menu';
import ExportSystemPermission from '../../../app/controller/system/permission';
import ExportSystemReqLog from '../../../app/controller/system/req_log';
import ExportSystemRole from '../../../app/controller/system/role';
import ExportSystemUser from '../../../app/controller/system/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    log: {
      message: ExportLogMessage;
    }
    system: {
      file: ExportSystemFile;
      menu: ExportSystemMenu;
      permission: ExportSystemPermission;
      reqLog: ExportSystemReqLog;
      role: ExportSystemRole;
      user: ExportSystemUser;
    }
  }
}
