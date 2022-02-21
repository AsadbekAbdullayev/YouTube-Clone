import styled from "styled-components";
import {ReactComponent as bell} from '../../Assets/guide.svg';
import {ReactComponent as logo} from '../../Assets/logo.svg';
import {ReactComponent as You} from '../../Assets/You.svg';
import {ReactComponent as search} from '../../Assets/search.svg';


export const Container = styled.div`
width: 100%;
height: 56px;
background: #212121;
display:flex;
align-items:center;
`

Container.LogoBtn = styled.button`
background: #212121;
border:none;
outline:none;
margin: 0 30px 0 15px;
width:40px;
height:40px;
border-radius:50%;

:hover{
    background: rgba(255, 255, 255, 0.2);
    color: red;
}
`
Container.Btns = styled(bell)`
width:30px;
height:30px;
`
Container.Logo = styled(logo)`
width:35px;
height:35px;
`
Container.LogoYou = styled(You)`
height:40px;
`
Container.Search = styled.div`
width:650px;
height:35px;
margin:0 0  0 200px;
display:flex;
`
Container.SearchArea = styled.input`
width:570px;
height:35px;
/* White/20 */
border: 1px solid rgba(255, 255, 255, 0.2);
box-sizing: border-box;
border-radius: 2px 0px 0px 2px;
::placeholder{
    text:333;
}
`
Container.Sa = styled.div`
border-radius: 0px 2px 2px 0px;
display:flex;
justify-content:center;
align-items:center;
width:65px;
background: rgb(153, 140, 140);
heigth:35px;
:hover{
    background: rgba(255, 255, 255, 0.2);
   
}
`
Container.SearchLogo = styled(search)`
width:18px;
heigth:18px;

`
Container.Icons = styled.div`
margin-left:auto;
display:flex;
justify-content:center;
align-items:center;

`
Container.Icon1 =styled.img`
width:22px;
height:16px;
margin:0 0 0 15px;
`
Container.Icon2 =styled.img`
width:18px;
height:18px;
margin:0 0 0 15px;
`
Container.Icon3 =styled.img`
width:18px;
height:22px;
margin:0 0 0 15px;
`


Container.avatar = styled.img`
width: 32px;
height: 32px;
margin:0 20px;
border-radius: 32px;
`