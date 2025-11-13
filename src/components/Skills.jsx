import { useEffect, useState } from "react"
import { BASE_PATH } from "../utils/basePath";

const Skills = () => {
    const [skills, setSkills] = useState(null);

    const fetchSkills = () => {
        fetch(`${BASE_PATH}/skills.json`)
            .then(res => res.json())
            .then(data => {
                setSkills(data);
            })
            .catch(err => console.error("Errore caricamento skills:", err));
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    return (
        <div>
            {/* {skills.length > 0 && skills.map(skill => (
                <div key={`proj-${skill.id}`} className="project-card rounded-3 d-flex flex-wrap p-3 mb-4">
                    <div className="col-12 col-xl-4 ps-0">
                        <img src={`${BASE_PATH}${skill.icon}`} className="img-fluid w-100 rounded-3" alt={`Icona ${skill.name}`} />
                    </div>
                    <div className="col-12 col-xl-8 ps-2 pe-0">
                        <h6>{skill.name}</h6>
                    </div>
                </div>
            ))} */}

            {skills && Object.keys(skills).length > 0 && (
                Object.keys(skills).map(sectionKey => (
                    <div key={sectionKey} className="row skills-row justify-content-center justify-content-sm-start flex-wrap">
                        <h4 className="section-title">{sectionKey.toUpperCase()}</h4>

                        {skills[sectionKey].map(skill => (
                            <div key={`${sectionKey}-${skill.id}`}
                                className="col-auto">

                                <div className="skill-card rounded-3 p-2 mb-4">
                                    <img src={`${BASE_PATH}${skill.icon}`} className="img-fluid icon rounded-3 mt-1"
                                        alt={`Icona ${skill.name}`} />
                                    <h6 className="skill-name mt-2 mb-0">{skill.name}</h6>
                                </div>

                            </div>
                        ))}
                    </div>
                ))
            )}
        </div>
    )
}

export default Skills
