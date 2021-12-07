import Meta from "../components/Meta";

import aboutStyles from "../styles/About.module.css";

const about = () => {
  return (
    <div>
      <Meta title="About Me" />
      <section className={aboutStyles.mainInfo}>
        <div className={aboutStyles.aboutMe}>
          <h1>Jorge Herrando</h1>
          <h4>Full Stack Web Developer</h4>
          <p>
            Full Stack developer passionate about new technologies. Lifelong
            learning and being able to absorb new knowledge quickly allows me to
            adapt to the company and help them to achieve their goals.
          </p>
          <p>
            Perseverance, motivation, responsibility, creating good job
            atmosphere and team-working, are some of the skills I have been
            bringing to the companies I have worked with.
          </p>
          <p>
            I have a good level of English since I lived in different English
            speaking countries for more than 5 years.
          </p>
          <p>
            I keep practicing my skills on small projects, but I can't wait to
            contribute in a real world company.
          </p>
          <p>Jorge</p>
        </div>
        <div className={aboutStyles.links}>
          <div className={aboutStyles.profiles}>
            <h2>Check out my code</h2>

            <a
              className={aboutStyles.a}
              href="https://www.linkedin.com/in/jorgeherrando/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={aboutStyles.linkedinLogo}
                alt="linkedin"
                src="/linkedin.png"
              />
              <p>LinkedIn</p>
            </a>

            <a
              className={aboutStyles.a}
              href="https://github.com/jorgeHerrando"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={aboutStyles.githubLogo}
                alt="github"
                src="/github.png"
              />
              <p>Github</p>
            </a>
          </div>
          <div className={aboutStyles.skills}>
            <h2>Skills</h2>
            <div className={aboutStyles.skillsGrid}>
              <a href="https://nodejs.org/en/" target="_blank">
                {" "}
                <img className={aboutStyles.logo} src="/node.png" />
              </a>
              <a href="https://reactjs.org/" target="_blank">
                <img className={aboutStyles.logo} src="/react.png" />
              </a>
              <a href="https://nextjs.org/" target="_blank">
                <img className={aboutStyles.logo} src="/nextjs.png" />
              </a>
              <a href="https://expressjs.com/" target="_blank">
                <img className={aboutStyles.logo} src="/express.png" />
              </a>
              <a href="https://www.mysql.com/" target="_blank">
                <img className={aboutStyles.logo} src="/mysql.png" />
              </a>
              <a href="https://sequelize.org/" target="_blank">
                <img className={aboutStyles.logo} src="/sequelize.png" />
              </a>
              <a href="https://www.javascript.com/" target="_blank">
                <img className={aboutStyles.logo} src="/javascript.png" />
              </a>
              <a href="https://getbootstrap.com/" target="_blank">
                <img className={aboutStyles.logo} src="/bootstrap.png" />
              </a>
              <a href="#">
                <img className={aboutStyles.logo} src="/html.png" />
              </a>
              <a href="#">
                <img className={aboutStyles.logo} src="/css.png" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
