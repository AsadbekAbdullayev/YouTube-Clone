import React,{useState,useContext} from 'react'
import {Container,NavLink} from './styled'
import { CategoryContext } from '../../context/category'
import {useParams,useLocation } from 'react-router-dom'
import '../LeftNavbar/styled.css'
const Navbar = () => {
const loc = useLocation()
    const [Data, setDate] = useContext(CategoryContext)
    const param = useParams()
    console.log(loc.pathname);
    return (
        <div>
            <Container> 
                    {
                        Data.map(({path,cat},i)=>
                <Container.btn key={i} B={loc.pathname === `/home/category/:${cat}`} >
                    <NavLink style={{fontWeight: '500',
fontSize: '17px',
lineHeight: '20px',
textDecoration:'none'
}}  B={loc.pathname === `/home/category/:${cat}`}     to={`${path}:${cat}`}  >
                        {cat}
                        </NavLink>
                </Container.btn>
                        )         
                    }
            </Container>
        </div>
    )
}

export default Navbar