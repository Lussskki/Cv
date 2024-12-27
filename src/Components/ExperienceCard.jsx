const ExperienceCard = ({ icon, title,profession, description, URL, DATE,TIME, LOCATION, fadeSide, fadeDelay }) => {
    return (
        <div data-aos={fadeSide} data-aos-delat={fadeDelay} className="portfolio-card">
          {icon}
          <h3>{title}</h3>
          <h3>{profession}</h3> 
          <a target="_blank" href={URL}>
            Linkedin Profile
          </a>
          <p>{DATE}</p>
          <p>{TIME}</p> 
          <p>{LOCATION}</p>
          <p>{description}</p>
    
        </div>
      );
  };
  
  export default ExperienceCard;
  