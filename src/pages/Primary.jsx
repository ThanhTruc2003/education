/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';

const Primary = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  useEffect(() => {
    document.title = 'Tiểu học';
  }, []);

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
                                    <a href="/team" className="dropdown-item">THCS</a>
                                    <a href="/testimonial" className="dropdown-item">THPT</a>
                                </div>
                            </div>
                            <a href="/about" className="nav-item nav-link">Giới thiệu</a>
                            <a href="/service" className="nav-item nav-link">Góc ôn luyện</a>
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
                        <h5 className="modal-title" id="exampleModalLabel">Tìm kiếm khóa học</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control p-3" placeholder="Khóa học..." aria-describedby="search-icon-1"></input>
                            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4">Tiểu học</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="/home">Trang chủ</a></li>
                        <li className="breadcrumb-item"><a>Khóa học</a></li>
                        <li className="breadcrumb-item text-white" aria-current="page">Tiểu học</li>
                    </ol>
                </nav>
            </div>
        </div>


        <div className="container-fluid blog py-5">
            <div className="container py-5">
                <div className="row g-4">
                    {/* Lớp 3 */}
                    <div className="col-md-12 mb-4">
                        <div className="card border-2 border-primary shadow-sm" style={{ borderColor: '#ff4880 !important' }}>
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Lớp 3</h4>
                            </div>
                            <div className="card-body">
                                <div className="list-group">
                                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                                       data-bs-toggle="collapse" 
                                       href="#collapseBai1Lop3"
                                       onClick={() => toggleExpand('bai1Lop3')}>
                                        Bài 1
                                        <i className={`fas ${expandedItems['bai1Lop3'] ? 'fa-angle-down' : 'fa-angle-right'}`}></i>
                                    </a>
                                    <div className="collapse" id="collapseBai1Lop3">
                                        <a href="/primary/lop3/bai1-1" className="list-group-item list-group-item-action ps-5">Bài 1.1</a>
                                        <a href="/primary/lop3/bai1-2" className="list-group-item list-group-item-action ps-5">Bài 1.2</a>
                                    </div>

                                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                                       data-bs-toggle="collapse" 
                                       href="#collapseBai2Lop3"
                                       onClick={() => toggleExpand('bai2Lop3')}>
                                        Bài 2
                                        <i className={`fas ${expandedItems['bai2Lop3'] ? 'fa-angle-down' : 'fa-angle-right'}`}></i>
                                    </a>
                                    <div className="collapse" id="collapseBai2Lop3">
                                        <a href="/primary/lop3/bai2-1" className="list-group-item list-group-item-action ps-5">Bài 2.1</a>
                                        <a href="/primary/lop3/bai2-2" className="list-group-item list-group-item-action ps-5">Bài 2.2</a>
                                    </div>

                                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                                       data-bs-toggle="collapse" 
                                       href="#collapseBai3Lop3"
                                       onClick={() => toggleExpand('bai3Lop3')}>
                                        Bài 3
                                        <i className={`fas ${expandedItems['bai3Lop3'] ? 'fa-angle-down' : 'fa-angle-right'}`}></i>
                                    </a>
                                    <div className="collapse" id="collapseBai3Lop3">
                                        <a href="/primary/lop3/bai3-1" className="list-group-item list-group-item-action ps-5">Bài 3.1</a>
                                        <a href="/primary/lop3/bai3-2" className="list-group-item list-group-item-action ps-5">Bài 3.2</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lớp 4 */}
                    <div className="col-md-12 mb-4">
                        <div className="card border-2 border-primary shadow-sm" style={{ borderColor: '#ff4880 !important' }}>
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Lớp 4</h4>
                            </div>
                            <div className="card-body">
                                <div className="list-group">
                                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                                       data-bs-toggle="collapse" 
                                       href="#collapseBai1Lop4">
                                        Bài 1
                                        <i className="fas fa-angle-right"></i>
                                    </a>
                                    <div className="collapse" id="collapseBai1Lop4">
                                        <a href="/primary/lop4/bai1-1" className="list-group-item list-group-item-action ps-5">Bài 1.1</a>
                                        <a href="/primary/lop4/bai1-2" className="list-group-item list-group-item-action ps-5">Bài 1.2</a>
                                    </div>

                                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                                       data-bs-toggle="collapse" 
                                       href="#collapseBai2Lop4">
                                        Bài 2
                                        <i className="fas fa-angle-right"></i>
                                    </a>
                                    <div className="collapse" id="collapseBai2Lop4">
                                        <a href="/primary/lop4/bai2-1" className="list-group-item list-group-item-action ps-5">Bài 2.1</a>
                                        <a href="/primary/lop4/bai2-2" className="list-group-item list-group-item-action ps-5">Bài 2.2</a>
                                    </div>

                                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                                       data-bs-toggle="collapse" 
                                       href="#collapseBai3Lop4">
                                        Bài 3
                                        <i className="fas fa-angle-right"></i>
                                    </a>
                                    <div className="collapse" id="collapseBai3Lop4">
                                        <a href="/primary/lop4/bai3-1" className="list-group-item list-group-item-action ps-5">Bài 3.1</a>
                                        <a href="/primary/lop4/bai3-2" className="list-group-item list-group-item-action ps-5">Bài 3.2</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lớp 5 */}
                    <div className="col-md-12 mb-4">
                        <div className="card border-2 border-primary shadow-sm" style={{ borderColor: '#ff4880 !important' }}>
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Lớp 5</h4>
                            </div>
                            <div className="card-body">
                                <div className="list-group">
                                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                                       data-bs-toggle="collapse" 
                                       href="#collapseBai1Lop5">
                                        Bài 1
                                        <i className="fas fa-angle-right"></i>
                                    </a>
                                    <div className="collapse" id="collapseBai1Lop5">
                                        <a href="/primary/lop5/bai1-1" className="list-group-item list-group-item-action ps-5">Bài 1.1</a>
                                        <a href="/primary/lop5/bai1-2" className="list-group-item list-group-item-action ps-5">Bài 1.2</a>
                                    </div>

                                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                                       data-bs-toggle="collapse" 
                                       href="#collapseBai2Lop5">
                                        Bài 2
                                        <i className="fas fa-angle-right"></i>
                                    </a>
                                    <div className="collapse" id="collapseBai2Lop5">
                                        <a href="/primary/lop5/bai2-1" className="list-group-item list-group-item-action ps-5">Bài 2.1</a>
                                        <a href="/primary/lop5/bai2-2" className="list-group-item list-group-item-action ps-5">Bài 2.2</a>
                                    </div>

                                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                                       data-bs-toggle="collapse" 
                                       href="#collapseBai3Lop5">
                                        Bài 3
                                        <i className="fas fa-angle-right"></i>
                                    </a>
                                </div>
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
                                <a href="" className="text-body mb-4"><i className="fa fa-map-marker-alt text-primary me-2"></i> Thành phố Hồ Chí Minh</a>
                                <a href="" className="text-start rounded-0 text-body mb-4"><i className="fa fa-phone-alt text-primary me-2"></i> (+84) 376 805 991</a>
                                <a href="" className="text-start rounded-0 text-body mb-4"><i className="fas fa-envelope text-primary me-2"></i> ntruc1926@gmail.com</a>
                                <a href="" className="text-start rounded-0 text-body mb-4"><i className="fa fa-clock text-primary me-2"></i> Thời gian làm việc 24/7</a>
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

export default Primary;