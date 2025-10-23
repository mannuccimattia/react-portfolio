import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import TechBadges from "../components/TechBadges";
import GlobalContext from "../contexts/GlobalContext";
import HandleActiveCarousel from "../components/HandleActiveCarousel";
import HandleGithubLinks from "../components/HandleGithubLinks";
import Loader from "../components/Loader";

const DetailPage = () => {

    const [project, setProject] = useState(null);
    const [activeCarousel, setActiveCarousel] = useState("frontend");
    const { id } = useParams();
    const { setActivePage, isLoading, setIsLoading } = useContext(GlobalContext);

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
        setIsLoading(true);

        setTimeout(() => {
            fetchProject();
            setIsLoading(false)
        }, 500);
    }, [])

    return (
        <div className='detail-container'>
            {isLoading && <Loader />}
            {!isLoading && project && <>
                <h1 className="text-center mb-3 fw-semibold">{project.title}</h1>
                <p className="text-secondary">{project.description}</p>
                <HandleActiveCarousel
                    project={project}
                    activeCarousel={activeCarousel}
                    setActiveCarousel={setActiveCarousel}
                />
                <Carousel
                    project={project}
                    activeCarousel={activeCarousel}
                />
                <div className="d-flex justify-content-center">
                    <TechBadges
                        project={project}
                    />
                </div>
                <hr />
                <h3 className="mt-4">Funzionalità</h3>
                <ul className="features-list mb-4">
                    {project.features.map((feat, index) => (
                        <li key={`feat-${index}`} className="feature text-secondary">{feat}</li>
                    ))}
                </ul>
                <HandleGithubLinks
                    project={project}
                />
            </>}
        </div>
    )
}

export default DetailPage
