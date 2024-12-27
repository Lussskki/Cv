import "./CSS/portfolio.css";
import ExperienceCard from "./ExperienceCard";
import placeholderLogo from "../assets/FundHance.png";


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
          icon={<img style={{ width: "70px" }} src={placeholderLogo} alt="logo" />}
            
          title={" Funhance "}
          profession={"Software Engineer Intern"}
          URL={"https://www.linkedin.com/in/lukaguledani/"}
          DATE={"Sep 2023 - Aug 2024 · 1 yr"}
          LOCATION={"Budapest, Hungary · Remote"}
          description={"See on linkedin page"}
          fadeSide={"fade-right"}

          fadeDelay={100}
        />
      </div>
    </div>
  );
};

export default Experience;
