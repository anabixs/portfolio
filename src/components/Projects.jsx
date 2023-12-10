import React from "react";
import mogo from "./photo/mogo.jpg";
import buisness from "./photo/buisness.jpg";
import api from "./photo/api.jpg";
import gadgetDoctor from "./photo/GD.jpg";
const Project = () => {
  return (
    <div className="containerr projecttt">
      <div className="projects">
        <div className="box"></div>
        <span>Projects</span>
      </div>

      <div className="projects row">
        <a className="proj" href="\mogo\index.html">
          <img src={mogo} alt="Mogo Landing" width="350px"></img>
          <div className="caption">
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </a>
        <a className="proj ml-2" href="\buisness\index.html">
          <img src={buisness} alt="Buisness Landing" width="365px"></img>
          <div className="caption">
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </a>
        <a className="proj ml-2" href="https://anabixs.github.io/task-test">
          <img src={api} alt="api template" width="330px"></img>
          <div className="caption">
            <span>HTML</span>
            <span>CSS</span>
            <span>React.js</span>
            <span>REST</span>
          </div>
        </a>
        <a className="proj ml-2" href="https://anabixs.github.io/project-uni">
          <img src={gadgetDoctor} alt="Gadget Doctor Page" width="351px"></img>
          <div className="caption">
            <span>React.js</span>
            <span>REST</span>
            <span>MUI</span>
            <span>React Hooks</span>
          </div>
        </a>
      </div>
      <div className="white_part texx">
        <p>
          This page made by Vladyslav Kolomiiets, using HTML/CSS/JS/React.JS
        </p>
      </div>
    </div>
  );
};
export default Project;
