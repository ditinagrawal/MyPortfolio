const SkillBox = (props) => {
  return (
    <div className="col-xl-3 col-md-6 d-flex">
      <div className="service-item position-relative">
        <i className={`ri-${props.icon}-fill`}></i>
        <h4>
          <a href="" className="stretched-link">
            {props.title}
          </a>
        </h4>
        <p>
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default SkillBox;
