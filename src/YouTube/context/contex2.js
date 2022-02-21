import React,{useState,createContext} from "react";

export const SearchContext = createContext();
export const SearchContextProvider = ({children}) =>{
    const [ser, setSer] = useState()
    return(
        <SearchContext.Provider value={[ser, setSer]}>
            {children}
        </SearchContext.Provider>
    )
}