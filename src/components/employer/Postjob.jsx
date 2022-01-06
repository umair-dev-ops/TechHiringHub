import react from "react";

const JobRegister= ()=>{

  


return(
    <>
    <div class="container">
		<h1 class="header text-center">Post a Job</h1>
			<form>
				<div class="form-group col-md-12">
					<label for="title">Job Title</label>
					<input type="text" class="form-control" id="title"/>
				</div>
				<div class="form-group col-md-12">
					<label for="description">Job Description</label>
					<textarea class="form-control" id="description" rows="4"></textarea>
				</div>
				<div class="form-group col-md-12">
					<label for="skills">Skills Required</label>
					<input type="text" class="form-control" id="skills" />
				</div>
				<div class="form-row align-items-center">
					<div class="form-group col-md-6">
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
					<div class="form-group col-md-6">
						<label for="level">Career level</label>
						<select id="level" class="form-control">
							<option selected>Fresh</option>
							<option>Internee</option>
							<option>Experienced</option>
						</select>
					</div>
				</div>
				<div class="form-row align-items-center">
					<div class="form-group col-md-6">
						<label for="qualification">Qualification</label>
							<select id="qualification" class="form-control">
								<option selected>Select..</option>
								<option>Bachelors</option>
								<option>Masters</option>
							</select>
					</div>
					<div class="form-group col-md-6">
						<label for="experience">Minimum Experience Required</label>
						<select id="experience" class="form-control">
							<option selected>1 year</option>
							<option>2 years</option>
							<option>3+years</option>
						</select>
					</div>
				</div>
				<div class="form-group col-md-6">
					<label for="location">Location</label>
					<input type="text" class="form-control" id="location"/>
				</div>
				<div class="form-inline justify-content-center">
					<div class="form-group col-md-6">
						<label for="salary">Salary range</label>
						<div class="form-row">
							<select id="minsalary" class="form-control ">
								<option selected>From</option>
								<option>10,000</option>
								<option>30,000</option>
							</select>
							<select id="maxsalary" class="form-control ">
								<option selected>To</option>
								<option>50,000</option>
								<option>70,000</option>
							</select>
						</div>
					</div>
				</div>
				<div class=" text-center col-md-12">
					<button type="submit" class="btn btn-primary" >Sign in</button>
				</div>
			</form>
	</div>

    </>)}

    export default JobRegister