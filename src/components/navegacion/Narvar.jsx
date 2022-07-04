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
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/proyectopoke/src/components/pages/Matricula">Matricula</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/proyectopoke/src/components/pages/Pokemon">Pokemon</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/proyectopoke/src/components/pages/Items">Item</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default narvar