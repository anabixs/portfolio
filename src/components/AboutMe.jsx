import React from "react";
import {Link} from 'react-router-dom';
import avatar from './photo/avatar.jpg';
const AboutMe = () => {
    return(
        <main>
            <div className="leftSide"></div>
            <div className = 'content'>
                <div className="row">
                    <div className="col">
                        <div className="prof card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                <img src={avatar} alt="Admin" class="rounded-circle" width="150px"/>
                                <div className="mt-3 ssd">
                                  <h4><b>Vladyslav Kolomiiets</b></h4>
                                  <div className="line"></div>
                                  <p className="text-secondary mb-4">Junior FrontEnd Developer</p>
                                  <div className="link_buttons">
                                    <ul className="social-list">
                                        <li><a href="https://www.facebook.com/profile.php?id=100011541814036" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/vladyslav-kolomiiets-735a77240/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="https://github.com/ANABIXS" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col info">
                    <div className="hello"><h1><b>Hello</b></h1></div>
                    <div className="text_introd">
                        <p>Here's who I am & what I do</p>
                    </div>
                    <Link className="btn btn-outline-primary" to="/resume">Resume</Link>
                    <Link className="btn2 btn btn-outline-primary" to="/projects">Projects</Link>
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam eos dolores? Impedit quo eos porro ullam a fugiat at consequatur iste? Maxime iste amet ut assumenda molestiae nostrum mollitia?
                       </p>
                </div>
                </div>
            </div>
        </main>
    )
}

export default AboutMe;