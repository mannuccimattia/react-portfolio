const HandleGithubLinks = ({ project }) => {
    return (
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
    )
}

export default HandleGithubLinks
