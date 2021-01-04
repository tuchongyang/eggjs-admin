// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogMessage from '../../../app/model/LogMessage';
import ExportSystemFile from '../../../app/model/SystemFile';
import ExportSystemMenu from '../../../app/model/SystemMenu';
import ExportSystemPermission from '../../../app/model/SystemPermission';
import ExportSystemReqLog from '../../../app/model/SystemReqLog';
import ExportSystemRole from '../../../app/model/SystemRole';
import ExportSystemRoleMenu from '../../../app/model/SystemRoleMenu';
import ExportSystemRolePermission from '../../../app/model/SystemRolePermission';
import ExportSystemUser from '../../../app/model/SystemUser';

declare module 'egg' {
  interface IModel {
    LogMessage: ReturnType<typeof ExportLogMessage>;
    SystemFile: ReturnType<typeof ExportSystemFile>;
    SystemMenu: ReturnType<typeof ExportSystemMenu>;
    SystemPermission: ReturnType<typeof ExportSystemPermission>;
    SystemReqLog: ReturnType<typeof ExportSystemReqLog>;
    SystemRole: ReturnType<typeof ExportSystemRole>;
    SystemRoleMenu: ReturnType<typeof ExportSystemRoleMenu>;
    SystemRolePermission: ReturnType<typeof ExportSystemRolePermission>;
    SystemUser: ReturnType<typeof ExportSystemUser>;
  }
}
