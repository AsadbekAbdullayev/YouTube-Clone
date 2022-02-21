import React ,{useState,useContext} from 'react';
import {Container} from './styled'
import {Modale} from '../../context/modal'


const Modal = () => {
  const [modal,setModal] = useContext(Modale)
  const ActivM = ()=>{
    setModal(!modal)
}
  return <Container> 
    <button style={{fontSize:'25px',marginLeft:'430px'}} onClick={ActivM}>Close
    </button>
  </Container>;
};

export default Modal;



 
 
 
 
 
 
 
 
 