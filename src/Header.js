// header.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 직접 import합니다.
import React from 'react';
import './Header.css'; // App.css 파일을 import합니다.

const Header = () => {
  return (
    <header>
      {/* 헤더 네비게이션 바 */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">YHB Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="linkbutton">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              
              <a className="nav-link" href="https://github.com/yhb131618?tab=repositories">
               <div className="headerlink">
                GitHub
                </div>
                <span className="sr-only">(current)</span></a>
              
            </li>
            <li className="nav-item">
            <a className="nav-link" href="https://yhb131618.github.io/">
              <div className="headerlink">
                블로그
                </div>
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://yhb131618.github.io/about-me/">
              <div className="headerlink">
                이력서
              </div>  
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://yhb131618.github.io/about-me/%EC%9E%90%EA%B2%A9%EC%A6%9D/">
              <div className="headerlink">
            
                자격증
                </div>
                </a>
             
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </header>

  );
}

export default Header;
