/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import qs from "qs";
import ExamFilter from "../components/Review/ExamFilter";
import { useNavigate } from 'react-router-dom';

const Review = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedClass, setExpandedClass] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [Exams, setExam] = useState([]);
  const [selectedExams, setSelectedExams] = useState([]);
  const [showExamFilter, setShowExamFilter] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState(null);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const toggleExpand = (event, categoryId, childId) => {
    event.preventDefault();
    const newExpandedClass = `${categoryId}_${childId}`;
    setExpandedClass((prev) => (prev === newExpandedClass ? null : newExpandedClass));
  };
  
  const handleContentSelect = async (event, content, categoryIds) => {
    event.preventDefault();
    setSelectedContent(content);
    console.log(content);
    
    if (categoryIds.length === 3) {
      try {
        const query = qs.stringify({
          filters: {
            $and: [
              { exam_categories: { $eq: categoryIds[0] } },
              { exam_categories: { $eq: categoryIds[1] } },
              { exam_categories: { $eq: categoryIds[2] } },
            ]
          },
          populate: "*"
        }, {
          encodeValuesOnly: true
        });

        const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/exams?${query}`);
        const data = await response.json();
        setSelectedExams(data.data || []);
      } catch (error) {
        console.error("Lỗi khi tải đề thi:", error);
        setSelectedExams([]);
      }
    }
  };

  const handleExamClick = (exam) => {
    setSelectedExamId(exam.id);
    setShowExamFilter(true);
  };

  useEffect(() => {
    document.title = "Góc ôn luyện";
    const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            setUsername(savedUsername);
        }
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const query = qs.stringify({
          filters: {
            parent: {
              $null: true
            }
          },
          populate: [
            'children',
            'children.children.exams'
          ],
        });

        const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/exam-categories?${query}`);
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error("Lỗi khi tải danh mục:", error);
      }
      setIsLoading(false);
    };

    fetchCategories();
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

  // Phần render sidebar
  const renderSidebar = () => (
    <div className="col-lg-3 wow fadeIn" data-wow-delay="0.1s">
      <div className="bg-light p-4 rounded border border-2 border-primary">
        <h4 className="text-white mb-4 pb-2 border-bottom border-primary bg-primary p-2 rounded"
            style={{ textAlign: "center" }}>
          Danh mục đề thi
        </h4>
        
        {isLoading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Đang tải...</span>
            </div>
          </div>
        ) : (
          categories
            .sort((a, b) => {
              // Lấy số lớp từ tên (ví dụ: "Lớp 3" -> 3)
              const getGradeNumber = (name) => parseInt(name.replace("Lớp ", ""));
              return getGradeNumber(a.name) - getGradeNumber(b.name);
            })
            .map((category) => (
              <div key={category.id} className="mb-4 wow fadeIn" data-wow-delay="0.2s">
                <h5 className="border-bottom border-secondary pb-2">
                  {category.name}
                </h5>
                <div className="nav flex-column">
                  {category.children
                    .map((child) => (
                      <div key={child.id}>
                        <a href=""
                           className="nav-link text-dark border-bottom border-light py-2 ps-3 hover-bg"
                           onClick={(event) => toggleExpand(event, category.id, child.id)}>
                          {child.name}
                          <i className={`fas ${
                            expandedClass === `${category.id}_${child.id}` ? "fa-angle-down" : "fa-angle-right"
                          } ms-2`}></i>
                        </a>
                        {expandedClass === `${category.id}_${child.id}` && (
                          <div className="nav flex-column ps-4">
                            {child.children?.map((semester) => (
                              <div key={semester.id}>
                                <a href=""
                                   className={`nav-link text-dark border-bottom border-light py-2 ps-3 hover-bg ${
                                     selectedContent === `${category.name}_${child.name}_${semester.name}`
                                       ? 'active'
                                       : ''
                                   }`}
                                   onClick={(event) => {
                                     handleContentSelect(event, `${category.name}_${child.name}_${semester.name}`, [category.id, child.id, semester.id]);
                                   }}>
                                  {semester.name}
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );

  return (
    <>
      <div
        className="container-fluid border-bottom bg-light wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          className="container topbar bg-primary d-none d-lg-block py-2"
          style={{ borderRadius: "0 40px" }}
        >
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>{" "}
                <a className="text-white">Thành phố Hồ Chí Minh</a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ntruc1926@gmail.com"
                  target="_blank"
                  className="text-white"
                >
                  ntruc1926@gmail.com
                </a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a href="" className="btn btn-light btn-sm-square rounded-circle">
                <i className="fab fa-facebook-f text-secondary"></i>
              </a>
              <a href="" className="btn btn-light btn-sm-square rounded-circle">
                <i className="fab fa-twitter text-secondary"></i>
              </a>
              <a href="" className="btn btn-light btn-sm-square rounded-circle">
                <i className="fab fa-instagram text-secondary"></i>
              </a>
              <a
                href=""
                className="btn btn-light btn-sm-square rounded-circle me-0"
              >
                <i className="fab fa-linkedin-in text-secondary"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light navbar-expand-xl py-3">
            <a href="/home" className="navbar-brand">
              <h1 className="text-primary display-6">
                Elear<span className="text-secondary">ning</span>
              </h1>
            </a>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Khóa học
                  </a>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <a href="/primary" className="dropdown-item">
                      Tiểu học
                    </a>
                    <a href="/secondary" className="dropdown-item">
                      THCS
                    </a>
                    <a href="/high" className="dropdown-item">
                      THPT
                    </a>
                  </div>
                </div>
                <a href="/about" className="nav-item nav-link">
                  Giới thiệu
                </a>
                <a href="/review" className="nav-item nav-link">
                  Góc ôn luyện
                </a>
                <a href="/library" className="nav-item nav-link">
                  Thư viện
                </a>
                <a href="/contact" className="nav-item nav-link">
                  Liên hệ
                </a>
              </div>
              <div className="d-flex me-4">
                <div
                  id="phone-tada"
                  className="d-flex align-items-center justify-content-center"
                >
                  <a
                    href=""
                    className="position-relative wow tada"
                    data-wow-delay=".9s"
                  >
                    <i className="fa fa-phone-alt text-primary fa-2x me-4"></i>
                    <div
                      className="position-absolute"
                      style={{ top: "-7px", left: "20px" }}
                    >
                      <span>
                        <i className="fa fa-comment-dots text-secondary"></i>
                      </span>
                    </div>
                  </a>
                </div>
                <div className="d-flex flex-column pe-3 border-end border-primary">
                  <span className="text-primary">Bạn có thắc mắc?</span>
                  <a>
                    <span className="text-secondary">0376 805 991</span>
                  </a>
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

      <div
        className="container-fluid page-header py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4">Góc ôn luyện</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="/home">Trang chủ</a>
              </li>
              <li className="breadcrumb-item text-white" aria-current="page">
                Góc ôn luyện
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-fluid program py-5">
        <div className="container py-5">
          <div className="row">
            {renderSidebar()}
            
            {/* Nội dung chính */}
            <div className="col-lg-9 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-light p-4 rounded border border-2 border-primary">
                <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom border-primary">
                  <h4 className="text-primary mb-0">
                    Đề thi
                  </h4>
                  {showExamFilter && (
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setShowExamFilter(false)}
                    >
                      <i className="fas fa-arrow-left me-2"></i>
                      Quay lại
                    </button>
                  )}
                </div>
                
                {showExamFilter ? (
                  <ExamFilter setExam={setExam} examId={selectedExamId} />
                ) : (
                  <>
                    {selectedExams.length > 0 ? (
                      <>
                        {selectedExams.map((exam) => (
                          <div 
                            key={exam.id} 
                            className="d-flex justify-content-between align-items-center mb-3 p-2 bg-white rounded shadow-sm"
                            onClick={() => handleExamClick(exam)}
                            style={{ cursor: 'pointer' }}
                          >
                            <h6 className="mb-0">{exam.name}</h6>
                            <h6 className="text-primary" style={{marginTop: ".5rem"}}>Thời gian: {exam.time} phút</h6>
                          </div>
                        ))}
                      </>
                    ) : (
                      <p>Vui lòng chọn danh mục ở bên phải để xem danh sách đề thi.</p>
                    )}
                  </>
                )}
              </div>            
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-item">
                <h2 className="fw-bold mb-3">
                  <span className="text-primary mb-0">Elear</span>
                  <span className="text-secondary">ning</span>
                </h2>
                <p className="mb-4" style={{ width: "600px" }}>
                  Elearning là một trải nghiệm học tập tuyệt vời, cung cấp những
                  khóa học online chất lượng cao cho học sinh tiểu học, THCS và
                  THPT. Với sự giảng dạy tận tâm của các giáo viên cùng phương
                  pháp học tập cá nhân hóa và sự hỗ trợ của công nghệ giúp các
                  em luôn hào hứng trong việc học tập, nắm chắc được vấn đề từ
                  đó hiểu sâu nhớ lâu và học thật tốt chương trình trên lớp cũng
                  như đạt kết quả cao trong các kỳ thi.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 col-xl-3"
              style={{ marginLeft: "330px" }}
            >
              <div className="footer-item">
                <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                  Địa điểm
                </h4>
                <div className="d-flex flex-column align-items-start">
                  <a className="text-body mb-4">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>{" "}
                    Thành phố Hồ Chí Minh
                  </a>
                  <a className="text-start rounded-0 text-body mb-4">
                    <i className="fa fa-phone-alt text-primary me-2"></i> (+84)
                    376 805 991
                  </a>
                  <a className="text-start rounded-0 text-body mb-4">
                    <i className="fas fa-envelope text-primary me-2"></i>{" "}
                    ntruc1926@gmail.com
                  </a>
                  <a className="text-start rounded-0 text-body mb-4">
                    <i className="fa fa-clock text-primary me-2"></i> Thời gian
                    làm việc 24/7
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-item">
                <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                  Thư viện ảnh
                </h4>
                <div className="row g-3">
                  <div className="col-4">
                    <div className="footer-galary-img rounded-circle border border-primary">
                      <img
                        src="img/galary-1.jpg"
                        className="img-fluid rounded-circle p-2"
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-galary-img rounded-circle border border-primary">
                      <img
                        src="img/galary-2.jpg"
                        className="img-fluid rounded-circle p-2"
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-galary-img rounded-circle border border-primary">
                      <img
                        src="img/galary-3.jpg"
                        className="img-fluid rounded-circle p-2"
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-galary-img rounded-circle border border-primary">
                      <img
                        src="img/galary-4.jpg"
                        className="img-fluid rounded-circle p-2"
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-galary-img rounded-circle border border-primary">
                      <img
                        src="img/galary-5.jpg"
                        className="img-fluid rounded-circle p-2"
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-galary-img rounded-circle border border-primary">
                      <img
                        src="img/galary-6.jpg"
                        className="img-fluid rounded-circle p-2"
                        alt=""
                      ></img>
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
              <span className="text-light">
                <a href="#">
                  <i className="fas fa-copyright text-light me-2"></i>Elearning
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 my-auto text-center text-md-end text-white">
              Designed By <a color="#ff4880">Thanh Trúc</a> Distributed By{" "}
              <a className="border-bottom" href="https://themewagon.com">
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Review;
