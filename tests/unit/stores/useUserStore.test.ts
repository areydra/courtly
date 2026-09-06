import { useUserStore } from '@/stores/useUserStore';

describe('useUserStore', () => {
    beforeEach(() => {
        useUserStore.setState({ name: null, email: null });
    });

    it('setUser updates both name and email', () => {
        useUserStore.getState().setUser({ name: 'Jordan Lee', email: 'jordan@email.com' });

        expect(useUserStore.getState().name).toBe('Jordan Lee');
        expect(useUserStore.getState().email).toBe('jordan@email.com');
    });

    it('clearUser resets name and email to null', () => {
        useUserStore.getState().setUser({ name: 'Jordan Lee', email: 'jordan@email.com' });

        useUserStore.getState().clearUser();

        expect(useUserStore.getState().name).toBeNull();
        expect(useUserStore.getState().email).toBeNull();
    });
});
