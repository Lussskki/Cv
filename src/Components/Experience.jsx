import "./CSS/portfolio.css";
import ExperienceCard from "./ExperienceCard";
import placeholderLogo from "../assets/Amazon.png";


const Experience = () => {
  return (
    <div id="experience" className="portfolio-container">
      <h1 data-aos="fade-up">Experience</h1>

      <p
        data-aos="fade-up"
        data-aos-delay="150"
        style={{ color: "#959595", textAlign: "center", marginBlock: "20px" }}
      >
        Here you will see my experience
      </p>

      <div className="portfolio-list">
        <ExperienceCard
          icon={<img style={{ width: "70px" }} src={placeholderLogo} alt="logo" />}
          title={"Sample Title"}
          description={`• Develop a system to randomly assign usernames and passwords based on account usage status, requiring interpretation of Yes/No responses.`
                       }
          URL={"https://example.com"}
          fadeSide={"fade-right"}
          fadeDelay={100}
        />
      </div>
    </div>
  );
};

export default Experience;
