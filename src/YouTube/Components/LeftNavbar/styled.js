import styled from "styled-components";
import { NavLink  } from 'react-router-dom';



export const Container = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 240px;
height: 600px;
left: 0px;
top: 0px;
background: #212121;

`
export const Navlink = styled(NavLink)` 
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;
color: #fff;
`


Container.Items = styled.div`
width: 240px;
height: 40px;
display:flex;
justify-content:flex-star;
font-family:sans-serif;
align-items:center;
background:${({B})=>B ? 'rgba(255, 255, 255, 0.2)' : '#212121'};
background: #212121;
margin: 5px 0 10px 0;
:hover{
    background: rgba(255, 255, 255, 0.2);

}

`
Container.ItemLogo = styled.img`
width: 20px;
height: 20px;
margin:0 20px;
`

export const Link = styled(NavLink)`
font-family: sans-serif;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;
text-decoration:none;
color: ${({B}) =>B ? 'red' :'white'};
`
Container.line = styled.div`
width: 240px;
height: 0px;
margin:10px 0;
border: 1px solid rgba(255, 255, 255, 0.2);`


