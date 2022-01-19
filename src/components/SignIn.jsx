import react from "react";
import { useState } from "react";
import {Link,useHistory } from "react-router-dom";
import logo_blue from "../Logo/logo_blues.png";
const SignIn= ()=>{

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const history=useHistory();



    const sendData= async(e)=>{
        e.preventDefault();
        
        const res = await fetch(`${localStorage.getItem('api')}/login`, { 
          method:"Post",
          headers:{
          "Content-type": "application/json"
          },
          body: JSON.stringify({
              email,
              password,
          
        })
        });
        if(res.status==200)
        {
          history.push("/home");
        }
      }
     
    return (
        <>
            <div class="container pt-2 ps-5 pb-5 pe-5" >
              <div class="position-relative" > 
                  <form id="m-form" class="form position-absolute mt-5 top-50 start-50 w-50 p-3"  method="post">               
                 
                 <img src={logo_blue} alt="hello" className="mt-1 " style={{display:"inline-block" ,  width: "255px",
    height: "80px",   position: "relative",
    left: "32%"}} />
                  
                <div className="p-5">
                  <h5>Sign In to Tech Hiring Hub</h5>
                    <div className="mt-5 mb-3">
                    {/*<label for="exampleFormControlInput1" className="form-label">Email address</label>*/}
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="Email" value={email}/>
                    </div>
                    <div className="mb-3">
                    {/*<label for="exampleFormControlInput2" className="form-label" value={password}>Password</label>*/}
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control mt-5" name="pass" id="exampleFormControlInput2" placeholder="Password"/>
                    <center><a href="#" class="links mt-3">Forget Password?</a></center>
                    </div>
                    <center>
                    <div className="mt-3 mb-3">
                    <button onClick={sendData} type="submit" class="btn btn-primary">Sign In</button>
                    </div>
                    <a href="#" class="links ">Don't have an account?Sign up</a></center>
                </div>
                    </form>
                </div>
        </div>
        </>
    )
}

export {SignIn}