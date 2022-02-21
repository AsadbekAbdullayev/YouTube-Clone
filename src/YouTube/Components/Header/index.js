import React,{useContext} from 'react'
import {Container} from './styled'
import {SearchContext} from '../../context/contex2'
import {Modale} from '../../context/modal'
import  qun from '../../Assets/qun.svg';
import b1 from '../../Assets/s/b1.png'
import b2 from '../../Assets/s/b2.png'
import b3 from '../../Assets/s/b3.svg'


const Header = () => {

    const [modal,setModal] = useContext(Modale)
    const [ser, setSer] = useContext(SearchContext)
    const Search1 = (e)=>{
        setSer(e.target.value)
    }
    const ActivM = ()=>{
        setModal(!modal)
    }
  

    return (
        <div>
           <Container>
               <Container.LogoBtn onClick={ActivM} modal={modal}>
                   <Container.Btns/>
               </Container.LogoBtn>  

               <Container.Logo/>
               <Container.LogoYou/>


                <Container.Search>
                    <Container.SearchArea onChange={Search1} />

                    <Container.Sa >
                    <Container.SearchLogo/>
                    </Container.Sa>
                </Container.Search>


                <Container.Icons>
                    <Container.Icon1 src={b3}/>
                    <Container.Icon2 src={b2}/>
                    <Container.Icon3 src={qun}/>
                    <Container.avatar src={b1}/>
                </Container.Icons>


           </Container>
        </div>
    )
}

export default Header