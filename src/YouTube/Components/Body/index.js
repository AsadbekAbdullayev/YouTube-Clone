import React, {useContext} from 'react'
import {ContainerT, Container} from './styled'
import { Movie } from '../../context/context'
import { useNavigate } from 'react-router'
import {SearchContext} from '../../context/contex2'



const Body = ()=>{
    const [Data, setData] = useContext(Movie)
const [ser, setSer] = useContext(SearchContext)
    const navigate = useNavigate();
    return(
        <div>
        {
            ser ? <ContainerT>{   
                Data.map(({text,category,img ,id})=>text.toLowerCase().includes(ser) && 
                
               
                <Container key={id} onClick={()=>navigate(`/home/:${id}`)}>
                <Container.ConImg >
                <img style={{width:'253px',
height:'186px'}} src={img}/>
                </Container.ConImg >
                <Container.ConTitles>
                    <Container.ConAvatar/>
     <Container.ConTex>
                    <Container.ConTitle>
                        {text}
                    </Container.ConTitle>

                    <Container.ConCategory>
                    {category}
                    </Container.ConCategory>
                
    </Container.ConTex>

                </Container.ConTitles>
            </Container>
                )
            }
                </ContainerT>
            
            :<ContainerT>{   
                Data.map(({text,category,img ,id,avatar,path})=>
                <div key={id}> 
                    <Container  onClick={()=>navigate(`/home/:${id}`)}>
                            <Container.ConImg >
                            <img style={{width:'253px',
            height:'186px'}} src={img}/>
                            </Container.ConImg >
                            <Container.ConTitles>
                                <Container.ConAvatar src={avatar}/>
                 <Container.ConTex>
                                <Container.ConTitle>
                                    {text}
                                </Container.ConTitle>
            
                                <Container.ConCategory>
                                {category}
                                </Container.ConCategory>
                            
                </Container.ConTex>
            
                            </Container.ConTitles>
                        </Container>
                </div>
                )
            }
                </ContainerT>

        }


     
           
        </div>
    )
}

export default Body;