import React , {useState,createContext} from 'react'

export const CategoryContext = createContext();

export const CategoryContextProvider = ({children})=>{

    const Category =  [
        {
            cat:"All",
            path:"home/category/"
        },{
            cat:"Kino",
            path:"home/category/"
        },{
            cat:"Drama",
            path:"home/category/"
        },{
            cat:"Comedy",
            path:"home/category/"
        },{
            cat:"Cartoon",
            path:"home/category/"
        },{
            cat:"Shou",
            path:"home/category/"
        },
    ]


    const [catt,setCatt] = useState(Category)
    return(
        <CategoryContext.Provider value={[catt,setCatt]}>
                {children}
        </CategoryContext.Provider>
    )
}