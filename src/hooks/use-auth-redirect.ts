import { useEffect, useState } from 'react';

import { useRouter } from 'expo-router';

import { getAccessToken } from '@/lib/secure-storage';

export function useAuthRedirect() {
    const router = useRouter();
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(function checkAuthOnLaunch() {
        getAccessToken()
            .then((token) => {
                if (token) {
                    router.replace('/home');
                }
            })
            .finally(() => setIsCheckingAuth(false));
    }, [router]);

    return { isCheckingAuth };
}
