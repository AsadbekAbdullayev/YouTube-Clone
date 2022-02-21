import React ,{useState,useContext}from 'react'
import {useParams} from 'react-router-dom';
import { CategoryContext } from '../../context/category';
import { Movie } from '../../context/context'
import {ContainerT,Container} from './styled';


const Sub = () => {
  const [catt,setCatt] = useContext(CategoryContext)
  const [Data, setData] = useContext(Movie)

    const params = useParams()
    const param = params?.category?.split(":")
    // const p = param[1]

    return (
        <div>

         {param ?   
        <div>
        
            <ContainerT> 
                
            {   
                Data.map(({text,category,img ,id,isActive,path})=>param[1]==="All" && 
                <Container key={id} >
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

{   
                Data.map(({text,category,img ,id,isActive,path})=>param[1]===category && 
                <Container key={id} >
                <Container.ConImg >
                <img style={{width:'253px',
height:'186px'}} src={img}/>
                </Container.ConImg >category
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

                </div>
                :<div>
                    <input type='file'/>
                     <h1>Subscribe</h1>
                     </div>
                }
                </div>

    )}

    
export default Sub
