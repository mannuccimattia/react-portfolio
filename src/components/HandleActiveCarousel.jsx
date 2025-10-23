import React from 'react'

const HandleActiveCarousel = ({ project, activeCarousel, setActiveCarousel }) => {
    return (
        <>
            {project.images.backend.length === 0 ? (
                <div className="text-center mb-3">
                    <button className="btn btn-sm btn btn-outline-primary rounded-pill px-5" disabled>
                        Non sono presenti screenshots del backend per questo progetto
                    </button>
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
                </>
            )}
        </>
    )
}

export default HandleActiveCarousel
