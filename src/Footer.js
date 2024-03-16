import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'; // App.css 파일을 import합니다.

const Footer = () => {
  return (
    <div className="footer">
      <footer className=" py-3 text-white">
        <Container>
          <Row className="justify-content-between">
            <Col xs={3} className="footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title">연락처: 010-3798-1318 </span>
                </li>    
              </ul>
            </Col>
            <Col xs={3} className="footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title">이메일: yhb131618@naver.com</span>
                </li>    
              </ul>
            </Col>
            <Col xs={3} className="footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title">주소: 서울특별시 성동구 송정동 16길</span> 
                </li>
              </ul>
            </Col>
            <Col xs={3} className="footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title">© 2024 Yang Hongbin
                  </span>
                </li>
              </ul>
            </Col>         
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
