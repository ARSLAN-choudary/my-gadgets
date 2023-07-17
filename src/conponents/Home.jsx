import React from 'react'
import { ReactDOM } from 'react'
import { useState } from 'react'

function Home() {
// const[result,setresult]=useState("")
// const cliclhandler=(event)=>{
//     setresult(result.concat(event.target.value))
// }
// const cleardisplay=()=>{
//     setresult("")
// }
// const equal=()=>{
//     setresult(eval(result).toString());
// }
const[value,setvalue]=useState("");
const handleonchange=()=>{
    console.log(`on change`)
}

  return (
    <div  >
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-5 bg my-5">
                <div class="input-group mb-3 my-5 ">
                <input type="text"  class="form-control" onChange={handleonchange} placeholder="0" value={value}/>
                </div>
                 
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2 " onClick={e=>setvalue(value+e.target.value)} value="1">1</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="2">2</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="3">3</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="4">4</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="5">5</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="6">6</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="7">7</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="8">8</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="9">9</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="0">0</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="+">+</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="-">-</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="*">*</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(value+e.target.value)} value="/">/</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue("")} value="clear">clear</button>
                <button type="button" class="btn btn-outline-primary text-white my-1 mx-2"onClick={e=>setvalue(eval(value))} value="=">=</button>
                <button type="button" class="btn btn-outline-primary  text-white mx-2 my-1"onClick={e=>setvalue(value.slice(0,-1))} value="=">Del</button>
                

                

                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Home
