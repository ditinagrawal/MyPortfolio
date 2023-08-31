import { Link } from "react-router-dom";

const PageHeader = (props) => {
    return (
        <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h2>{props.title}</h2>
                        <p>
                            {props.desc}
                        </p>

                        <Link className="cta-btn" to="/contact">
                            
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
