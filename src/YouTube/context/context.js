import React,{useState,createContext} from 'react'
import { Mock } from '../mock';

export const Movie = createContext();
export const MovieProvider =({children})=>{
const [data, setData] = useState(Mock)
    return(
        <Movie.Provider value={[data, setData]}>
{children}
        </Movie.Provider>
    )
}
