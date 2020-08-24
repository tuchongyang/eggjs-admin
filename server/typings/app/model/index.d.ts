// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSystemMenu from '../../../app/model/SystemMenu';
import ExportSystemRole from '../../../app/model/SystemRole';
import ExportSystemRoleMenu from '../../../app/model/SystemRoleMenu';
import ExportSystemUser from '../../../app/model/SystemUser';

declare module 'egg' {
  interface IModel {
    SystemMenu: ReturnType<typeof ExportSystemMenu>;
    SystemRole: ReturnType<typeof ExportSystemRole>;
    SystemRoleMenu: ReturnType<typeof ExportSystemRoleMenu>;
    SystemUser: ReturnType<typeof ExportSystemUser>;
  }
}
