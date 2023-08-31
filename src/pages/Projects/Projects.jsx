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
              img="/projects/1.png"
              desc="Html & Css"
              src="https://ditinagrawal.github.io/pizzaday/"
            />
            <ProjectBox
              img="/projects/2.png"
              desc="Html, Css & Bootstrap"
              src="https://ditinagrawal.github.io/portfoliowebsite01-demo.github.io/"
            />
            <ProjectBox
              img="/projects/3.png"
              desc="Bootstrap Only"
              src="https://ditinagrawal.github.io/portfoliowebsite02-demo.github.io/"
            />
            <ProjectBox
              img="/projects/4.png"
              desc="Html, Css & Js"
              src="https://ditinagrawal.github.io/coffeewebsite/"
            />

            <ProjectBox
              img="/projects/5.png"
              desc="Vanilla JavaScript"
              src="https://ditinagrawal.github.io/weatherapp/"
            />
            <ProjectBox
              img="/projects/6.png"
              desc="Vanilla JavaScript"
              src="https://ditinagrawal.github.io/dictionaryapp/"
            />
            <ProjectBox
              img="/projects/7.png"
              desc="Html & Tailwind Css"
              src="https://ditinagrawal.github.io/tailwindwebsite/"
            />
            <ProjectBox
              img="/projects/8.png"
              desc="Vanilla JavaScript"
              src="https://ditinagrawal.github.io/recipeapp/"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
