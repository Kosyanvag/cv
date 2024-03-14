import "./skills.style.scss";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { DiBootstrap } from "react-icons/di";
const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <div className="tittle">
        <h2>My Skills</h2>
        <hr />
      </div>
      <div className="skillsBox">
        <div className="leftSkills">
          <div className="leftLogos">
            <div className="htmlLogo">
              <IoLogoHtml5 />
            </div>
            <div className="cssLogo">
              <IoLogoCss3 />
            </div>
            <div className="bootstrapLogo">
              <DiBootstrap />
            </div>
          </div>
        </div>
        <div className="centerSkills">
          <div className="skillSliders">
            <h2>Skills Range</h2>
          </div>
          <div className="sliders">
            <div className="skillRangeHTML">
              <div className="outer">
                <div className="inner">
                  <div id="number">
                    HTML <br />
                    80%
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
            </div>
            <div className="skillRangeCSS">
              <div className="outer">
                <div className="inner">
                  <div id="number">
                    CSS <br /> 70%
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
            </div>
            <div className="skillRangeJS">
              <div className="outer">
                <div className="inner">
                  <div id="number">
                    JS <br /> 70%
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
            </div>
            <div className="skillRangeREACT">
              <div className="outer">
                <div className="inner">
                  <div id="number">
                    REACT <br />
                    30%
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className="rightSkills">
          <div className="rightLogos">
            <div className="jsLogo">
              <IoLogoJavascript />
            </div>
            <div className="reactLogo">
              <IoLogoReact />
            </div>
            <div className="figmaLogo">
              <img src="figma.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
