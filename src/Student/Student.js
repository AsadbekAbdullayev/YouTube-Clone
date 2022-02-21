import React from "react";
import './App.css';



 class Student extends React.Component{
     constructor(props){
         super(props)
             this.state= {
                count:0,
                name:'',
                surname:'',
                btn:true,
                data : [
                    {
                        id:1,name:'Asadbek'
                    },
                    {
                        id:2,name:'sherbek'
                    },
                    {
                        id:3,name:'Abbos'
                    },
                    {
                        id:4,name:'Asadbekjon'
                    }
                ]

             }
        
     }
     render(){
     const add1 = ()=>{
         this.setState({
             count:this.state.count -1
         })
     }
     const add2 = ()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    const in1 = (e)=>{
       
        this.setState({
            [e.target.name]:e.target.value
        })}

        const On1 = ()=>{
       
            this.setState({
                btn:!this.state.btn
            })
    }
    const on2 = (e)=>{ 
        const r = this.state.data.filter((v)=> v.id!==e)
        this.setState({
            data:this.state.data=r
        })
}
    
         
         return(
             <div  >
                 {
                     this.state.data.map((v)=>{
                        return(
                            <div key={v.id} className='card'>
                            


                            <h1>{v.name}</h1> <button className='btn' onClick={()=>on2(v.id)}>delete</button>
                           </div>
                        )
                        
                     })
                 }

                 <h1 onClick={add1}>-</h1>
                 <h1>COUNT :{this.state.count}  </h1>
                 <h1>NAME :{this.state.name}  </h1>
                 <h1>SURNMAE :{this.state.surname}  </h1>
                 <h1 onClick={add2}>+</h1>
                <input name='name' type='text' placeholder= 'name' onChange={in1} value={this.state.name}/>
                <input name='surname' type='text' placeholder= 'surname' onChange={in1} value={this.state.surname}/>
                <button onClick={()=>On1()} >OnClick</button>


             </div>
         )
     }
    }

 export default Student;








 