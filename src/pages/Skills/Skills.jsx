import PageHeader from '../../components/PageHeader'
import './Skills.css'
import SkillBox from '../../components/SkillBox'

const Skills = () => {
  return (
    <main className="main">
      <PageHeader title="Skills" desc="My skillset is a testament to my dedication to continuous learning and adaptability in the ever-evolving landscape of technology. I'm confident in my ability to tackle complex challenges and contribute to innovative solutions." />

      <section id="services" className="services">
      <div className="container">

        <div className="row gy-4">

          <SkillBox icon="html5" title="HTML" desc="Html is the standard markup language for documents designed to be displayed in a web browser." />

          <SkillBox icon="css3" title="CSS" desc="Css is the language we use to style an HTML document.It describes how HTML elements should be displayed." />

          <SkillBox icon="javascript" title="JAVASCRIPT" desc="JavaScript is a programming language that is one of the core technologies of the World Wide Web" />

          <SkillBox icon="reactjs" title="REACT JS" desc="React is a free and open-source front-end Js library for building user interfaces based on components." />

        </div>

      </div>
    </section>
    </main>
  )
}

export default Skills