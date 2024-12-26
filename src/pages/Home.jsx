/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Trang chủ";
        
        const videoModal = document.getElementById('videoModal');
        if (videoModal) {
            videoModal.addEventListener('hidden.bs.modal', function () {
                const iframe = this.querySelector('iframe');
                const videoSrc = iframe.src;
                setTimeout(function() {
                    iframe.src = videoSrc;
                }, 100);
            });
        }

        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            setUsername(savedUsername);
        }
    }, []);

    const handleAccountClick = () => {
        navigate('/information');
    };

    function handleChangePassword() {
        navigate('/change-password');
    }

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setUsername('');
        navigate('/create-account');
    };

    return (
    <>
        <ToastContainer />
        <div className="container-fluid border-bottom bg-light wow fadeIn" data-wow-delay="0.1s" style={{
                visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn"
            }}>
            <div className="container topbar bg-primary d-none d-lg-block py-2" style={{borderRadius: "0 40px"}}>
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
                    <a href="/home" className="navbar-brand"><h1 className="text-primary display-6">ELear<span className="text-secondary">ning</span></h1></a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Khóa học</a>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="/primary" className="dropdown-item">Tiểu học</a>
                                    <a href="/secondary" className="dropdown-item">THCS</a>
                                    <a href="/high" className="dropdown-item">THPT</a>
                                </div>
                            </div>
                            <a href="/about" className="nav-item nav-link">Giới thiệu</a>
                            <a href="/review" className="nav-item nav-link">Góc ôn luyện</a>
                            <a href="/library" className="nav-item nav-link">Thư viện</a>
                            <a href="/contact" className="nav-item nav-link">Liên hệ</a>
                        </div>
                        <div className="d-flex me-4">
                            <div id="phone-tada" className="d-flex align-items-center justify-content-center">
                                <a className="position-relative wow tada" data-wow-delay=".9s" style={{
                                    visibility: "visible", animationDelay: "0.9s", animationName: "tada"
                                }}>
                                    <i className="fa fa-phone-alt text-primary fa-2x me-4"></i>
                                    <div className="position-absolute" style={{top: "-7px", left: "20px"}}>
                                        <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div className="d-flex flex-column pe-3 border-end border-primary">
                                <span className="text-primary">Bạn có thắc mắc?</span>
                                <a><span className="text-secondary">0376 805 991</span></a>
                            </div>
                        </div>
                        <div>
                            {username ? (
                                <div className="user-dropdown">
                                    <i className="fa fa-user-circle nav-link" style={{ fontSize: '2em', cursor: 'pointer' }} />
                                    <div className="dropdown-menu" style={{border: "0"}}>
                                        <p className="dropdown-item" style={{marginBottom: "0px"}}>
                                            <i className="fa fa-user" style={{ marginRight: '10px' }}></i>
                                            <span style={{ fontWeight: 'lighter', cursor: "pointer"}} onClick={handleAccountClick} >Tài khoản:</span> {username}
                                        </p>
                                        <button onClick={handleChangePassword} className="dropdown-item">
                                            <i className="fa fa-key" style={{ marginRight: '10px' }}></i>Đổi mật khẩu</button>
                                        <div className="dropdown-divider"></div>
                                        <button onClick={handleLogout} className="dropdown-item">
                                            <i className="fa fa-sign-in-alt" style={{ marginRight: '10px' }}></i>Đăng xuất</button>
                                    </div>
                                </div>
                                ) : (
                                    <a href="/create-account" className="btn btn-primary px-4 py-3 btn-border-radius">Tạo tài khoản</a>
                                )}
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        <div className="container-fluid py-5 hero-header wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row1 g-5">
                    <div className="col-lg-7 col-md-12">
                        <h1 className="mb-3 text-primary">Học tập dễ dàng - Thành công bền vững</h1>
                        <h1 className="mb-5 display-1 text-white">Nền tảng học tập trực tuyến tốt nhất dành cho học sinh phổ thông</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid py-5 about bg-light">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                        <div className="video border">
                            <button type="button" className="btn btn-play" data-bs-toggle="modal" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
                        <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Về chúng tôi</h4>
                        <h1 className="text-dark mb-4 display-5">ELearning cung cấp các chương trình học trực tuyến môn Tin học chất lượng cao cho học sinh từ bậc tiểu học, THCS và THPT</h1>
                        <p className="text-dark mb-4">Trong thời đại số hóa, Tin học không chỉ là một môn học mà còn là chìa khóa mở ra cánh cửa tri thức và kỹ năng cần thiết cho mọi lĩnh vực. Elearning được thiết kế để hỗ trợ bạn học tập một cách dễ dàng, hiệu quả và thú vị.
                        </p>
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2"></i>Khóa học chất lượng</h6>
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2 text-primary"></i>Bài tập thực hành đa dạng</h6>
                            </div>
                            <div className="col-lg-6">
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2"></i>Trải nghiệm mượt mà</h6>
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2 text-primary"></i>Phù hợp mọi đối tượng</h6>
                            </div>
                        </div>
                        <a href="/about" className="btn btn-primary px-5 py-3 btn-border-radius">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Giới thiệu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="ratio ratio-16x9">
                            <iframe 
                                src="https://www.youtube.com/embed/16-CEelSCIk?enablejsapi=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{
                    maxWidth: "700px"
                }}>
                    <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Chúng tôi có những gì</h4>
                    <h1 className="mb-5 display-3">Cấu trúc bài học trực tuyến trên Elearning</h1>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
                        <div className="text-center border-primary border bg-white service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-inner">
                                    <div className="p-4"><i className="fas fa-video fa-6x text-primary"></i></div>
                                    <a className="h4">Video bài giảng</a>
                                    <p className="my-3">Video bài giảng chất lượng được thiết kế bám sát kiến thức của sách giáo khoa kết hợp mở rộng nâng cao - Giúp học sinh học chắc cơ bản - giỏi nâng cao.</p>
                                    <a href="/primary" className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius">Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeIn" data-wow-delay="0.3s">
                        <div className="text-center border-primary border bg-white service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-inner">
                                    <div className="p-4"><i className="fas fa-file fa-6x text-primary"></i></div>
                                    <a className="h4">Tài liệu bài giảng</a>
                                    <p className="my-3">Tài liệu bài giảng chi tiết kèm theo mỗi bài học giúp học sinh tổng kết và ghi nhớ các kiến thức trọng tâm, đồng thời mở rộng các kiến thức nâng cao.</p>
                                    <a href="/library" className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius">Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeIn" data-wow-delay="0.5s">
                        <div className="text-center border-primary border bg-white service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-inner">
                                    <div className="p-4"><i className="fas fa-question fa-6x text-primary"></i></div>
                                    <a className="h4">Kiểm tra Online</a>
                                    <p className="my-3">Kiểm tra online ngay sau mỗi bài học. Sau khi nộp bài, kết quả bài thi sẽ hiện ra. Phần kiểm tra online sẽ giúp các em ôn tập kiến thức và rèn luyện kĩ năng làm bài.</p>
                                    <a href="/review" className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius">Đọc thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid program  py-5">
            <div className="container py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{
                    maxWidth: "700px"
                }}>
                    <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Các chương trình học</h4>
                    <h1 className="mb-5 display-3">Chúng tôi cung cấp các chương trình học chất lượng</h1>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                        <div className="program-item rounded">
                            <div className="program-img position-relative">
                                <div className="overflow-hidden img-border-radius">
                                    <img src="img/library-1.jpg" className="img-fluid w-100" alt="Image"/>
                                </div>
                                <div className="px-4 py-2 bg-primary text-white program-rate">Miễn phí</div>
                            </div>
                            <div className="program-text bg-white px-4 pb-3">
                                <div className="program-text-inner">
                                    <a href="/primary" className="h4">Tin học 3 - Kết nối tri thức & cuộc sống</a>
                                </div>
                            </div>
                            <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
                                <img src="img/library-teacher.jpg" className="img-fluid rounded-circle p-2 border border-primary bg-white" alt="Image" style={{
                                    width: "70px", height: "70px"
                                }}/>
                                <div className="ms-3">
                                    <h6 className="mb-0 text-primary">Tech12h</h6>
                                    <small>Giáo viên</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                                <small className="text-white"><i className="fas fa-file me-1"></i> 17 Bài tập</small>
                                <small className="text-white"><i className="fas fa-book me-1"></i> 16 Bài học</small>
                                <small className="text-white"><i className="fas fa-clock me-1"></i> 2 Giờ</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.3s">
                        <div className="program-item rounded">
                            <div className="program-img position-relative">
                                <div className="overflow-hidden img-border-radius">
                                    <img src="img/library-2.jpg" className="img-fluid w-100" alt="Image"/>
                                </div>
                                <div className="px-4 py-2 bg-primary text-white program-rate">Miễn phí</div>
                            </div>
                            <div className="program-text bg-white px-4 pb-3">
                                <div className="program-text-inner">
                                    <a href="/secondary" className="h4">Tin học 6 - Kết nối tri thức & cuộc sống</a>
                                </div>
                            </div>
                            <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
                                <img src="img/library-teacher1.jpg" className="img-fluid rounded-circle p-2 border border-primary bg-white" alt="" style={{
                                    width: "70px", height: "70px"
                                }}/>
                                <div className="ms-3">
                                    <h6 className="mb-0 text-primary">Forlang World</h6>
                                    <small>Giáo viên</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                                <small className="text-white"><i className="fas fa-file me-1"></i> 18 Bài tập</small>
                                <small className="text-white"><i className="fas fa-book me-1"></i> 17 Bài học</small>
                                <small className="text-white"><i className="fas fa-clock me-1"></i> 12 Giờ</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.5s">
                        <div className="program-item rounded">
                            <div className="program-img position-relative">
                                <div className="overflow-hidden img-border-radius">
                                    <img src="img/library-3.jpg" className="img-fluid w-100" alt="Image"/>
                                </div>
                                <div className="px-4 py-2 bg-primary text-white program-rate">Miễn phí</div>
                            </div>
                            <div className="program-text bg-white px-4 pb-3">
                                <div className="program-text-inner">
                                    <a href="/high" className="h4">Tin học 10 - Kết nối tri thức & cuộc sống</a>
                                </div>
                            </div>
                            <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
                                <img src="img/library-teacher1.jpg" className="img-fluid rounded-circle p-2 border border-primary bg-white" alt="" style={{ width: "70px", height: "70px"}}/>
                                <div className="ms-3">
                                    <h6 className="mb-0 text-primary">Forlang World</h6>
                                    <small>Giáo viên</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                                <small className="text-white"><i className="fas fa-file me-1"></i> 35 Bài tập</small>
                                <small className="text-white"><i className="fas fa-book me-1"></i> 34 Bài học</small>
                                <small className="text-white"><i className="fas fa-clock me-1"></i> 18 Giờ</small>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline-block text-center wow fadeIn" data-wow-delay="0.1s">
                        <a href="#" className="btn btn-primary px-5 py-3 text-white btn-border-radius">Xem tất cả chương trình</a>
                    </div>
                </div> 
            </div>
        </div>

        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row1 g-5">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="footer-item">
                            <h2 className="fw-bold mb-3"><span className="text-primary mb-0">Elear</span><span className="text-secondary">ning</span></h2>
                            <p className="mb-4" style={{width: "600px"}}>
                                Elearning là một trải nghiệm học tập tuyệt vời, cung cấp những khóa học online chất lượng cao cho học sinh tiểu học, THCS và THPT. 
                                Với sự giảng dạy tận tâm của các giáo viên cùng phương pháp học tập cá nhân hóa và sự hỗ trợ của công nghệ giúp các em luôn hào
                                hứng trong việc học tập, nắm chắc được vấn đề từ đó hiểu sâu nhớ lâu và học thật tốt chương trình trên lớp cũng như đạt kết quả cao
                                trong các kỳ thi.</p>
                        </div>
                    </div>
        
                    <div className="col-md-6 col-lg-4 col-xl-3" style={{marginLeft: "330px"}}>
                        <div className="footer-item">
                            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Địa điểm</h4>
                            <div className="d-flex flex-column align-items-start">
                                <a className="text-body mb-4"><i className="fa fa-map-marker-alt text-primary me-2"></i> Thành phố Hồ Chí Minh</a>
                                <a className="text-start rounded-0 text-body mb-4"><i className="fa fa-phone-alt text-primary me-2"></i> (+84) 376 805 991</a>
                                <a className="text-start rounded-0 text-body mb-4"><i className="fas fa-envelope text-primary me-2"></i> ntruc1926@gmail.com</a>
                                <a className="text-start rounded-0 text-body mb-4"><i className="fa fa-clock text-primary me-2"></i> Thời gian làm việc 24/7</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="footer-item">
                            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Thư viện ảnh</h4>
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
                        <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2"></i>Elearning</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 my-auto text-center text-md-end text-white">
                        Designed By <a color="#ff4880">Thanh Trúc</a> Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>

        <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>   

        
    </>
  );
};

export default Home;
