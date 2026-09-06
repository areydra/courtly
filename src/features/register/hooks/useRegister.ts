import { useMutation } from '@tanstack/react-query';

import { apiRequest, ApiError } from '@/lib/api-client';
import { setAccessToken } from '@/lib/secure-storage';
import { useUserStore } from '@/stores/useUserStore';

import type { RegisterPayload, RegisterResponse } from '../types/register.types';

export function useRegister() {
    return useMutation<RegisterResponse, ApiError, RegisterPayload>({
        mutationFn: (payload) =>
            apiRequest<RegisterResponse>('/v1/auth/register', {
                method: 'POST',
                body: JSON.stringify(payload),
            }),
        onSuccess: (data) => {
            setAccessToken(data.accessToken);
            useUserStore.getState().setUser({ name: data.user.name, email: data.user.email });
        },
    });
}
