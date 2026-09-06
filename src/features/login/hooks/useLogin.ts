import { useMutation } from '@tanstack/react-query';

import { apiRequest, ApiError } from '@/lib/api-client';
import { setAccessToken } from '@/lib/secure-storage';
import { useUserStore } from '@/stores/useUserStore';

import type { LoginPayload, LoginResponse } from '../types/login.types';

export function useLogin() {
    return useMutation<LoginResponse, ApiError, LoginPayload>({
        mutationFn: (payload) =>
            apiRequest<LoginResponse>('/v1/auth/login', {
                method: 'POST',
                body: JSON.stringify(payload),
            }),
        onSuccess: (data) => {
            setAccessToken(data.accessToken);
            useUserStore.getState().setUser({ name: data.user.name, email: data.user.email });
        },
    });
}
