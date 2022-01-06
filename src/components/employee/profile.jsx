import react from "react";
import '../../style/profile.css';
const Profile= ()=>{

  


return(
    <>
    <body>

<div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green ">
                            <div class="card-block-s">
                                <div class="m-b-25"> <img src="img.jpg" class="img-radius" alt="User-Profile-Image"/> </div>
                                <h3 class="f-w-600">Your good Name</h3><hr/>
                                <h6>Designation</h6> 
								<p>To enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and consistent competitive advantage for our clients around the world.</p>
								<ul class="social-link list-unstyled m-t-40 m-b-10">
								<i class="fa fa-facebook-f style"></i>
                                <i class="fa fa-linkedin style"></i>
								<i class="fa fa-instagram style"></i>	
								<i class="fa fa-twitter"></i>								
								</ul>
								<div class="social-link list-unstyled m-t-40 m-b-10">
								<a href="#"><i class='fa fa-edit style center' ></i></a>
								</div>
							</div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h6 class="text-muted f-w-400">abcd@gmail.com</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Phone</p>
                                        <h6 class="text-muted f-w-400">98979989898</h6>
                                    </div>
									<div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">City</p>
                                        <h6 class="text-muted f-w-400">Lahore</h6>
                                    </div>
                                </div>
								<h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Experience</h6>
								<div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Company name</p>
                                        <h6 class="text-muted f-w-400">Designation/Years</h6>
                                    </div>
                                    
                                </div>
                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Skills</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <button class="button m-b-10 ">PHP/5</button>
										<button class="button m-b-10 ">Python/3</button>
										<button class="button m-b-10 ">CSS/1</button>
                                    </div>
                                    
                                </div>
								
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
    
    </>
)}
export default Profile