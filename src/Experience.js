import TimelineContainer from "./timelineContainerTemplate";
import { useEffect } from "react";

const Experience = () => {
    const experiences = [{company: "Bluewrist Inc.", position: "Software Engineering Intern Co-op", time: "May 2024 - August 2024", desc: "Designed the pipeline and infrastructure for scalable ML model training and deployment for customers using VB.NET. Developed a backend CLR to Python wrapper to allow for communication across all software family products through TCP/IP communication protocol.", skills: ["python","pytorch", "cpp", "csharp", "figma"], side: "left", id: 1},
{company: "Bluewrist Inc.", position: "Software Engineering Intern Co-op", time: "May 2023 - August 2023", desc: "Implemented the Pointnet++ part segmenetation ML model using pytorch for identification of weld surfaces from 3D point cloud scans with +98% accuracy.", skills: ["python", "pytorch", "cpp", "csharp"], side: "right",  id: 2},
{company: "McMaster EcoCAR EV Challenge", position: "CAVs General Member", time: "October 2022 - Present", desc: "Collaborated in a team to develop autnomous driving algorithms using sensor data from the vehicle.", skills: ["python"], side: "left",  id: 3},
{company: "McMaster MED-T Guided Hands", position: "Technical Writer", time: "October 2022 - December 2022", desc: "Transcribed code in C# to readable and understandable code for investors and other stakeholders.", skills: ["csharp"], side: "right",  id: 4},
{company: "McMaster University", position: "B.Eng.BME Mechatronics & Biomedical Engineering", time: "September 2021 - Present", desc: "Studying Mechatronics and Biomedical Engineering, developing a strong multidisciplinary background in software, electrical, mechanical, and biomedical engineering, Using proper engineering practices and economic analysis to create projects individually and in groups.", skills: ["python", "cpp", "c", "autodesk"], side: "left",  id: 5},
];

useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
    
    return ( 
        <div className="experience" id="experience">
            <div className="hidden hidden-header">
                <h2>Experience</h2>
                <div className="seperator"></div>
            </div>
            <div className="timeline hidden">
                {experiences.map((exp) => (
                    <TimelineContainer experience={exp} key={exp.id}/>
                ))}
            </div>
        </div>
     );
}
 
export default Experience;