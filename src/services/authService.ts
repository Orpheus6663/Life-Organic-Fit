/*import { apiFetch } from './api';

export type RegisterInput = { name: string; phone: string; email: string; password: string };
export type RegisteredUser = Omit<RegisterInput, 'password'> & { id: number };

export function registerUser(input: RegisterInput) {
  return apiFetch<{ user: RegisteredUser }>('/auth/register', { body: JSON.stringify(input), method: 'POST' });
}
*/