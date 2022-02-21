import React,{useState} from 'react';

const Input1 = () => {
    const [data,setData] = useState("")
    const inp1 =(e)=>{
        setData(e.target.value)
    }
  return <div>
      <h2> Text:{data}</h2>
      <input onChange={inp1}/> 
  </div>;
};

export default Input1;
