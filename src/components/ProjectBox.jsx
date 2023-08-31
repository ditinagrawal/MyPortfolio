import { Link } from "react-router-dom";

const ProjectBox = (props) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
                <img src={props.img} className="img-fluid" alt="" />
                <div className="gallery-links d-flex flex-column align-items-center justify-content-center">
                    <span className="mb-1 text-light text-opacity-75">{`Made with : ${props.desc}`}</span>
                    <a href={props.src} target="blank" className="details-link">
                        <i className="bi bi-link-45deg"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectBox;
