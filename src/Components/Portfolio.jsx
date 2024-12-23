import { GrLanguage } from "react-icons/gr";
import "./CSS/portfolio.css";
import { GiTicTacToe } from "react-icons/gi";
import { SlCalculator } from "react-icons/sl";
import { MdModeOfTravel } from "react-icons/md";
import { LuEarth } from "react-icons/lu";
import { CiShop } from "react-icons/ci";
import logo from "../assets/logo.png";
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
          icon={<img style={{ width: "70px" }} src={logo} alt="logo" />}
          // title will change the header of the project card
          title={"Amazon clone"}
          // In here you can write the status of your project such as: In progress, paused, completed and so on.
          status={"Completed"}
          // A short description of your project.
          description={`My back-end project of register/login and choose your stuff`}
          // Write the url of your project.
          URL={"https://webcanvasgeo.netlify.app/"}
          fadeSide={"fade-right"}
          fadeDelay={100}
        />

       
      </div>
    </div>
  );
};

export default Portfolio;
