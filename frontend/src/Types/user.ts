export enum Role {
  admin = 'admin',
}

export interface User {
  id: number
  role: Role
  name: string
  email: string
}
