import React, {useContext,useState}from 'react'
import { useParams } from 'react-router-dom'

import { Movie } from '../../context/context'


const Navigator = () => {
    const params = useParams();
    const param = Number(params.idd?.split('').filter((v)=>Number(v) ))
const [Data, setData] = useContext(Movie)
const Newdat = Data.filter(({id})=>id===param)
    return (
        <div style={{display:'flex'}}>

            <h1 style={{color:'red',textAlign:'center'}}>Navigator {Newdat[0]?.id}</h1>
            <div style={{justifyContent:'center',margin:'100px ' ,boxSizing:'border-box'} } >
                {
                    Newdat.map(({id,text,img,category})=>
                    <>
                    <img key={id} src={img} height='270px'/>
                    <h1 >Text: {text}</h1>
                    <h3>category: {category}</h3>
                    
                    </>

)
}
</div>
        </div>
    )
}

export default Navigator
