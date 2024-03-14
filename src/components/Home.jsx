import Navigation from "./Navigation";
import "./home.style.scss";
import {
  FaGithub,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./home.style.scss";
const Home = () => {
  return (
    <div className="home" id="#Home">
      <Navigation />
      <div className="main">
        <div className="leftHome">
          <div className="circleGray">
            <div className="socials">
              <span>
                <a target="_blank" href="https://github.com/Kosyanvag/">
                  <FaGithub className="git" />
                </a>
              </span>
              <span>
                <a target="_blank" href="https://t.me/Vagkosyan">
                  <FaTelegramPlane className="tg" />
                </a>
              </span>
              <span>
                <a target="_blank" href="https://www.instagram.com/kosyanvag/">
                  <FaInstagram className="insta" />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://am.linkedin.com/in/vagharshak-kosyan-58b866259?trk=people-guest_people_search-card"
                >
                  <FaLinkedin className="link" />
                </a>
              </span>
            </div>
            <div className="circleWhite">
              <div className="circleGray2">
                <img src="vk2.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="rightHome">
          <h2>Hi, I a'm Vagharshak</h2>
          <h3 className="animatedText">
            <span>React.JS Developer</span>
          </h3>
          <button>Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
