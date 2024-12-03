/* eslint-disable react/no-unknown-property */
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../css/style.css';

const Home = () => {
    useEffect(() => {
        document.title = "Trang chủ";
        Aos.init();
    }, []);

    return (
    <>
      <div id="spinner" className="spinner">
        <div className="spinner-grow text-primary" role="status"></div>
      </div>
      
      <div className="container-fluid border-bottom bg-light wow fadeIn" data-wow-delay="0.1s" style={{
                visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn"
            }}>
            <div className="container topbar bg-primary d-none d-lg-block py-2" style={{borderRadius: "0 40px"}}>
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" className="text-white">123 Street, New York</a></small>
                        <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="#" className="text-white">Email@Example.com</a></small>
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
                            <a href="/home" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Services</a>
                            <a href="program.html" className="nav-item nav-link">Programs</a>
                            <a href="event.html" className="nav-item nav-link">Events</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="blog.html" className="dropdown-item">Our Blog</a>
                                    <a href="team.html" className="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="d-flex me-4">
                            <div id="phone-tada" className="d-flex align-items-center justify-content-center">
                                <a href="" className="position-relative wow tada" data-wow-delay=".9s" style={{
                                    visibility: "visible", animationDelay: "0.9s", animationName: "tada"
                                }}>
                                    <i className="fa fa-phone-alt text-primary fa-2x me-4"></i>
                                    <div className="position-absolute" style={{top: "-7px", left: "20px"}}>
                                        <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div className="d-flex flex-column pe-3 border-end border-primary">
                                <span className="text-primary">Have any questions?</span>
                                <a href="#"><span className="text-secondary">Free: + 0123 456 7890</span></a>
                            </div>
                        </div>
                        <button className="btn-search btn btn-primary btn-md-square rounded-circle" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-white"></i></button>
                    </div>
                </nav>
            </div>
        </div>
        
        <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid py-5 hero-header wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7 col-md-12">
                        <h1 className="mb-3 text-primary">We Care Your Baby</h1>
                        <h1 className="mb-5 display-1 text-white">The Best Play Area For Your Kids</h1>
                        <a href="" className="btn btn-primary px-4 py-3 px-md-5  me-4 btn-border-radius">Get Started</a>
                        <a href="" className="btn btn-primary px-4 py-3 px-md-5 btn-border-radius">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid py-5 about bg-light">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                        <div className="video border">
                            <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
                        <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">About Us</h4>
                        <h1 className="text-dark mb-4 display-5">We Learn Smart Way To Build Bright Futute For Your Children</h1>
                        <p className="text-dark mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
                        </p>
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2"></i>Sport Activites</h6>
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2 text-primary"></i>Outdoor Games</h6>
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2 text-secondary"></i>Nutritious Foods</h6>
                            </div>
                            <div className="col-lg-6">
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2"></i>Highly Secured</h6>
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2 text-primary"></i>Friendly Environment</h6>
                                <h6><i className="fas fa-check-circle me-2 text-secondary"></i>Qualified Teacher</h6>
                            </div>
                        </div>
                        <a href="" className="btn btn-primary px-5 py-3 btn-border-radius">More Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="ratio ratio-16x9">
                            <iframe className="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 700px;">
                    <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">What We Do</h4>
                    <h1 className="mb-5 display-3">Thanks To Get Started With Our School</h1>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
                        <div className="text-center border-primary border bg-white service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-inner">
                                    <div className="p-4"><i className="fas fa-gamepad fa-6x text-primary"></i></div>
                                    <a href="#" className="h4">Study & Game</a>
                                    <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, culpa qui officiis animi Lorem ipsum dolor sit amet, 
                                        consectetur adipisicing elit.</p>
                                    <a href="#" className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeIn" data-wow-delay="0.3s">
                        <div className="text-center border-primary border bg-white service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-inner">
                                    <div className="p-4"><i className="fas fa-sort-alpha-down fa-6x text-primary"></i></div>
                                    <a href="#" className="h4">A to Z Programs</a>
                                    <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, culpa qui officiis animi Lorem ipsum dolor sit amet, 
                                        consectetur adipisicing elit.</p>
                                    <a href="#" className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeIn" data-wow-delay="0.5s">
                        <div className="text-center border-primary border bg-white service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-inner">
                                    <div className="p-4"><i className="fas fa-users fa-6x text-primary"></i></div>
                                    <a href="#" className="h4">Expert Teacher</a>
                                    <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, culpa qui officiis animi Lorem ipsum dolor sit amet, 
                                        consectetur adipisicing elit.</p>
                                    <a href="#" className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeIn" data-wow-delay="0.7s">
                        <div className="text-center border-primary border bg-white service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-inner">
                                    <div className="p-4"><i className="fas fa-user-nurse fa-6x text-primary"></i></div>
                                    <a href="#" className="h4">Mental Health</a>
                                    <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, culpa qui officiis animi Lorem ipsum dolor sit amet, 
                                        consectetur adipisicing elit.</p>
                                    <a href="#" className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid program  py-5">
            <div className="container py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 700px;">
                    <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Our Programs</h4>
                    <h1 className="mb-5 display-3">We Offer An Exclusive Program For Kids</h1>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                        <div className="program-item rounded">
                            <div className="program-img position-relative">
                                <div className="overflow-hidden img-border-radius">
                                    <img src="img/program-1.jpg" className="img-fluid w-100" alt="Image"/>
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
                                <img src="img/program-teacher.jpg" className="img-fluid rounded-circle p-2 border border-primary bg-white" alt="Image" style="width: 70px; height: 70px;"/>
                                <div className="ms-3">
                                    <h6 className="mb-0 text-primary">Mary Mordern</h6>
                                    <small>Arts Designer</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between px-4 py-2 bg-primary</div> rounded-bottom">
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
                                    <img src="img/program-2.jpg" className="img-fluid w-100" alt="Image"/>
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
                                <img src="img/program-teacher.jpg" className="img-fluid rounded-circle p-2 border border-primary bg-white" alt="" style="width: 70px; height: 70px;"/>
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
                                    <img src="img/program-3.jpg" className="img-fluid w-100" alt="Image"/>
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
                                <img src="img/program-teacher.jpg" className="img-fluid rounded-circle p-2 border border-primary bg-white" alt="" style="width: 70px; height: 70px;"/>
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


        <div className="container-fluid events py-5 bg-light">
            <div className="container py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 700px;">
                    <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Our Events</h4>
                    <h1 className="mb-5 display-3">Our Upcoming Events</h1>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                        <div className="events-item bg-primary rounded">
                            <div className="events-inner position-relative">
                                <div className="events-img overflow-hidden rounded-circle position-relative">
                                    <img src="img/event-1.jpg" className="img-fluid w-100 rounded-circle" alt="Image"/>
                                    <div className="event-overlay">
                                        <a href="img/event-1.jpg" data-lightbox="event-1"><i className="fas fa-search-plus text-white fa-2x"></i></a>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-secondary text-white text-center events-rate">29 Nov</div>
                                <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
                                    <small className="text-white"><i className="fas fa-calendar me-1 text-primary"></i> 10:00am - 12:00pm</small>
                                    <small className="text-white"><i className="fas fa-map-marker-alt me-1 text-primary"></i> New York</small>
                                </div>
                            </div>
                            <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                                <a href="#" className="h4">Music & drawing workshop</a>
                                <p className="mb-0 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur,</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.3s">
                        <div className="events-item bg-primary rounded">
                            <div className="events-inner position-relative">
                                <div className="events-img overflow-hidden rounded-circle position-relative">
                                    <img src="img/event-2.jpg" className="img-fluid w-100 rounded-circle" alt="Image"/>
                                    <div className="event-overlay">
                                        <a href="img/event-3.jpg" data-lightbox="event-1"><i className="fas fa-search-plus text-white fa-2x"></i></a>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-secondary text-white text-center events-rate">29 Nov</div>
                                <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
                                    <small className="text-white"><i className="fas fa-calendar me-1 text-primary"></i> 10:00am - 12:00pm</small>
                                    <small className="text-white"><i className="fas fa-map-marker-alt me-1 text-primary"></i> New York</small>
                                </div>
                            </div>
                            <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                                <a href="#" className="h4">Why need study</a>
                                <p className="mb-0 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur,</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.5s">
                        <div className="events-item bg-primary rounded">
                            <div className="events-inner position-relative">
                                <div className="events-img overflow-hidden rounded-circle position-relative">
                                    <img src="img/event-3.jpg" className="img-fluid w-100 rounded-circle" alt="Image"/>
                                    <div className="event-overlay">
                                        <a href="img/event-3.jpg" data-lightbox="event-1"><i className="fas fa-search-plus text-white fa-2x"></i></a>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-secondary text-white text-center events-rate">29 Nov</div>
                                <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
                                    <small className="text-white"><i className="fas fa-calendar me-1 text-primary"></i> 10:00am - 12:00pm</small>
                                    <small className="text-white"><i className="fas fa-map-marker-alt me-1 text-primary"></i> New York</small>
                                </div>
                            </div>
                            <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                                <a href="#" className="h4">Child health consciousness</a>
                                <p className="mb-0 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid blog py-5">
            <div className="container py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 600px;">
                    <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Latest News & Blog</h4>
                    <h1 className="mb-5 display-3">Read Our Latest News & Blog</h1>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                        <div className="blog-item rounded-bottom">
                            <div className="blog-img overflow-hidden position-relative img-border-radius">
                                <img src="img/blog-1.jpg" className="img-fluid w-100" alt="Image"/>
                            </div>
                            <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                                <small className="text-dark"><i className="fas fa-calendar me-1 text-dark"></i> 29 Nov 2023</small>
                                <small className="text-dark"><i className="fas fa-comment-alt me-1 text-dark"></i> Comments (15)</small>
                            </div>
                            <div className="blog-content d-flex align-items-center px-4 py-3 bg-light">
                                <div className="overflow-hidden rounded-circle rounded-top border border-primary">
                                    <img src="img/program-teacher.jpg" className="img-fluid rounded-circle p-2 rounded-top" alt="Image" style="width: 70px; height: 70px; border-style: dotted; border-color: var(--bs-primary) !important;"/>
                                </div>
                                <div className="ms-3">
                                    <h6 className="text-primary">Mary Mordern</h6>
                                    <p className="text-muted">Baby Care</p>
                                </div>
                            </div>
                            <div className="px-4 pb-4 bg-light rounded-bottom">
                                <div className="blog-text-inner">
                                    <a href="#" className="h4">How to pay attention to your child?</a>
                                    <p className="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus</p>
                                </div>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.3s">
                        <div className="blog-item rounded-bottom">
                            <div className="blog-img overflow-hidden position-relative img-border-radius">
                                <img src="img/blog-2.jpg" className="img-fluid w-100" alt="Image"/>
                            </div>
                            <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                                <small className="text-dark"><i className="fas fa-calendar me-1 text-dark"></i> 29 Nov 2023</small>
                                <small className="text-dark"><i className="fas fa-comment-alt me-1 text-dark"></i> Comments (15)</small>
                            </div>
                            <div className="blog-content d-flex align-items-center px-4 py-3 bg-light">
                                <div className="overflow-hidden rounded-circle rounded-top border border-primary">
                                    <img src="img/program-teacher.jpg" className="img-fluid rounded-circle p-2 rounded-top" alt="" style="width: 70px; height: 70px; border-style: dotted; border-color: var(--bs-primary) !important;"/>
                                </div>
                                <div className="ms-3">
                                    <h6 className="text-primary">Mary Mordern</h6>
                                    <p className="text-muted">Baby Care</p>
                                </div>
                            </div>
                            <div className="px-4 pb-4 bg-light rounded-bottom">
                                <div className="blog-text-inner">
                                    <a href="#" className="h4">Play outdoor sports with your child</a>
                                    <p className="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus</p>
                                </div>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.5s">
                        <div className="blog-item rounded-bottom">
                            <div className="blog-img overflow-hidden position-relative img-border-radius">
                                <img src="img/blog-3.jpg" className="img-fluid w-100" alt="Image"/>
                            </div>
                            <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                                <small className="text-dark"><i className="fas fa-calendar me-1 text-dark"></i> 29 Nov 2023</small>
                                <small className="text-dark"><i className="fas fa-comment-alt me-1 text-dark"></i> Comments (15)</small>
                            </div>
                            <div className="blog-content d-flex align-items-center px-4 py-3 bg-light">
                                <div className="overflow-hidden rounded-circle rounded-top border border-primary">
                                    <img src="img/program-teacher.jpg" className="img-fluid rounded-circle p-2 rounded-top" alt="" style="width: 70px; height: 70px; border-style: dotted; border-color: var(--bs-primary) !important;"/>
                                </div>
                                <div className="ms-3">
                                    <h6 className="text-primary">Mary Mordern</h6>
                                    <p className="text-muted">Baby Care</p>
                                </div>
                            </div>
                            <div className="px-4 pb-4 bg-light rounded-bottom">
                                <div className="blog-text-inner">
                                    <a href="#" className="h4">How to make time for your kids?</a>
                                    <p className="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus</p>
                                </div>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid team py-5">
            <div className="container py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 600px;">
                    <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Our Team</h4>
                    <h1 className="mb-5 display-3">Meet With Our Expert Teacher</h1>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
                        <div className="team-item border border-primary img-border-radius overflow-hidden">
                            <img src="img/team-1.jpg" className="img-fluid w-100" alt=""/>
                            <div className="team-icon d-flex align-items-center justify-content-center">
                                <a className="share btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fas fa-share-alt"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="team-content text-center py-3">
                                <h4 className="text-primary">Linda Carlson</h4>
                                <p className="text-muted mb-2">English Teacher</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeIn" data-wow-delay="0.3s">
                        <div className="team-item border border-primary img-border-radius overflow-hidden">
                            <img src="img/team-2.jpg" className="img-fluid w-100" alt=""/>
                            <div className="team-icon d-flex align-items-center justify-content-center">
                                <a className="share btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fas fa-share-alt"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="team-content text-center py-3">
                                <h4 className="text-primary">Linda Carlson</h4>
                                <p className="text-muted mb-2">English Teacher</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeIn" data-wow-delay="0.5s">
                        <div className="team-item border border-primary img-border-radius overflow-hidden">
                            <img src="img/team-3.jpg" className="img-fluid w-100" alt=""/>
                            <div className="team-icon d-flex align-items-center justify-content-center">
                                <a className="share btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fas fa-share-alt"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="team-content text-center py-3">
                                <h4 className="text-primary">Linda Carlson</h4>
                                <p className="text-muted mb-2">English Teacher</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeIn" data-wow-delay="0.7s">
                        <div className="team-item border border-primary img-border-radius overflow-hidden">
                            <img src="img/team-4.jpg" className="img-fluid w-100" alt=""/>
                            <div className="team-icon d-flex align-items-center justify-content-center">
                                <a className="share btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fas fa-share-alt"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="share-link btn btn-primary btn-md-square text-white rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="team-content text-center py-3">
                                <h4 className="text-primary">Linda Carlson</h4>
                                <p className="text-muted mb-2">English Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 700px;">
                    <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Our Testimonials</h4>
                    <h1 className="mb-5 display-3">Parents Say About Us</h1>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.3s">
                    <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                        <div className="p-4 position-relative">
                            <i className="fa fa-quote-right fa-2x text-primary position-absolute" style="top: 15px; right: 15px;"></i>
                            <div className="d-flex align-items-center">
                                <div className="border border-primary bg-white rounded-circle">
                                    <img src="img/testimonial-2.jpg" className="rounded-circle p-2" style="width: 80px; height: 80px; border-style: dotted; border-color: var(--bs-primary);" alt=""/>
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="border-top border-primary mt-4 pt-3">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                        <div className="p-4 position-relative">
                            <i className="fa fa-quote-right fa-2x text-primary position-absolute" style="top: 15px; right: 15px;"></i>
                            <div className="d-flex align-items-center">
                                <div className="border border-primary bg-white rounded-circle">
                                    <img src="img/testimonial-2.jpg" className="rounded-circle p-2" style="width: 80px; height: 80px; border-style: dotted; border-color: var(--bs-primary);" alt=""/>
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="border-top border-primary mt-4 pt-3">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                        <div className="p-4 position-relative">
                            <i className="fa fa-quote-right fa-2x text-primary position-absolute" style="top: 15px; right: 15px;"></i>
                            <div className="d-flex align-items-center">
                                <div className="border border-primary bg-white rounded-circle">
                                    <img src="img/testimonial-2.jpg" className="rounded-circle p-2" style="width: 80px; height: 80px; border-style: dotted; border-color: var(--bs-primary);" alt=""/>
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="border-top border-primary mt-4 pt-3">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
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
                                <div className="position-relative mx-auto border border-primary rounded" style="max-width: 400px;">
                                    <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 text-white">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="footer-item">
                            <div className="d-flex flex-column p-4 ps-5 text-dark border border-primary" 
                            style="border-radius: 50% 20% / 10% 40%;">
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
                                        <img src="img/galary-1.jpg" className="img-fluid rounded-circle p-2" alt=""/>
                                    </div>
                               </div>
                               <div className="col-4">
                                    <div className="footer-galary-img rounded-circle border border-primary">
                                        <img src="img/galary-2.jpg" className="img-fluid rounded-circle p-2" alt=""/>
                                    </div>
                               </div>
                                <div className="col-4">
                                    <div className="footer-galary-img rounded-circle border border-primary">
                                        <img src="img/galary-3.jpg" className="img-fluid rounded-circle p-2" alt=""/>
                                    </div>
                               </div>
                                <div className="col-4">
                                    <div className="footer-galary-img rounded-circle border border-primary">
                                        <img src="img/galary-4.jpg" className="img-fluid rounded-circle p-2" alt=""/>
                                    </div>
                               </div>
                                <div className="col-4">
                                    <div className="footer-galary-img rounded-circle border border-primary">
                                        <img src="img/galary-5.jpg" className="img-fluid rounded-circle p-2" alt=""/>
                                    </div>
                               </div>
                                <div className="col-4">
                                    <div className="footer-galary-img rounded-circle border border-primary">
                                        <img src="img/galary-6.jpg" className="img-fluid rounded-circle p-2" alt=""/>
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
                        Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>


        <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>   

        
    </>
  );
};

export default Home;
