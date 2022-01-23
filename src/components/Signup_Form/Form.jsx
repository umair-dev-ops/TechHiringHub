import react from "react";
import { useState } from "react";
import {Part1} from "./Part1";
import { Part3 } from "./Part3";
import { Part4 } from "./Part4";
import { Part5 } from "./Part5";
import { Part6 } from "./Part6";
import { Home } from "../Home";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Route } from "react-router";
import { Switch } from "react-router";
import { stat } from "fs";
import logo_blue from "../../Logo/logo_blues.png";
import'../../style/form.css';


const Form= ()=>{
    const [pageno,setpageno]=useState(1);
    const value={pageno,setpageno};
    const pageNo=useSelector((state)=>state.pageChange);
    

    return (
        <>
          
          <div class="container" >
              <div className="row">
                 <div className="col-3">

                 </div>
          <div className="col-6">

            
                  <form id="m-form"  class="form p-3 mt-5 w-100"  method="post" encType="multipart/form-data">
				<h1 class="text-center mt-4" style={{color:"#003580",fontWeight:"900"}}>Tech Hiring Hub</h1>


                  {/* <img src={logo_blue} alt="hello" className="mt-2 " style={{display:"inline-block" ,  width: "255px",
    height: "80px",   position: "relative",
    left: "32%"}} /> */}
                    {pageNo==1&&<Part1></Part1>}
                    {pageNo==2&&<Part3></Part3>}
                    {pageNo==3&&<Part4></Part4>}
                    {pageNo==4&&<Part5></Part5>}
                    {pageNo==5&&<Part6></Part6>}
                    </form>
            
          </div>
          </div>
             
        </div>
                    

        </>
    );
};

export {Form}