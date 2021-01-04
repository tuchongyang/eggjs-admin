// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportLogMessage from '../../../app/service/log/message';
import ExportSystemFile from '../../../app/service/system/file';
import ExportSystemMenu from '../../../app/service/system/menu';
import ExportSystemPermission from '../../../app/service/system/permission';
import ExportSystemReqLog from '../../../app/service/system/req_log';
import ExportSystemRole from '../../../app/service/system/role';
import ExportSystemUser from '../../../app/service/system/user';

declare module 'egg' {
  interface IService {
    log: {
      message: AutoInstanceType<typeof ExportLogMessage>;
    }
    system: {
      file: AutoInstanceType<typeof ExportSystemFile>;
      menu: AutoInstanceType<typeof ExportSystemMenu>;
      permission: AutoInstanceType<typeof ExportSystemPermission>;
      reqLog: AutoInstanceType<typeof ExportSystemReqLog>;
      role: AutoInstanceType<typeof ExportSystemRole>;
      user: AutoInstanceType<typeof ExportSystemUser>;
    }
  }
}
