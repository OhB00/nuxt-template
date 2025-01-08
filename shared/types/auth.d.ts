import { type PublicUser } from '../../server/utils/user';

declare module '#auth-utils' {
    interface User extends PublicUser {}
  
    interface UserSession {}
  
    interface SecureSessionData {}
}
  
export {}