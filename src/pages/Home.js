import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import myImage from "../assets/myImg.jpg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <div className="image-container">
                    <img src={myImage} alt="" className="circular-image" />
                </div>
                <h3> Hi, My Name is Kaif Zaffer</h3>
                <div className="prompt">
                    <p>A software developer with a passion for learning and creating.</p>
                    <a href="https://www.linkedin.com/in/kaif-zaffer-812198225/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BqHAgyw7STn2k5Y4sKRbYoQ%3D%3D">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:kaifzaffer748@gmail.com">
                        <EmailIcon />
                    </a>
                    <a href="https://github.com/Kaifzaffer">
                        <GitHubIcon />
                    </a>
                </div>
            </div>
            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
                            Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
                            MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
