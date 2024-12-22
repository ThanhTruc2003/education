/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Liên hệ';
    const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            setUsername(savedUsername);
        }
  }, []);

  const handleAccountClick = () => {
    navigate('/information');
};

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setUsername('');
    navigate('/tao-tai-khoan');
};
  return (
    <>
        <div className="container-fluid border-bottom bg-light wow fadeIn" data-wow-delay="0.1s">
            <div className="container topbar bg-primary d-none d-lg-block py-2" style={{ borderRadius: '0 40px' }}>
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
                    <a href="/home" className="navbar-brand"><h1 className="text-primary display-6">Elear<span className="text-secondary">ning</span></h1></a>
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
                                <a href="" className="position-relative wow tada" data-wow-delay=".9s" >
                                    <i className="fa fa-phone-alt text-primary fa-2x me-4"></i>
                                    <div className="position-absolute" style={{ top: '-7px', left: '20px' }}>
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
                                    <p className="dropdown-item" >
                                    <span style={{ fontWeight: 'lighter', cursor: "pointer"}} onClick={handleAccountClick} >Tài khoản:</span> {username}
                                    </p>
                                        <button onClick={handleLogout} className="dropdown-item">Đăng xuất</button>
                                    </div>
                                </div>
                                ) : (
                                    <a href="/tao-tai-khoan" className="btn btn-primary px-4 py-3 btn-border-radius">Tạo tài khoản</a>
                                )}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        
        <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4">Liên hệ</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="/home">Trang chủ</a></li>
                        <li className="breadcrumb-item text-white" aria-current="page">Liên hệ</li>
                    </ol>
                </nav>
            </div>
        </div>


        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="p-5 bg-light rounded">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '700px' }}>
                        <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Liên hệ với chúng tôi</h4>
                        <h1 className="display-3">Hãy liên hệ cho chúng tôi nếu như bạn đang có thắc mắc</h1>
                    </div>
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex w-1001 border border-primary p-4 rounded bg-white">
                                <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                <div className="">
                                    <h4>Địa chỉ</h4>
                                    <p className="mb-2">Thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex w-1001 border border-primary p-4 rounded bg-white">
                                <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                <div className="">
                                    <h4>Email</h4>
                                    <p className="mb-2">ntruc1926@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex w-1001 border border-primary p-4 rounded bg-white">
                                <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                <div className="">
                                    <h4>Số điện thoại</h4>
                                    <p className="mb-2">(+84) 376 805 991</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="border border-primary rounded">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501715.500659255!2d106.35552640622468!3d10.761253727966677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eefdb25d923%3A0x4bcf54ddca2b7214!2zSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1733666569610!5m2!1svi!2s" 
                                className="w-100 rounded" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
}

export default Contact;