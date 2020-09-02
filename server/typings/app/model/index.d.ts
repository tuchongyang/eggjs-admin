// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogMessage from '../../../app/model/LogMessage';
import ExportSystemMenu from '../../../app/model/SystemMenu';
import ExportSystemPermission from '../../../app/model/SystemPermission';
import ExportSystemRole from '../../../app/model/SystemRole';
import ExportSystemRoleMenu from '../../../app/model/SystemRoleMenu';
import ExportSystemRolePermission from '../../../app/model/SystemRolePermission';
import ExportSystemUser from '../../../app/model/SystemUser';

declare module 'egg' {
  interface IModel {
    LogMessage: ReturnType<typeof ExportLogMessage>;
    SystemMenu: ReturnType<typeof ExportSystemMenu>;
    SystemPermission: ReturnType<typeof ExportSystemPermission>;
    SystemRole: ReturnType<typeof ExportSystemRole>;
    SystemRoleMenu: ReturnType<typeof ExportSystemRoleMenu>;
    SystemRolePermission: ReturnType<typeof ExportSystemRolePermission>;
    SystemUser: ReturnType<typeof ExportSystemUser>;
  }
}
