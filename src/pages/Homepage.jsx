import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Loader from "../components/Loader";

const Homepage = () => {
    const { activePage, isLoading, setIsLoading } = useContext(GlobalContext);
    const [content, setContent] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setContent(null);

        const timer = setTimeout(() => {
            setContent(
                activePage === "about"
                    ? <AboutMe />
                    : activePage === "skills"
                        ? <Skills />
                        : <Projects />
            );
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [activePage]);

    return (
        <div className="main-container">
            {isLoading && <Loader />}
            {!isLoading && content}
        </div>
    )
}

export default Homepage
