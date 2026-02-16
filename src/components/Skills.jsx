import { useEffect, useState } from "react"

const Skills = () => {
    const [skills, setSkills] = useState(null);

    const getSkillIconUrl = (iconPath) => {
        if (!iconPath) return "";
        const fileName = `${iconPath}.svg`;
        return new URL(`../assets/skills/${fileName}`, import.meta.url).href;
    };

    const fetchSkills = () => {
        fetch("/skills.json")
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
            {skills && Object.keys(skills).length > 0 && (
                Object.keys(skills).map(sectionKey => (
                    <div key={sectionKey} className="row skills-row justify-content-center justify-content-sm-start flex-wrap">
                        <h4 className="section-title">{sectionKey.toUpperCase()}</h4>

                        {skills[sectionKey].map(skill => (
                            <div key={`${sectionKey}-${skill.id}`}
                                className="col-auto">

                                <div className="skill-card rounded-3 p-2 mb-4">
                                    <img src={getSkillIconUrl(skill.icon)} className="img-fluid icon rounded-3 mt-1"
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
