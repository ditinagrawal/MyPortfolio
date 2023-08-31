import { Link } from "react-router-dom"
import Menu from './Menu'
import './Header.css'

const Header = () => {

  return (

    <nav className="navbar navbar-expand-lg fixed-top py-4">
      <div className="container">

        <Link className="navbar-brand fs-2" to="/">Ditin Agrawal</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="ri-menu-fill text-white fs-3 border rounded p-1"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <Menu />
        </div>

        <Link to="/contact" className="btn-get-started mb-3">Download CV</Link>

      </div>
    </nav>

  )
}

export default Header