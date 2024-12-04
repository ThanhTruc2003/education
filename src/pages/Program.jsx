/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";

const Program = () => {
  useEffect(() => {
    document.title = "Chương trình";
  }, []);

  return (
    <>
        <div className="container-fluid border-bottom bg-light wow fadeIn" data-wow-delay="0.1s">
            <div className="container topbar bg-primary d-none d-lg-block py-2" style={{ borderRadius: "0 40px" }}>
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                    <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a className="text-white">Thành phố Hồ Chí Minh</a></small>
                    <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="https://mail.google.com/mail/?view=cm&fs=1&to=ntruc1926@gmail.com" target='_blank' className="text-white">ntruc1926@gmail.com</a></small>
                    </div>
                    <div className="top-link pe-2">
                        <a href="" className="btn btn-light btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-secondary"></i></a>
                        <a href="" className="btn btn-light btn-sm-square rounded-circle"><i className="fab fa-twitter text-secondary"></i></a>
                        <a href="" className="btn btn-light btn-sm-square rounded-circle"><i className="fab fa-instagram text-secondary"></i></a>
                        <a href="" className="btn btn-light btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-secondary"></i></a>
                    </div>
                </div>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-light navbar-expand-xl py-3">
                    <a href="/home" className="navbar-brand"><h1 className="text-primary display-6">Baby<span className="text-secondary">Care</span></h1></a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href="/home" className="nav-item nav-link">Home</a>
                            <a href="/about" className="nav-item nav-link">About</a>
                            <a href="/service" className="nav-item nav-link">Services</a>
                            <a href="/program" className="nav-item nav-link active">Programs</a>
                            <a href="/event" className="nav-item nav-link">Events</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="/blog" className="dropdown-item">Our Blog</a>
                                    <a href="/team" className="dropdown-item">Our Team</a>
                                    <a href="/testimonial" className="dropdown-item">Testimonial</a>
                                    <a href="/NotFound" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="/contact" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="d-flex me-4">
                            <div id="phone-tada" className="d-flex align-items-center justify-content-center">
                                <a href="" className="position-relative wow tada" data-wow-delay=".9s" >
                                    <i className="fa fa-phone-alt text-primary fa-2x me-4"></i>
                                    <div className="position-absolute" style={{ top: '-7px', left: '20px' }}>
                                        <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div className="d-flex flex-column pe-3 border-end border-primary">
                                <span className="text-primary">Have any questions?</span>
                                <a><span className="text-secondary">0376 805 991</span></a>
                            </div>
                        </div>
                        <button className="btn-search btn btn-primary btn-md-square rounded-circle" style={{marginRight: "20px"}} data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-white"></i></button>
                        <a href="/tao-tai-khoan" className="btn btn-primary px-4 py-3 btn-border-radius">Tạo tài khoản</a>
                    </div>
                </nav>
            </div>
        </div>


        <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"></input>
                            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4">Programs</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white" aria-current="page">Programs</li>
                    </ol>
                </nav>
            </div>
        </div>


        <div className="container-fluid program  py-5">
            <div className="container py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "700px" }}>
                    <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Our Programs</h4>
                    <h1 className="mb-5 display-3">We Offer An Exclusive Program For Kids</h1>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                        <div className="program-item rounded">
                            <div className="program-img position-relative">
                                <div className="overflow-hidden img-border-radius">
                                    <img src="img/program-1.jpg" className="img-fluid w-100" alt="Image"></img>
                                </div>
                                <div className="px-4 py-2 bg-primary text-white program-rate">$60.99</div>
                            </div>
                            <div className="program-text bg-white px-4 pb-3">
                                <div className="program-text-inner">
                                    <a href="#" className="h4">English For Today</a>
                                    <p className="mt-3 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur,</p>
                                </div>
                            </div>
                            <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
                                <img src="img/program-teacher.jpg" className="img-fluid rounded-circle p-2 border border-primary bg-white" alt="Image" style={{ width: "70px", height: "70px" }}></img>
                                <div className="ms-3">
                                    <h6 className="mb-0 text-primary">Mary Mordern</h6>
                                    <small>Arts Designer</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                                <small className="text-white"><i className="fas fa-wheelchair me-1"></i> 30 Sits</small>
                                <small className="text-white"><i className="fas fa-book me-1"></i> 11 Lessons</small>
                                <small className="text-white"><i className="fas fa-clock me-1"></i> 60 Hours</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.3s">
                        <div className="program-item rounded">
                            <div className="program-img position-relative">
                                <div className="overflow-hidden img-border-radius">
                                    <img src="img/program-2.jpg" className="img-fluid w-100" alt="Image"></img>
                                </div>
                                <div className="px-4 py-2 bg-primary text-white program-rate">$60.99</div>
                            </div>
                            <div className="program-text bg-white px-4 pb-3">
                                <div className="program-text-inner">
                                    <a href="#" className="h4">Graphics Arts</a>
                                    <p className="mt-3 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur,</p>
                                </div>
                            </div>
                            <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
                                <img src="img/program-teacher.jpg" className="img-fluid rounded-circle p-2 border border-primary bg-white" alt="" style={{ width: "70px", height: "70px" }}></img>
                                <div className="ms-3">
                                    <h6 className="mb-0 text-primary">Mary Mordern</h6>
                                    <small>Arts Designer</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                                <small className="text-white"><i className="fas fa-wheelchair me-1"></i> 30 Sits</small>
                                <small className="text-white"><i className="fas fa-book me-1"></i> 11 Lessons</small>
                                <small className="text-white"><i className="fas fa-clock me-1"></i> 60 Hours</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.5s">
                        <div className="program-item rounded">
                            <div className="program-img position-relative">
                                <div className="overflow-hidden img-border-radius">
                                    <img src="img/program-3.jpg" className="img-fluid w-100" alt="Image"></img>
                                </div>
                                <div className="px-4 py-2 bg-primary text-white program-rate">$60.99</div>
                            </div>
                            <div className="program-text bg-white px-4 pb-3">
                                <div className="program-text-inner">
                                    <a href="#" className="h4">General Science</a>
                                    <p className="mt-3 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur,</p>
                                </div>
                            </div>
                            <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
                                <img src="img/program-teacher.jpg" className="img-fluid rounded-circle p-2 border border-primary bg-white" alt="" style={{ width: "70px", height: "70px" }}></img>
                                <div className="ms-3">
                                    <h6 className="mb-0 text-primary">Mary Mordern</h6>
                                    <small>Arts Designer</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                                <small className="text-white"><i className="fas fa-wheelchair me-1"></i> 30 Sits</small>
                                <small className="text-white"><i className="fas fa-book me-1"></i> 11 Lessons</small>
                                <small className="text-white"><i className="fas fa-clock me-1"></i> 60 Hours</small>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline-block text-center wow fadeIn" data-wow-delay="0.1s">
                        <a href="#" className="btn btn-primary px-5 py-3 text-white btn-border-radius">Vew All Programs</a>
                    </div>
                </div> 
            </div>
        </div>


        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="footer-item">
                            <h2 className="fw-bold mb-3"><span className="text-primary mb-0">Baby</span><span className="text-secondary">Care</span></h2>
                            <p className="mb-4">There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its estiegittis miristum.</p>
                            <div className="border border-primary p-3 rounded bg-light">
                                <h5 className="mb-3">Newsletter</h5>
                                <div className="position-relative mx-auto border border-primary rounded" style={{ maxWidth: "400px" }}>
                                    <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"></input>
                                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 text-white">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="footer-item">
                            <div className="d-flex flex-column p-4 ps-5 text-dark border border-primary" 
                            style={{ borderRadius: "50% 20% / 10% 40%" }}>
                                <p>Monday: 8am to 5pm</p>
                                <p>Tuesday: 8am to 5pm</p>
                                <p>Wednes: 8am to 5pm</p>
                                <p>Thursday: 8am to 5pm</p>
                                <p>Friday: 8am to 5pm</p>
                                <p>Saturday: 8am to 5pm</p>
                                <p className="mb-0">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="footer-item">
                            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">LOCATION</h4>
                            <div className="d-flex flex-column align-items-start">
                                <a href="" className="text-body mb-4"><i className="fa fa-map-marker-alt text-primary me-2"></i> 104 North tower New York, USA</a>
                                <a href="" className="text-start rounded-0 text-body mb-4"><i className="fa fa-phone-alt text-primary me-2"></i> (+012) 3456 7890 123</a>
                                <a href="" className="text-start rounded-0 text-body mb-4"><i className="fas fa-envelope text-primary me-2"></i> exampleemail@gmail.com</a>
                                <a href="" className="text-start rounded-0 text-body mb-4"><i className="fa fa-clock text-primary me-2"></i> 26/7 Hours Service</a>
                                <div className="footer-icon d-flex">
                                    <a className="btn btn-primary btn-sm-square me-3 rounded-circle text-white" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-primary btn-sm-square me-3 rounded-circle text-white" href=""><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="btn btn-primary btn-sm-square me-3 rounded-circle text-white"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="btn btn-primary btn-sm-square rounded-circle text-white"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="footer-item">
                            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">OUR GALLARY</h4>
                            <div className="row g-3">
                                <div className="col-4">
                                    <div className="footer-galary-img rounded-circle border border-primary">
                                        <img src="img/galary-1.jpg" className="img-fluid rounded-circle p-2" alt=""></img>
                                    </div>
                               </div>
                               <div className="col-4">
                                    <div className="footer-galary-img rounded-circle border border-primary">
                                        <img src="img/galary-2.jpg" className="img-fluid rounded-circle p-2" alt=""></img>
                                    </div>
                               </div>
                                <div className="col-4">
                                    <div className="footer-galary-img rounded-circle border border-primary">
                                        <img src="img/galary-3.jpg" className="img-fluid rounded-circle p-2" alt=""></img>
                                    </div>
                               </div>
                                <div className="col-4">
                                    <div className="footer-galary-img rounded-circle border border-primary">
                                        <img src="img/galary-4.jpg" className="img-fluid rounded-circle p-2" alt=""></img>
                                    </div>
                               </div>
                                <div className="col-4">
                                    <div className="footer-galary-img rounded-circle border border-primary">
                                        <img src="img/galary-5.jpg" className="img-fluid rounded-circle p-2" alt=""></img>
                                    </div>
                               </div>
                                <div className="col-4">
                                    <div className="footer-galary-img rounded-circle border border-primary">
                                        <img src="img/galary-6.jpg" className="img-fluid rounded-circle p-2" alt=""></img>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid copyright bg-dark py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 my-auto text-center text-md-end text-white">
                        Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a clas="border-bottom" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>


        <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>   
    </>
  );
}

export default Program;