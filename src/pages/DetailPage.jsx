import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import TechBadges from "../components/TechBadges";

const DetailPage = () => {

    const [project, setProject] = useState(null);
    const { id } = useParams();

    const fetchProject = () => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                const reqProject = data.projects.find(project => project.id === parseInt(id));
                setProject(reqProject);
            })
            .catch(err => console.error("Errore caricamento progetti:", err));
    }

    useEffect(() => {
        fetchProject();
    }, [id])

    return (
        <div className='detail-container'>
            {project && <>
                <h1 className="text-center mb-3 fw-semibold">{project.title}</h1>
                <p className="text-secondary">{project.description}</p>
                {project.images.backend.length === 0 ? (
                    <small>Non sono presenti screenshots del backend per questo progetto</small>
                ) : (
                    <>
                        <button>Mostra screenshots Frontend</button>
                        <button>Mostra screenshots Backend</button>
                    </>
                )}
                <Carousel project={project} />
                <div className="d-flex justify-content-center">
                    <TechBadges project={project} />
                </div>
                <hr />
                <h3 className="mt-4">Funzionalità</h3>
                <ul className="features-list mb-4">
                    {project.features.map((feat, index) => (
                        <li key={`feat-${index}`} className="feature text-secondary">{feat}</li>
                    ))}
                </ul>
            </>}
        </div>
    )
}

export default DetailPage
