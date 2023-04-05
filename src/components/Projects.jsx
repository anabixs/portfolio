import React from "react";
import mogo from './photo/mogo.jpg';
import buisness from './photo/buisness.jpg';
const Project = () => {
    return(
        <div className="containerr projecttt">
            <div className="projects">
                <div className="box"></div>
                <span>
                    Projects
                </span>
            </div>
                
                    <div className="projects row">
                        <a className="proj" href="\mogo\index.html">
                            <img src={mogo} alt="Mogo Landing" width="350px"></img>
                            <div className="caption">
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                        </a>
                        <a className="proj ml-2" href= "\buisness\index.html">
                            <img src={buisness} alt="Buisness Landing" width ="365px"></img>
                            <div className="caption">
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                        </a>
                        <div className="proj col-2">

                        </div>
                    </div>
                    <div className="white_part texx">
                        <p>This page made by Vladyslav Kolomiiets, using HTML/CSS/JS/React.JS</p>
                    </div>
                </div>
                
        
    )
}
export default Project;