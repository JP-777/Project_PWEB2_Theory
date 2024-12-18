/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [isSearching, setIsSearching] = useState(false);

    return (
        <SearchContext.Provider value={{ isSearching, setIsSearching }}>
            {children}
        </SearchContext.Provider>
    );
}