import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import TechBadges from "./TechBadges"

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    const fetchProjects = () => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                setProjects(data.projects);
            })
            .catch(err => console.error("Errore caricamento progetti:", err));
    }

    useEffect(() => {
        fetchProjects();
    }, [])

    return (
        <div>
            {projects.length > 0 && projects.map(project => (
                <div key={`proj-${project.id}`} className="project-card rounded-3 row p-4 mb-4" onClick={() => navigate(`/projects/${project.id}`)}>
                    <div className="col-4 ps-0">
                        <img src={project.cover} className="img-fluid w-100 rounded-3" alt="Immagine di copertina del progetto" />
                    </div>
                    <div className="col-8 pe-0">
                        <h6>{project.title}</h6>
                        <span className="text-secondary">{project.description}</span>
                        <TechBadges project={project} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects
