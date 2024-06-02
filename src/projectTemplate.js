const ProjectTemplate = ({project}) => {
    const proj = project;
    return ( 
        <a href={proj.links} className="project-dock frosted-glass" target="_blank" rel="noreferrer">
            <div className="project-image" style={{backgroundImage: `url(${proj.img})`}}></div>
            <div className="project-info">
                <h3 className="project-title">
                    {proj.title}
                </h3>
                <div className="project-desc">
                    {proj.desc}
                </div>
                <div className="project-skills">
                    {proj.skills.map((skill) => (
                        <i className={`ci ci-${skill} ci-2x project-skill-image`}></i>
                    ))}
                </div>
                <div className="project-links">
                    <i className="fa fa-up-right-from-square view-project-img"></i>
                    <div className="view-project-button">View Project</div>
                </div>
            </div>
        </a>
     );
}
 
export default ProjectTemplate;