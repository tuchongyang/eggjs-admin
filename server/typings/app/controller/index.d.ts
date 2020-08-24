// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportSystemMenu from '../../../app/controller/system/menu';
import ExportSystemRole from '../../../app/controller/system/role';
import ExportSystemUser from '../../../app/controller/system/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    system: {
      menu: ExportSystemMenu;
      role: ExportSystemRole;
      user: ExportSystemUser;
    }
  }
}
