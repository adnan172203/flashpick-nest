import { Role } from '../../user-management/enums/role.enum';

export interface ActiveUserData {
  /** user id */
  sub: string;
  /** user email */
  email: string;
  /** user role */
  role: Role;
  /** user permissions */
  // permissions: PermissionType[];
}
