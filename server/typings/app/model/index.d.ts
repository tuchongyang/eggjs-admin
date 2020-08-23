// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSystemRole from '../../../app/model/SystemRole';
import ExportSystemUser from '../../../app/model/SystemUser';

declare module 'egg' {
  interface IModel {
    SystemRole: ReturnType<typeof ExportSystemRole>;
    SystemUser: ReturnType<typeof ExportSystemUser>;
  }
}
