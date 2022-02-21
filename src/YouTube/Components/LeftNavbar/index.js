
import React from 'react'
import {Container, Link} from './styled'
import { SidebarData } from '../utils/sidebar'
import { useLocation } from 'react-router'

const LeftNavbr = () => {
    const loc = useLocation()
    return (
        <div>
           <Container>
               {
                   SidebarData.map(({id,text,path,img})=><Container.Items  B={loc.pathname === path}>
                   <Container.ItemLogo src={img}/>
                       <Link B={loc.pathname === path} to={path}>
                           {text}
                       </Link>
              </Container.Items>
              )
               }
                   </Container>                      
              
        </div>
    )
}

export default LeftNavbr