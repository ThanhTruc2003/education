import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import qs from 'qs';

function Video() {
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const { gradeName, bookName, lessonName, itemName } = useParams();

  useEffect(() => {
    fetchVideo();
  }, [gradeName, bookName, lessonName, itemName]);

  const fetchVideo = async () => {
    const query = qs.stringify({
      filters: {
        $and: [
          { course_categories: { name: { $eq: gradeName.replace(/-/g, ' ') } } },
          { course_categories: { name: { $eq: bookName.replace(/-/g, ' ') } } },
          { course_categories: { name: { $eq: lessonName.replace(/-/g, ' ') } } },
          { course_categories: { name: { $eq: itemName.replace(/-/g, ' ') } } },
        ],
      },
      populate: '*',
    }, {
      encodeValuesOnly: true,
    });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/lessons?${query}`);
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        setVideoList(data.data);
        setCurrentVideo(data.data[0]);
        document.title = data.data[0].name;
      }
    } catch (error) {
      console.error('Lỗi khi tải video:', error);
    }
  };

  const getEmbedUrl = (url) => {
    if (url.includes('youtu.be')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    if (url.includes('/embed/')) {
      const videoId = url.split('/embed/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <>
      <div className="container-fluid border-bottom bg-light wow fadeIn" data-wow-delay="0.1s">
        <div className="container px-0">
          <nav className="navbar navbar-light navbar-expand-xl py-3" style={{justifyContent: "center"}}>
            <a href="/home" className="navbar-brand">
              <h1 className="text-primary display-6">ELear<span className="text-secondary">ning</span></h1>
            </a>
          </nav>
        </div>
      </div>

      <div className="container mt-3">
        <button 
          className="btn btn-secondary mb-2"
          onClick={() => window.history.back()}
        >
          <i className="fas fa-arrow-left me-2"></i>
          Quay lại
        </button>

        {currentVideo && (
          <div>          
            <div className="ratio ratio-21x9">
              <iframe
                src={getEmbedUrl(currentVideo.url)}
                title={currentVideo.name}
                allowFullScreen
              ></iframe>
            </div>
            <h4 className="mb-3 mt-3">{currentVideo.name}</h4>
            <div className="mt-2 d-flex gap-4">
              <div className="d-flex align-items-center">
                <i className="fas fa-user-circle me-2 mb-1 text-primary"></i>
                <h6 className="mb-0">Tác giả: {currentVideo.author}</h6>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-play-circle me-2 mb-1 text-primary"></i>
                <h6 className="mb-0">Thời lượng: {currentVideo.time}</h6>
              </div>
            </div>
          </div>
        )}

        {videoList.length > 1 && (
          <div className="mt-4">
            <div className="list-group">
              {videoList.map((video, index) => (
                <button
                  key={video.id}
                  className={`list-group-item list-group-item-action ${currentVideo.id === video.id ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentVideo(video);
                    document.title = video.name;
                  }}
                >
                  {index + 1}. {video.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Video;