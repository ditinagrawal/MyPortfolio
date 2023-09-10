import PageHeader from "../../components/PageHeader";
import ProjectBox from "../../components/ProjectBox";
import "./Projects.css";

const Projects = () => {
  return (
    <main className="main">
      <PageHeader
        title="Projects"
        desc="I've worked on a variety of website projects that highlight my expertise in web development and design.These projects underscore my ability to leverage technology to meet specific business goals while delivering exceptional user experiences."
      />

      <section id="gallery" className="gallery">
        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            <ProjectBox
              img="/projects/8.png"
              desc="React and Firebase"
              src="https://ditin-firebase-auth.netlify.app/"
            />
            <ProjectBox
              img="/projects/2.png"
              desc="MERN Stack"
              src="https://mern-jwt-auth-web.vercel.app/"
            />
            <ProjectBox
              img="/projects/1.png"
              desc="Html & Css"
              src="https://ditinagrawal.github.io/pizzaday/"
            />
            <ProjectBox
              img="/projects/3.png"
              desc="Html, css & Js"
              src="https://ditin-portfolio.netlify.app/"
            />
            <ProjectBox
              img="/projects/6.png"
              desc="Html & Bootstrap"
              src="https://ditin-portfolio3.netlify.app/"
            />
            <ProjectBox
              img="/projects/5.png"
              desc="Html, Css & Js"
              src="https://ditin-portfolio2.netlify.app/"
            />
            <ProjectBox
              img="/projects/7.png"
              desc="Html, Css & Js"
              src="https://ditin-coffeeweb.netlify.app/"
            />
            {/* <ProjectBox
              img="/projects/4.png"
              desc="Html & Tailwind Css"
              src="https://tailwindweb.netlify.app/"
            /> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
