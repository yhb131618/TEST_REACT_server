import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import Footer from './Footer';
import Header from './Header';
function App() {

  const [selectedKey, setSelectedKey] = useState('');

  const handleSelect = (selectedKey) => {
    window.location.href = selectedKey;
    setSelectedKey(selectedKey);
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const presentations = [
    "https://docs.google.com/presentation/d/14mmQ1O414RyY2TDZZoZuzTHC6HdRjx7mAjhPuvHfHtg/?start=false&loop=false&delayms=3000",

  ];
  const handleNext = () => {
    setActiveSlide((prevActiveSlide) => (prevActiveSlide + 1) % presentations.length);
  };

  const handlePrev = () => {
    setActiveSlide((prevActiveSlide) => (prevActiveSlide - 1 + presentations.length) % presentations.length);
  };

  const projects = [
  
    { name: 'Project_SpringBoot', path: '/Type3' },
    { name: 'TEST_Deploy_Jenkins', path: '/Type1' },
    { name: 'TEST_Deploy_K8S', path: '/Type2' },
    { name: 'Server_Minio', path: 'https://56ca-118-32-146-229.ngrok-free.app/login' },
    { name: 'Server_Harbor', path: 'https://c291-118-32-146-229.ngrok-free.app/harbor/sign-in?redirect_url=%2Fharbor%2Fprojects' },
    { name: 'Server_Jenkins', path: 'https://0f63-118-32-146-229.ngrok-free.app/login?from=%2F' },


    // 나머지 프로젝트 정보 추가
  ];

  return (
    <div className='background'>
      <div className="title">
        <Header />
      </div>

      <div className="app-container">
        
        <Row>
          <Col md={4} className="sidebar-column">
            <div className="nav-table"> {/* 테이블처럼 보이도록 추가된 div */}
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`nav-table-row ${selectedKey === project.path ? 'selected' : ''}`}
                  onClick={() => handleSelect(project.path)}
                >
                  {project.name}
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row>       
        <Col className="presentation-container">
          <iframe
            src={presentations[activeSlide]}
            frameBorder="0"
            allowFullScreen={true}
            title="Google Presentation"
          ></iframe>
        </Col>
        </Row>

        {/* <Row>
          <div className="side">
          <Col md={12} className="text-center mt-3">
              <div className="slide_button">
              <Button variant="primary" onClick={handlePrev}>&laquo; 이전</Button>
              </div>
              {' '}
              <div className="slide_button">
              <Button variant="primary" onClick={handleNext}>다음 &raquo;</Button>
              </div> 
          </Col>    
          </div>     
        </Row>    */}
             
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
