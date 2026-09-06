import { z } from 'zod';

export const nameSchema = z.string().min(1, 'Full name is required');
export const emailSchema = z.email('Enter a valid email address');
export const passwordSchema = z.string().min(8, 'Password must be at least 8 characters');