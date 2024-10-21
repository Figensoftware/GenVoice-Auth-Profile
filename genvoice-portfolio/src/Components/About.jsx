import React from 'react';
import "../css/About.css";
import home1 from "../Images/home2.png";
import home2 from "../Images/home.png";

function About() {
    return (
        <div className='about'>
            <div className="about-first-info">
                <div>
                    <img src={home1} />
                </div>
                <div className='info-first'>
                    <b className='about-title'>About Me </b>

                    <div className="about-info">
                        Hello! I'm Figen Dağhan, a Junior Frontend Developer focused on developing my skills in <b>HTML, CSS, JavaScript</b> and <b>React</b>. While I have a solid understanding of these technologies, I am constantly learning and improving. I’m also currently building my knowledge of <b>TypeScript</b> and <b>Tailwind CSS</b> , where I still consider myself a beginner but eager to advance.
                        <br />
                        <br />
                        During my time at university, I had the opportunity to contribute to my school’s software club by helping to redesign and improve sections of the club’s promotional website using <b>React, HTML</b> and <b>CSS</b>. This experience taught me a lot about teamwork, version control with <b>Git</b>, and the importance of clean, maintainable code.
                    </div>
                </div>
            </div>

            <div className="about-second-info">

                <div className='info-second'>
                    <b className='about-title'>About Me II</b>

                    <div className="about-info">
                        One of my recent personal projects is <b>Garden-to-Cup Tea</b>, an e-commerce platform built using   <b>React, Vite</b> and <b>Redux Toolkit.</b> This project demonstrates my ability to create responsive, user-friendly interfaces, with attention to performance and accessibility. I'm also working on enhancing my design skills with <b>Bootstrap, Material-UI</b> and <b>Tailwind CSS,</b> aiming to produce clean, modern designs.
                        <br />
                        <br />
                        In my free time, I enjoy hiking, learning new things, and playing guitar. These activities not only keep me active and engaged but also inspire creativity and a love for exploration.
                        <br />
                        <br />
                        Alongside my technical skills, I value collaboration and effectively manage projects using tools like <b>Trello, Figma, Github</b> and <b>Git.</b> I believe in continuous learning and adapting to new technologies, and I'm excited to contribute to impactful web development projects.
                    </div>
                </div>
                <div>
                    <img src={home2} />
                </div>
            </div>



        </div>
    )
}

export default About;
