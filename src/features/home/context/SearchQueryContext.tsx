import { createContext, useContext, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

interface SearchQueryContextValue {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchQueryContext = createContext<SearchQueryContextValue | null>(null);

export function SearchQueryProvider({ children }: PropsWithChildren) {
    const [searchQuery, setSearchQuery] = useState('');

    const value = useMemo(() => ({ searchQuery, setSearchQuery }), [searchQuery]);

    return (
        <SearchQueryContext.Provider value={value}>
            {children}
        </SearchQueryContext.Provider>
    );
}

export function useSearchQuery() {
    const context = useContext(SearchQueryContext);

    if (!context) {
        throw new Error('useSearchQuery must be used within a SearchQueryProvider');
    }

    return context;
}
