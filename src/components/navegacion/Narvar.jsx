import React from 'react'
import {Link} from 'react-router-dom'

const narvar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to='/'>
      <img src='./pokemonimg.png' width='50'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div>
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/Matricula">Matricula</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Pokemon">Pokemon</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default narvar