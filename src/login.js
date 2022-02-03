
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Log = () => {
    let[username,setname]=useState("");
    let[useremail,setemail]=useState("");
    let[userpass,setpass]=useState("");
    let history=useHistory()
    let handlesubmit=(e)=>{
        e.preventDefault();
        let datas={username,useremail,userpass}
        console.log(datas);
        fetch("http://localhost:8000/logincredentials",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(datas)
        }).then(()=>{
            alert('Login succesfully..!');
            history.push("/")
        });
    }
    return ( 
        <div className="logs">
            <div className="back">
            <div className="heading">
                <h2 style={{color:"white"}}>ENTER YOUR DETAILS TO LOGIN</h2>
            </div>
             <div className="forms">
            <form id="f1" onSubmit={handlesubmit}>
                <label htmlFor="">Enter your name:</label><br/>
                <input type="text"required value={username} onChange={(e)=>setname(e.target.value)} /><br/>
                <label htmlFor="">Enter your email:</label><br/>
                <input type="email" required value={useremail} onChange={(e)=>setemail(e.target.value)} /><br/>
                <label htmlFor="">Enter your password:</label><br/>
                <input type="password"required value={userpass} onChange={(e)=>setpass(e.target.value)} /><br/>
                 <button>login</button><br/>
    
            </form>
            </div>
            </div>
        </div>
     );
}
 
export default Log;