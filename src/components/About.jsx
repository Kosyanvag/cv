import "./about.style.scss";
const About = () => {
  return (
    <div className="about" id="About">
      <div className="tittle">
        <h2>About me</h2>
        <hr />
      </div>
      <div className="aboutEducation">
        <div className="aboutme">
          <p>
            An enthusiastic and detail-oriented Junior Frontend Developer with
            proficient knowledge in HTML,CSS/SCSS JS and React.JS . Seeking to
            utilize my technical skills and expertise to provide value to the
            employer and contribute to successful projects both today and in the
            future. Aiming to take on new challenges and utilize my coding and
            debugging skills for developing new features and enhance the overall
            user experience
          </p>
        </div>
        <div className="education">
          <div className="companyBox">
            <div className="smartcode">
              <div className="logoSmartcode">
                <div className="whiteCircle">
                  <img src="smartcode.png" alt="" />

                  <h2>
                    SmartCode <p>JavaScript and React.js</p>
                  </h2>
                </div>
              </div>
            </div>
            <div className="picsartAcademy">
              <div className="logoPicsartAcademy">
                <div className="whiteCircle">
                  <img src="picsartAcademy.jpg" alt="" />

                  <h2>
                    PicsartAcademy <p>Computer Architecture</p>
                  </h2>
                </div>
              </div>
            </div>
            <div className="rau">
              <div className="logoRau">
                <div className="whiteCircle">
                  <img src="rau.svg" alt="" />

                  <h2>
                    RAU <p>Management</p>
                  </h2>
                </div>
              </div>
            </div>
            <div className="armath">
              <div className="logoArmath">
                <div className="whiteCircle">
                  <img src="armath.png" alt="" />

                  <h2>
                    Armath <p>Fundamentals of Programming</p>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
