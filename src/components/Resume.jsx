import React from "react";
const Resume = () => {
  return (
    <div className="containerr">
      <div className="resume">
        <div className="box"></div>
        <span>Resume</span>
      </div>
      <div className="column">
        <div className="sign_buttons">
          <span>Skills</span>
          <a
            className="butten btn btn-outline-primary"
            href="CV\vladyslav_kolomiiets_cv.pdf"
            target="_blank"
            download
          >
            Download CV
          </a>
        </div>
        <div className="white_part">
          <div className="card h-100">
            <div className="card-body">
              <small>HTML/CSS</small>
              <div className="html progress mb-3">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>BASH</small>
              <div className="bash progress mb-3">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>JavaScript</small>
              <div className="js progress mb-3">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>React.js</small>
              <div className="reactt progress mb-3">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>Vue.js</small>
              <div className="vuee progress mb-3">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="66"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>Git</small>
              <div className="git progress mb-3">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="66"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>C++</small>
              <div className="cpp progress mb-3">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="66"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
