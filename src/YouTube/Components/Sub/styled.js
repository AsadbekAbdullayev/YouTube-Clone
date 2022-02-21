import styled from 'styled-components'
import {ReactComponent as avatar} from '../../Assets/avatar.svg';


export const Container  = styled.div`
width:253px;
height:270px;
margin: 10px 9px;
:hover{
    background: rgba(255, 255, 255, 0.2);
}
`

Container.ConImg = styled.div`
width:253px;
height:186px;
background-size: cover;

`
Container.ConTitles = styled.div`
width:253px;
height:40px;
display:flex;
justify-content: flex-start ;
align-items: center;
margin:7px 0;
`

Container.ConTex = styled.div`
width:210px;
height:80px;
margin:30px 0 0 0;
`
Container.ConTitle = styled.div`
width:210px;
height:40px;
color: #FFFFFF;
font-family: sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;        

`
Container.ConAvatar = styled(avatar)`
width:36px;
height:36px;
margin:0 15px 0 0;

`
Container.ConCategory = styled.div`
font-family: sans-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: rgba(255, 255, 255, 0.6);
margin: 10px 0 0 0
`





export const ContainerT = styled.div `
width:1126px;
background-color:rgb(20, 19, 19);
height:539px;
display:flex;
justify-content: flex-start;
align-items: flex-start;
flex-wrap:wrap;
box-sizing:border-box;
padding:10px;
overflow: scroll;
`
