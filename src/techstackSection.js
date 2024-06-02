const TechstackSection = ({techstack}) => {
    const ts = techstack;
    return ( 
        <div className="techstack-section">
            <h4>{ts.title}</h4>
            <div className="techstack-images">
                {ts.images.map((img) => (
                    <i className={`ci ci-${img} ci-4x techstack-single-img`}></i>
                ))}
            </div>
        </div>
     );
}
 
export default TechstackSection;