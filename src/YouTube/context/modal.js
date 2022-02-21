import React, {createContext,useState} from "react";
export const Modale = createContext();
export const ModaleProvider = ({children})=>{
    const [modal,setModal] = useState(false)
    return(
        <Modale.Provider value={[modal,setModal]}>
{children}
        </Modale.Provider>
    )
}