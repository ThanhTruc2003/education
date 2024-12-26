import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ExamFilter({setExam}) {
  const [ExamList, setExamList] = useState([]);
  const [currentExam, setCurrentExam] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0, total: 0 });
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    fetchExam();
  }, []);

  useEffect(() => {
    if (currentExam && isStarted && !showResults) {
      setTimeLeft(currentExam.time * 60);
      
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentExam, isStarted, showResults]);

  const formatTime = (seconds) => {
    if (seconds === null) return "00 phút 00 giây";
    
    const totalSeconds = currentExam.time * 60;
    const elapsedSeconds = totalSeconds - seconds;
    
    const minutes = Math.floor((totalSeconds - elapsedSeconds) / 60);
    const remainingSeconds = (totalSeconds - elapsedSeconds) % 60;

    return `${minutes.toString().padStart(2, '0')} phút ${remainingSeconds.toString().padStart(2, '0')} giây`;
  };

  const formatElapsedTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} phút ${remainingSeconds.toString().padStart(2, "0")} giây`;
  };

  const fetchExam = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/exams?populate[0]=questions&populate[1]=questions.answers`);
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        setExamList(data.data);
        setCurrentExam(data.data[0]);
        setQuestions(data.data[0].questions);
        setTimeLeft(data.data[0].time * 60);
      }
    } catch (error) {
      console.error('Lỗi khi tải bài tập:', error);
    }
  };

  const handleStart = () => {
    if (!localStorage.getItem('userId')) {
        toast.warning('Vui lòng đăng nhập để làm bài');
        return;
    }
    setIsStarted(true);
  };

  const handleAnswerSelect = (questionId, answerId) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
    setErrors(prev => ({
      ...prev,
      [questionId]: false
    }));
  };

  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
  
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleSubmit = () => {
    const newErrors = {};
    let hasUnanswered = false;
    
    questions.forEach(question => {
      if (!answers[question.id]) {
        newErrors[question.id] = true;
        hasUnanswered = true;
      }
    });

    if (hasUnanswered) {
      setErrors(newErrors);
      const firstUnansweredQuestion = document.querySelector('.question-error');
      if (firstUnansweredQuestion) {
        firstUnansweredQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      setShowConfirmModal(true);
    }
  };

  const handleConfirmSubmit = async () => {
    let correctCount = 0;
    let wrongCount = 0;
    
    questions.forEach(question => {
      const selectedAnswer = answers[question.id];
      const correctAnswer = question.answers.find(answer => answer.check === true);
      
      if (selectedAnswer) {
        if (selectedAnswer === correctAnswer.id) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    });

    const totalSeconds = currentExam.time * 60;
    const elapsedSeconds = totalSeconds - timeLeft;
    
    const scoreData = {
      data: {
        user: localStorage.getItem('userId'), // Lấy từ localStorage
        day: getCurrentDate(),
        exam: currentExam.id, // ID bài tập
        correct: correctCount, // Số câu đúng
        wrong: wrongCount, // Số câu sai
        total: questions.length, // Tổng số câu hỏi
        elapsedTime: elapsedSeconds, // Thời gian làm bài
      },
      
    };
   
    try {
      const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/score-exams`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(scoreData),
        
      });

      if (!response.ok) {
        throw new Error('Lỗi khi lưu điểm số');
      }
  
      const result = await response.json();
      console.log('Lưu điểm số thành công:', result);
    } catch (error) {
      console.error('Lỗi khi lưu điểm số:', error);
    }

    setScore({
      day: getCurrentDate(),
      correct: correctCount,
      wrong: wrongCount,
      total: questions.length,
      elapsedTime: elapsedSeconds,
    });

    setShowResults(true);
    setShowConfirmModal(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = date.getFullYear();
  
    return `${dd}/${mm}/${yyyy}`;
  };

  const fetchScoreData = async () => {
    const userId = localStorage.getItem('userId');
    const examId = currentExam.id;
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/api/score-exams?filters[$and][0][user][$eq]=${userId}&filters[$and][1][exam][$eq]=${examId}&populate=*`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch score data');
      }

      const data = await response.json();
    const formattedData = data.data.map(score => ({
      ...score,
      day: formatDate(score.day) // Assuming 'day' is the date field from the API
    }));
    setScoreData(formattedData);
  } catch (error) {
    console.error('Error fetching score data:', error);
  }
  };

  useEffect(() => {
    if (currentExam && currentExam.id) {
      fetchScoreData();
    }
  }, [currentExam]);

  return (
    <>
    <div className="container mt-4 wow fadeIn">
      <h4 className="text-center" style={{fontSize: '3rem', lineHeight: '1.5'}}>{currentExam ? currentExam.name : 'Loading...'}</h4>
      <ToastContainer />
      <div className="text-center mt-4">
      {!isStarted ? (
          <> 
            <h6 style={{textAlign: "justify", marginBottom: "1rem"}}>Kết quả làm bài của bạn:</h6>         
            <table className="table table-bordered" style={{borderColor: "black"}}>
              <thead>
                <tr>
                  <th scope="col">Ngày làm</th>
                  <th scope="col">Số câu đúng</th>
                  <th scope="col">Số câu sai</th>
                  <th scope="col">Thời gian làm bài</th>
                </tr>
              </thead>
              <tbody>
                {scoreData && scoreData.length > 0 ? (
                  scoreData.map((score) => (
                    <tr key={score.id}>
                      <td>{score.day}</td>
                      <td>{score.correct}/{questions.length}</td>
                      <td>{score.wrong}/{questions.length}</td>
                      <td>{formatElapsedTime(score.elapsedTime)}</td>
                    </tr>
                  ))
                ) : (
                    <tr>
                  <td colSpan="4">Chưa có dữ liệu điểm số</td>
                  </tr>
                )}
              </tbody>
            </table>
            <button 
              className="btn btn-primary btn-lg mb-4"
              onClick={handleStart}
            >Bắt đầu làm bài
            </button>
          </>
        ) : (
          <h4 className="text-primary wow fadeIn mt-3">
            Thời gian còn lại: {formatTime(timeLeft)}
          </h4>
        )}
      </div>

      {isStarted && (
        <>
        {showResults && (
            <div className="results-summary text-center mt-4 mb-4 wow fadeIn">
              <div className="alert alert-info">
                <h4>Kết quả:</h4>
                <p className="mb-1" style={{fontWeight: "600"}}>
                  Số câu đúng: <span className="text-success">{score.correct}</span>/{score.total}
                </p>
                <p className="mb-0" style={{fontWeight: "600"}}>
                  Số câu sai: <span className="text-danger">{score.wrong}</span>/{score.total}
                </p>
                <p className="mb-0" style={{ fontWeight: "600" }}>
                  Thời gian hoàn thành:{" "}
                  <span className="text-primary">{formatElapsedTime(score.elapsedTime)}</span>
                </p>
              </div>
            </div>
          )}
          <div>
            {questions.map((question) => (
              <div 
                key={question.id} 
                className={`card mb-4 ${errors[question.id] ? 'question-error' : ''}`}
                style={{
                  border: errors[question.id] ? '1px solid #dc3545' : '1px solid rgba(0,0,0,.125)', 
                  marginTop: '2rem'
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">{question.name}</h5>
                  
                  {question.answers && question.answers.length > 0 && (
                    <div className="answers-list mt-3" style={{marginLeft: '1rem'}}>
                      {question.answers.map((answer) => (
                        <div 
                          key={answer.id} 
                          className={`form-check mb-2 ${
                            showResults ? 
                              answer.check ? 'text-success' : 
                              answers[question.id] === answer.id ? 'text-danger' : 
                              '' 
                            : ''
                          }`}
                          style={{
                            backgroundColor: showResults ? 
                              answer.check ? 'rgba(25, 135, 84, 0.1)' : 
                              answers[question.id] === answer.id ? 'rgba(220, 53, 69, 0.1)' : 
                              'transparent'
                            : 'transparent',
                            borderRadius: '5px'
                          }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`question-${question.id}`}
                            id={`answer-${answer.id}`}
                            checked={answers[question.id] === answer.id}
                            onChange={() => handleAnswerSelect(question.id, answer.id)}
                            disabled={showResults}
                          />
                          <label className="form-check-label" style={{fontSize: 'large'}} htmlFor={`answer-${answer.id}`}>
                            {answer.name}
                            {showResults && answer.check && (
                              <i className="fas fa-check ms-2 text-success"></i>
                            )}
                            {showResults && !answer.check && answers[question.id] === answer.id && (
                              <i className="fas fa-times ms-2 text-danger"></i>
                            )}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {errors[question.id] && (
                    <div className="text-danger mt-2" style={{fontSize: '0.875rem'}}>
                      Vui lòng chọn đáp án
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {!showResults && (
            <div className="text-center mt-4 mb-5">
              <button 
                className="btn btn-primary btn-lg"
                onClick={handleSubmit}
              >
                Nộp bài
              </button>
            </div>
          )}

          {showConfirmModal && (
            <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Xác nhận nộp bài</h5>
                    <button 
                      type="button" 
                      className="btn-close"
                      onClick={() => setShowConfirmModal(false)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Bạn chắc chắn muốn nộp bài?</p>
                  </div>
                  <div className="modal-footer">
                  <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={handleConfirmSubmit}
                    >Nộp bài
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setShowConfirmModal(false)}
                    >Quay lại
                    </button>    
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
    </>
  );
}

export default ExamFilter;