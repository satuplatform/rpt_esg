import { createContext } from 'react';

export interface IUser {
  id: string;
  name: string;
  email: string;
  clientId: string;
  timezone: string;
  currency: string;
  language: string;
  company: string;
  country: string;
  role: string;
  create_at: Date;
  update_at: Date;
}
export const UserContext = createContext<IUser | null>(null);
