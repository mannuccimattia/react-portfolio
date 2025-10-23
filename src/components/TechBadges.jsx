const TechBadges = ({ project }) => {
    return (
        <div className="d-flex flex-wrap mt-3 row-gap-1">
            {project.technologies.map((tech, i) => (
                <span key={`tech-${i}`} className="badge rounded-pill text-bg-main me-2">{tech}</span>
            ))}
        </div>
    )
}

export default TechBadges
