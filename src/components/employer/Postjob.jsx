import react from "react";
import { useState,useEffect } from "react";
import '../../style/postaJob.css'
const JobRegister= ()=>{
	const skills=["html","css","javascript","react","angular","devops","linux","python","mysql","docker","redis","git","aws","bootstrap"];
	const [job,setJob]= useState({
		title:'',
		description:'',
	
	 });
  
useEffect(() => {
console.log(job);
})

return(
    <>
	
    <div class="container">
		<div className="row mt-5">
		<div className="col-12">
			<form id="m-form" className=" p-5">
			<div className="row">
					<div className="col align-self-center">
						<h1 class="text-center" style={{color:"#003580",fontWeight:"900"}}>Tech Hiring Hub</h1>
					</div>
			</div>
			<div className="row">
				<div className="col align-self-center">
					<h3 class="text-center">Post a Job</h3>
				</div>
			</div>
			<div class="row justify-content-center">

				<div class="form-group col-md-3  ">
					<label for="title">Job Title</label>
					<input type="text" class="form-control" id="title" onChange={(e)=>{job.name=e.target.value;setJob({...job})}}/>
				</div>
				<div class="form-group col-md-9 ">
					<label for="description">Job Description</label>
					<textarea class="form-control" id="description" rows="1" onChange={(e)=>{job.description=e.target.value;setJob({...job})}}></textarea>
				</div>
			</div>

				
			<div className="row justify-content-center">


					<div class="form-group col-md-3 ">
						<label for="skills">Skills Required</label>
						<input type="text" placeholder="Search" class="form-control" rows="2" id="skills" />
					
					</div>
					<div className="col-md-3">
							<button className="mt-4 btn btn-outline-success rounded-pill">React +</button>
					</div>
					<div className="col-md-6">
							<button className="mt-4 btn btn-outline-danger  rounded-pill"><span className="close">React X</span></button>
					</div>
				
									

					
			</div>
			<div className="row justify-content-center">
					
					<div class="col-4">
						<label for="level">Career level</label>
						<select id="level" class="form-control">
							<option selected>Fresh</option>
							<option>Internee</option>
							<option>Experienced</option>
						</select>
					</div>
				
				
					<div class="col-4">
						<label for="qualification">Qualification</label>
							<select id="qualification" class="form-control">
								<option selected>Select..</option>
								<option>Bachelors</option>
								<option>Masters</option>
							</select>
					</div>
					<div class=" col-4">
						<label for="experience">Minimum Experience Required</label>
						<select id="experience" class="form-control">
							<option selected>1 year</option>
							<option>2 years</option>
							<option>3+years</option>
						</select>
					</div>
					</div>
			<div className="row justify-content-center">

					
				
					<div class="col-6">
						<label for="location">Location</label>
						<input type="text" class="form-control" id="location"/>
					</div>
					<div class="col-6">
						<label for="salary">Salary range</label>
						<div class="row align-items-center">
							<div className="col-6">
							<select id="minsalary" class="form-control">
								<option selected>From</option>
								<option>10,000</option>
								<option>30,000</option>
							</select>
							</div>
							<div className="col-6">
							<select id="maxsalary" class="form-control">
								<option selected>To</option>
								<option>50,000</option>
								<option>70,000</option>
							</select>
						</div>

					</div>
				
				</div>
					
			</div>
			<div className="row">

			
				<div class="col-3">
							<label for="positions">No. of Position</label>
								<select id="positions" class="form-control">
									<option selected>1</option>
									<option>2</option>
									<option>3</option>
									<option>5</option>
									<option>5+</option>
									<option>10+</option>
									<option>50+</option>
								</select>
					</div>
			
				</div>
				
			
					<br/>
				<div class=" text-center col-md-12">
					<button type="submit" class="btn btn-warning col-3" >Post</button>
				</div>
			</form>
			</div>
			</div>
</div>

    </>)}

    export default JobRegister