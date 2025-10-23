import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalContext from "../contexts/GlobalContext";

const Header = () => {

    const { activePage, setActivePage } = useContext(GlobalContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
        const page = e.currentTarget.dataset.value;
        setActivePage(page);
        if (location.pathname !== "/") navigate("/");
    }

    return (
        <header>
            <div className="top d-flex align-items-center">
                <img src="/imgs/mm-circle.png" alt="Website logo" className="img-fluid" id="header-logo" />
                <div className="ms-3">
                    <h1 className='fw-bold'>Mattia Mannucci</h1>
                    <h5 className='fw-light'>Jr Full Stack Web Developer</h5>
                </div>
            </div>

            <ul className="mid navbar-nav">
                <li className="nav-item">
                    <div className={`nav-link d-flex align-items-center ${activePage === "about" ? "active" : ""}`}
                        data-value="about"
                        onClick={handleClick}
                    >
                        <svg className="me-2" width="24" height="48" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 2v22h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        CHI SONO
                    </div>
                </li>
                <li className="nav-item">
                    <div className={`nav-link d-flex align-items-center ${activePage === "projects" ? "active" : ""}`}
                        data-value="projects"
                        onClick={handleClick}
                    >
                        <svg className="me-2" width="24" height="48" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 2v22h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        PROGETTI
                    </div>
                </li>
            </ul>

            <div className="end d-flex text-secondary">
                <a className="nav-link fa-brands fa-github" href="https://github.com/mannuccimattia" target="_blank"></a>
                <a className="nav-link fa-brands fa-linkedin" href="https://www.linkedin.com/in/mattia-mannucci" target="_blank"></a>
            </div>
            <hr className="d-lg-none my-5" />
        </header >
    )
}

export default Header
