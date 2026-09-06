import { createContext, useContext, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type { Sport } from '../types/sport.types';

interface SelectedSportContextValue {
    selectedSport: Sport | null;
    setSelectedSport: (sport: Sport | null) => void;
}

const SelectedSportContext = createContext<SelectedSportContextValue | null>(null);

export function SelectedSportProvider({ children }: PropsWithChildren) {
    const [selectedSport, setSelectedSport] = useState<Sport | null>(null);

    const value = useMemo(() => ({ selectedSport, setSelectedSport }), [selectedSport]);

    return (
        <SelectedSportContext.Provider value={value}>
            {children}
        </SelectedSportContext.Provider>
    );
}

export function useSelectedSport() {
    const context = useContext(SelectedSportContext);

    if (!context) {
        throw new Error('useSelectedSport must be used within a SelectedSportProvider');
    }

    return context;
}
