import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import TechBadges from "../components/TechBadges";
import GlobalContext from "../contexts/GlobalContext";

const DetailPage = () => {

    const [project, setProject] = useState(null);
    const [activeCarousel, setActiveCarousel] = useState("frontend");
    const { id } = useParams();
    const { setActivePage } = useContext(GlobalContext);

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
        setActivePage("projects");
        fetchProject();
    }, [id])

    return (
        <div className='detail-container'>
            {project && <>
                <h1 className="text-center mb-3 fw-semibold">{project.title}</h1>
                <p className="text-secondary">{project.description}</p>
                {project.images.backend.length === 0 ? (
                    <div className="text-center mb-3">
                        <button className="btn btn-sm btn btn-outline-primary rounded-pill px-5" disabled>Non sono presenti screenshots del backend per questo progetto</button>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-3">
                            <button
                                className={`btn btn-sm ${activeCarousel === "frontend" ? "active" : ""} btn-outline-primary rounded-start-pill rounded-end-0 px-5`}
                                onClick={() => setActiveCarousel("frontend")}
                            >Mostra screenshots Frontend</button>
                            <button
                                className={`btn btn-sm ${activeCarousel === "backend" ? "active" : ""} btn-outline-primary rounded-start-0 rounded-end-pill px-5`}
                                onClick={() => setActiveCarousel("backend")}
                            >Mostra screenshots Backend</button>
                        </div>
                        {/* <div className="d-block d-md-none text-center mb-3">
                            <button
                                className={`btn btn-sm ${activeCarousel === "frontend" ? "active" : ""} btn-outline-primary rounded-pill mb-3`}
                                onClick={() => setActiveCarousel("frontend")}
                            >Mostra screenshots Frontend</button>
                            <button
                                className={`btn btn-sm ${activeCarousel === "backend" ? "active" : ""} btn-outline-primary rounded-pill`}
                                onClick={() => setActiveCarousel("backend")}
                            >Mostra screenshots Backend</button>
                        </div> */}
                    </>
                )}
                <Carousel project={project} activeCarousel={activeCarousel} />
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
                <div className="d-flex flex-column align-items-end">
                    {project.github.frontend && <div className="github-link d-flex align-items-center">
                        <i className="fa-brands fa-github"></i>
                        <a href={project.github.frontend} className="text-decoration-none ms-2" target="_blank">Repository del frontend</a>
                    </div>}
                    {project.github.backend && <div className="github-link d-flex align-items-center">
                        <i className="fa-brands fa-github"></i>
                        <a href={project.github.backend} className="text-decoration-none ms-2" target="_blank">Repository del backend</a>
                    </div>}
                    {project.github.source && <div className="github-link d-flex align-items-center">
                        <i className="fa-brands fa-github"></i>
                        <a href={project.github.source} className="text-decoration-none ms-2" target="_blank">Repository dell'applicazione</a>
                    </div>}
                </div>
            </>}
        </div>
    )
}

export default DetailPage
