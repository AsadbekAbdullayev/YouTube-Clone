import React,{useContext
} from 'react';
import './App.css'
import Header from './YouTube/Components/Header/index'
import LeftNavbar from './YouTube/Components/LeftNavbar/index'
import Navbar from './YouTube/Components/Navbar/index'
import Body from './YouTube/Components/Body/index'
import Sub from './YouTube/Components/Sub/index'
import Home1 from './YouTube/Components/Home1/index'
import Home2 from './YouTube/Components/Home2/index'
import Navigator from './YouTube/Components/Navigator/index'
import  Modal from './YouTube/Components/Modal/index';
import {Modale} from './YouTube/context/modal';
import { Route,Routes } from 'react-router-dom';
const App =()=>{
    const [modal] = useContext(Modale)
    return ( 
        <div>
            <Header/>
           
            <div className='tana'>
                  <LeftNavbar/>
                  <div>
                      <Navbar/> 
                      <div>   
                          {
                              modal && <Modal/> 
                          } 
                          <Routes>     
                      <Route exact path='/home/:idd' element={<Navigator/>}/>
                      <Route exact path='/home/category/:category' element={<Sub/>}/>
                      <Route exact path='/home1' element={<Home1/>}/>
                      <Route exact path='/home' element={<Body/>}/>
                      <Route exact path='/' element={<Body/>}/>
                      <Route exact path='/sub' element={<Sub/>}/>   
                      <Route exact path='/home2' element={<Home2/>}/>
                      <Route exact path='/navigator' element={<Navigator/>}/>
                      </Routes>     
                     
                      </div>
                  </div>
            </div>
        </div>
             )
}


export default App;