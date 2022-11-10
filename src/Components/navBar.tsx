import React from 'react'

export const  NavBar: React.FC = () => {
return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">React + TS</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">список дел</a></li>
        <li><a href="/">информация</a></li>
      </ul>
    </div>
  </nav>
)
}