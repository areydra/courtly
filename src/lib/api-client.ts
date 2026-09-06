import { fetch } from 'expo/fetch';

import { getAccessToken } from './secure-storage';

export interface ApiErrorBody {
    statusCode: number;
    code: string;
    message: string;
    timestamp: string;
    path: string;
}

export class ApiError extends Error {
    statusCode: number;
    code: string;
    timestamp: string;
    path: string;

    constructor(body: ApiErrorBody) {
        super(body.message);
        this.statusCode = body.statusCode;
        this.code = body.code;
        this.timestamp = body.timestamp;
        this.path = body.path;
    }
}

export async function apiRequest<TResponse>(path: string, options?: RequestInit): Promise<TResponse> {
    const token = await getAccessToken();

    const response = await fetch(`${process.env.EXPO_PUBLIC_API_BASE_URL}${path}`, {
        ...options,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options?.headers,
        },
    });

    const body = await response.json();

    if (!response.ok) {
        throw new ApiError(body as ApiErrorBody);
    }

    return body as TResponse;
}
