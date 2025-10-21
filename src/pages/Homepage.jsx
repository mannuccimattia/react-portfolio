import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const Homepage = () => {

    const { activePage } = useContext(GlobalContext);

    return (
        <div className="main-container">
            {activePage === "about" && <AboutMe />}
            {activePage === "projects" && <Projects />}
        </div>
    )
}

export default Homepage
