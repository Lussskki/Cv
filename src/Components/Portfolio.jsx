import "./CSS/portfolio.css";
import amazonLogo from "../assets/Amazon.png";
import ecommerceLogo from '../assets/Ecommerce.png';
import portfolioLogo from '../assets/Portfolio.png';
import spaceWarLogo from '../assets/SpaceWarLogo.png';
import chatLogo from '../assets/Chat.png';
import crudLogo from '../assets/Crud.png';
import controllLogo from '../assets/ControllEye.png';
import quizLogo from '../assets/Quiz.png';
import managerLogo from '../assets/Manager.png';
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
        
          icon={<img style={{ width: "70px" }} src={ecommerceLogo} alt="logo" />}
        
          title={"Ecommerce Project"}
           
          status={"Completed"}
          
          description={`Ecommerce back-end project about signup/signin and get services `}
          
          URL={"https://github.com/Lussskki/EcommerceProject"}
          fadeSide={"fade-right"}
          fadeDelay={100}
        />
        <ProjectsCard
        
        icon={<img style={{ width: "70px" }} src={portfolioLogo} alt="logo" />}
      
        title={"Portfolio"}
         
        status={"Completed"}
        
        description={`My very first portfolio made in 2021`}
        
        URL={"https://symphonious-mousse-69ee23.netlify.app/"}
        fadeSide={"fade-right"}
        fadeDelay={100}
      />
      <ProjectsCard
        
        icon={<img style={{ width: "70px" }} src={chatLogo} alt="logo" />}
      
        title={"Chat app"}
         
        status={"In progress"}
        
        description={`Chat app full project for comunicate to eachother`}
        
        URL={"https://github.com/Lussskki/Chat-app"}
        fadeSide={"fade-right"}
        fadeDelay={100}
      />
      <ProjectsCard
        
        icon={<img style={{ width: "70px" }} src={spaceWarLogo} alt="logo" />}
      
        title={"Space war"}
         
        status={"Completed"}
        
        description={`Game space 1x1`}
        
        URL={"https://github.com/Lussskki/SpaceWar"}
        fadeSide={"fade-right"}
        fadeDelay={100}
      />
      <ProjectsCard
        
        icon={<img style={{ width: "70px" }} src={crudLogo} alt="logo" />}
      
        title={"Crud"}
         
        status={"Completed"}
        
        description={`Crudd app`}
        
        URL={"https://github.com/Lussskki/restapi"}
        fadeSide={"fade-right"}
        fadeDelay={100}
      />
      <ProjectsCard
        
        icon={<img style={{ width: "70px" }} src={controllLogo} alt="logo" />}
      
        title={"Mouse Controlling Eye"}
         
        status={"Completed"}
        
        description={`My First cv2 project `}
        
        URL={"https://github.com/Lussskki/MouseControlingEye"}
        fadeSide={"fade-right"}
        fadeDelay={100}
      />
      <ProjectsCard
        
        icon={<img style={{ width: "70px" }} src={quizLogo} alt="logo" />}
      
        title={"Quiz"}
         
        status={"Completed"}
        
        description={`Game quiz `}
        
        URL={"https://github.com/Lussskki/PYTHON-GAME-QUIZ"}
        fadeSide={"fade-right"}
        fadeDelay={100}
      />
      <ProjectsCard
        
        icon={<img style={{ width: "70px" }} src={managerLogo} alt="logo" />}
      
        title={"Manager"}
         
        status={"Completed"}
        
        description={`Full-stack project where you can managment your time, set schedule`}
        
        URL={"https://manager-qbgd.onrender.com"}
        fadeSide={"fade-right"}
        fadeDelay={100}
      />
                     
      </div>
    </div>
  );
};

export default Portfolio;
