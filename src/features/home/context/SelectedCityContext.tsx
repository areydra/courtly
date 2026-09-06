import { createContext, useContext, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

interface SelectedCityContextValue {
    selectedCity: string | null;
    setSelectedCity: (city: string | null) => void;
}

const SelectedCityContext = createContext<SelectedCityContextValue | null>(null);

export function SelectedCityProvider({ children }: PropsWithChildren) {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    const value = useMemo(() => ({ selectedCity, setSelectedCity }), [selectedCity]);

    return (
        <SelectedCityContext.Provider value={value}>
            {children}
        </SelectedCityContext.Provider>
    );
}

export function useSelectedCity() {
    const context = useContext(SelectedCityContext);

    if (!context) {
        throw new Error('useSelectedCity must be used within a SelectedCityProvider');
    }

    return context;
}
