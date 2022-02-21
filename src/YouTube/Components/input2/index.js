import React,{useState} from 'react';

const Input2 = () => {
    const [data,setData] = useState("")
    const inp1 =(e)=>{
     setData(e.target.value)
    }
    const inp2 =()=>{
        alert(data)
       }

  return <div>
     
      <input onChange={inp1}/> <button onClick={inp2}>Click</button>
  </div>;
};

export default Input2;
