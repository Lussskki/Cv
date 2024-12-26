const ExperienceCard = ({ icon, title, description, URL, fadeSide, fadeDelay }) => {
    return (
        <div data-aos={fadeSide} data-aos-delat={fadeDelay} className="portfolio-card">
          {icon}
          <h3>{title}</h3>
    
          <p>{description}</p>
    
          <a target="_blank" href={URL}>
            Open
          </a>
        </div>
      );
  };
  
  export default ExperienceCard;
  