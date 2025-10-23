import { useEffect, useRef } from "react";

const Carousel = ({ project, activeCarousel }) => {

    const carouselRef = useRef(null);

    // initialize Bootstrap Carousel after project loads
    useEffect(() => {
        if (!project || !carouselRef.current) return;

        const bs = window.bootstrap;

        if (!bs || !bs.Carousel) {
            console.warn("Bootstrap Carousel non trovato su window.bootstrap");
            return;
        }

        const carousel = new bs.Carousel(carouselRef.current, { interval: 5000, ride: false });
        return () => carousel.dispose();
    }, [project]);

    let imagesToCycle;
    activeCarousel === "frontend" ? imagesToCycle = project.images.frontend : imagesToCycle = project.images.backend;

    return (
        <div id="projectCarousel" ref={carouselRef} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {imagesToCycle.map((img, index) => (
                    <button
                        key={`btn-${index}`}
                        type="button"
                        data-bs-target="#projectCarousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : undefined}
                        aria-label={`Slide ${img.id}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {imagesToCycle.map((img, index) => (
                    <div key={`img-${img.id}`} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img className="d-block w-100" src={img.url} alt={`Screenshot frontend ${img.id}`} />
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#projectCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Indietro</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#projectCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Avanti</span>
            </button>
        </div>
    )
}

export default Carousel
