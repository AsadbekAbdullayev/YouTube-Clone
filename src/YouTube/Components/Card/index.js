import React,{useState,useContext} from 'react'
import {Container} from './styled'

const Card = ({data}) => {
    return (
        <div>
            <Container>
                <Container.ConImg/>
                <Container.ConTitles>
                    <Container.ConAvatar/>
     <Container.ConTex>
                    <Container.ConTitle>
                        
                    </Container.ConTitle>

                    <Container.ConCategory>
                    LOREM IPSUM 
                    </Container.ConCategory>
                
    </Container.ConTex>

                </Container.ConTitles>
            </Container>
        </div>
    )
}

export default Card

