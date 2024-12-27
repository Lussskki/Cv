import "./CSS/portfolio.css";
import ExperienceCard from "./ExperienceCard";
import fundHance from "../assets/FundHance.png";
import webCanvas from '../assets/webCanvas.png';
import gosm from '../assets/gosm.png';


const Experience = () => {
  return (
    <div id="experience" className="portfolio-container">
      <h1 data-aos="fade-up">Experience</h1>


      <p
        data-aos="fade-up"
        data-aos-delay="150"
        style={{ color: "#959595", textAlign: "center", marginBlock: "20px" }}
      >
        
        Here you will see a glimpse of my experience. If you're interested in learning more, feel free to check out my full profile on LinkedIn.
      </p>

      <div className="portfolio-list">
        <ExperienceCard
          icon={<img style={{ width: "70px" }} src={webCanvas} alt="logo" />}
            
          title={" Web Canvas "}
          profession={"MERN developer"}
          URL={"https://www.linkedin.com/in/lukaguledani/"}
          DATE={"Nov 2024 - Present · 2 mos"}
          LOCATION={"Batumi, Ajaria, Georgia · Remote"}
          // description={"See on linkedin page"}
          fadeSide={"fade-right"}

          fadeDelay={100}
        />


        <ExperienceCard
          icon={<img style={{ width: "70px" }} src={fundHance} alt="logo" />}
            
          title={" Funhance "}
          profession={"Software Engineer Intern"}
          URL={"https://www.linkedin.com/in/lukaguledani/"}
          DATE={"Sep 2023 - Aug 2024 · 1 yr"}
          LOCATION={"Budapest, Hungary · Remote"}
          // description={"See on linkedin page"}
          fadeSide={"fade-right"}

          fadeDelay={100}
        />

        <ExperienceCard
          icon={<img style={{ width: "70px" }} src={gosm} alt="logo" />}
            
          title={" Georgian Organization of the Scout Movement (GOSM) "}
          profession={"Back End Developer"}
          URL={"https://www.linkedin.com/in/lukaguledani/"}
          DATE={"Jan 2023 - Dec 2023 · 1 yr"}
          LOCATION={"Georgia, Tbilisi · Remote"}
          // description={"See on linkedin page"}
          fadeSide={"fade-right"}

          fadeDelay={100}
        />
      </div>
    </div>
  );
};

export default Experience;
