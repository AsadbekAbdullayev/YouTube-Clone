import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.div`
width:1126px;
height:60px;
background: #212121;
display:flex;
border-top: 1px solid rgba(255, 255, 255, 0.2);
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
justify-content: center;
align-items: center;
`
export const NavLink = styled(Link)`
color: ${({B})=>B ? '#000' : '#fff'};

`

Container.btn = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
display:flex;
color: ${({B})=>B ? '#000' : '#fff'};
font-size: 14px;
line-height: 20px;
background: ${({B})=>B ? '#fff' : 'rgba(255, 255, 255, 0.2)'};
border: 1px solid rgba(255, 255, 255, 0.4);
border-radius: 30px;
padding: 5px 12px;
justify-content: center;
align-items: center;
margin:0 20px;
:hover{
background: rgb(153, 140, 140);
color: red;
}
`