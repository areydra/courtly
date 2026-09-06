import * as SecureStore from 'expo-secure-store';

const ACCESS_TOKEN_KEY = 'access_token';

export function getAccessToken() {
    return SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
}

export function setAccessToken(token: string) {
    return SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
}

export function deleteAccessToken() {
    return SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
}
