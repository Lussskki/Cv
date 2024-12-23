import "./CSS/portfolio.css";
import amazonLogo from "../assets/Amazon.png";
import eccommerceLogo from '../assets/Eccomerce.png';
import portfolioLogo from '../assets/Portfolio.png'
import ProjectsCard from "./ProjectsCard";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-container">
      <h1 data-aos="fade-up">Portfolio</h1>

      <p
        data-aos="fade-up"
        data-aos-delay="150"
        style={{ color: "#959595", textAlign: "center", marginBlock: "20px" }}
      >
        Here you will see my big projects or projects with different logics
        <br />
        others you can see on my GitHub Profile
      </p>

      <div className="portfolio-list">
        <ProjectsCard
        // In icon place you can place react component or html tag.
          icon={<img style={{ width: "70px" }} src={amazonLogo} alt="logo" />}
          // title will change the header of the project card
          title={"Amazon clone"}
          // In here you can write the status of your project such as: In progress, paused, completed and so on.
          status={"Completed"}
          // A short description of your project.
          description={`Back-end project of register/login and buy everything you want`}
          // Write the url of your project.
          URL={"https://github.com/Lussskki/AmazonProject"}
          fadeSide={"fade-right"}
          fadeDelay={100}
        />
         <ProjectsCard
        
          icon={<img style={{ width: "70px" }} src={eccommerceLogo} alt="logo" />}
        
          title={"Eccommerce Project"}
           
          status={"Completed"}
          
          description={`Eccommerce back-end project about signup/signin and get services `}
          
          URL={"https://github.com/Lussskki/EcommerceProject"}
          fadeSide={"fade-right"}
          fadeDelay={100}
        />
        <ProjectsCard
        
        icon={<img style={{ width: "70px" }} src={portfolioLogo} alt="logo" />}
      
        title={"Portfolio"}
         
        status={"Completed"}
        
        description={`My very first portfolio made in 2021`}
        
        URL={"https:/lussskki.github.io/Portfolio/"}
        fadeSide={"fade-right"}
        fadeDelay={100}
      />
      
       
      </div>
    </div>
  );
};

export default Portfolio;
