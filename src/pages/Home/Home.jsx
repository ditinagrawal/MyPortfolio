import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>I am <span>Ditin Agrawal</span> a Professional Developer from Mathura City</h2>
            <p>“ If people are doubting how far you can go, go so far that you can’t hear them anymore. ”</p>
            <div className="d-flex flex-column align-items-center">
              <Link to="/contact" className="btn-get-started mb-3">Available for hire</Link>
              <Link to="/projects" className="btn-get-started">View my work</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home