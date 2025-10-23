import { useContext, useEffect } from "react";
import GlobalContext from "../contexts/GlobalContext";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Loader from "../components/Loader";

const Homepage = () => {

    const { activePage, isLoading, setIsLoading } = useContext(GlobalContext);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [activePage]);

    return (
        <div className="main-container">
            {isLoading && <Loader />}
            {!isLoading && activePage === "about" && <AboutMe />}
            {!isLoading && activePage === "projects" && <Projects />}
        </div>
    )
}

export default Homepage
