import react, { useState,useEffect } from "react";
import { useDispatch,useSelector, shallowEqual } from "react-redux";
import '../style/showCandidates.css';
import {Footer} from './Footer';
import NavbarH from './NavbarH';
import profile from "../Logo/default.png";


const ShowCandidates= ()=>{
//const[sal,setSal]=useState(props.sal);
//const[location,setLocation]=useState(props.location);
const filterState=useSelector((state)=>state.filterState,shallowEqual);
const salary=filterState.salary;
const cityDetails=filterState.cityDetails;
const skills=filterState.skills;

const[users,setUsers]=useState();


const getUsers= async(e)=>{
  fetch(`${localStorage.getItem('api')}/getUsers`, { 
    method:"Post",
    headers:{
    "Content-type": "application/json"
    },
    body: JSON.stringify({
        salary,
        cityDetails,
        skills,
    })
  })
  .then(response => response.json())
  .then(result => {
    
    console.log("hello"+ result[0].cities[0].city);
    setUsers(result);
    // find video id to redirect to that video
    // client side redirect to '/video/:id'
  })
  .catch(err => console.log(err));
    };
      

  
useEffect(()=>{
    getUsers();
},[]);

useEffect(()=>{
  console.log(users);
},[users]);
useEffect(()=>{
  console.log("candidates is rerendering");
});



return(
    
  <>
  <NavbarH/> 
  <br/>  
<div class="w3-container">
<div className="row g-5 justify-content-center">

{users?users.map(user=>(<>
{/* <div class="column">
  <div class="w3-card-4">
  <h1>{user.name}</h1>
  <hr/><img src="../Logo/img2.jpg" alt="userimage" class=" w3-circle w3-margin-right " width="25%" height="25%"/>
      
  
      <h2>{user.salary}</h2>
      <p class="title">{user.radio2}</p>
      <p>Tech Hiring Hub</p>
      <br/>
</div></div> */}
  <div className="col-auto">
<div class="card">
  <img src={profile} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{user.name}</h5>
    <p class="card-text">{user.radio1}</p>
    <a href="#" class="btn btn-primary">Contact</a>
    
  </div>
  
  
</div>
</div>

</>)):<h1>no data</h1>}
</div>
</div>
  
  </>

    )
}
export default ShowCandidates;