const TimelineContainer = ({experience}) => {
    const exp = experience;
    return ( 
        <div className={`timeline-container ${exp.side}-container`}>
            <span className="dot"></span>
            <div className="timeline-container-textbox frosted-glass">
                <h3>{exp.company}</h3>
                <p className="timeline-position">{exp.position}</p>
                <small>{exp.time}</small>
                <p className="timeline-container-desc">{exp.desc}</p>
                <div className="timeline-skills-container">
                    {exp.skills.map((skill) => (
                        <i className={`ci ci-${skill} ci-2x timeline-skill`}></i>
                    ))}
                </div>
                <span className={`${exp.side}-container-arrow`}></span>
            </div>
        </div> 
     );
}
 
export default TimelineContainer;