import {
  FaCss3,
  FaNodeJs,
  FaPython,
  FaReact,
  FaLinux,
} from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import "./CSS/aboutme.css";
import { TbBrandJavascript } from "react-icons/tb";
import SkillsCard from "./SkillsCard";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="aboutme-container">
      <div className="about-text-container">
        <div>
          <h1 data-aos="fade-up">About Me</h1>
          {/* Inside of this p write the information about you, your skills, experience and so on. */}
          <p
            style={{ textAlign: "justify" }}
            data-aos="fade-up"
            data-aos-delay="250"
            className="aboutme-text"
          >
            I specialize in backend development and full-stack applications, leveraging technologies like Python, Node.js, react and MongoDB.
             My experience includes building robust systems, integrating APIs, and deploying projects on platforms like Render and Netlify.
             I am always exploring tools like Redis and Socket.IO to create innovative and efficient solutions.  
          </p>
        </div>

        <div>
          <h1 data-aos="fade-up">Why Me</h1>
          {/* You can either delete this part or rewrite it, write the reasons why customer should choose you */}
          <p
            style={{ textAlign: "justify" }}
            data-aos="fade-up"
            data-aos-delay="250"
            className="aboutme-text"
          >
            I deliver results by focusing on performance, scalability, and user satisfaction. 
            My ability to adapt quickly to new technologies and tackle challenges head-on makes
             me the ideal choice for projects requiring creativity and precision.
          </p>
        </div>
      </div>

      {/* In href write the path to your pdf resume which is located in public folder
      / means the out path which contains also a folder named public*/}
      <a
        href="/HereYourResume.pdf"
        download="/HereYourResume.pdf"
        data-aos="fade-up"
        data-aos-delay="300"
        className="download-cv"
      >
        Download CV
      </a>

      {/* If you want to add skills just copy and paste SkillsCard but dont forget to change values */}
      <div className="skills-container">
        {/* titleValue is what will be shown as in the
        skills orange circle as on the title when you
        stop mouse on this circle*/}
        <SkillsCard
          titleValue={"HTML"}
          fadeSide={"fade-up"}
          fadeDelay={0}
          // As in previous icon places here you can also put any react component or html tag code
          icon={<FaHtml5 size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"CSS"}
          fadeSide={"fade-up"}
          fadeDelay={100}
          icon={<FaCss3 size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"JAVASCRIPT"}
          fadeSide={"fade-up"}
          fadeDelay={150}
          icon={<TbBrandJavascript size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"REACT"}
          fadeSide={"fade-up"}
          fadeDelay={200}
          icon={<FaReact size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"NODEJS"}
          fadeSide={"fade-up"}
          fadeDelay={250}
          icon={<FaNodeJs size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"PYTHON"}
          fadeSide={"fade-up"}
          fadeDelay={300}
          icon={<FaPython size={50} color="white" />}
        />

        <SkillsCard
          titleValue={"LINUX"}
          fadeSide={"fade-up"}
          fadeDelay={300}
          icon={<FaLinux size={50} color="white" />}
        />


      </div>
    </div>
  );
};

export default AboutMe;
