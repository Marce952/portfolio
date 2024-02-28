import React, { useState } from 'react'

const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const handleMenuClick = () => {
      const navigation = document.getElementById("nav");
      const menu = document.getElementById("menu");
  
      // Set property to number of children
      navigation.style.setProperty("--childenNumber", navigation.children.length);
  
      // Toggle classes for animation
      navigation.classList.toggle("active");
      menu.classList.toggle("active");
  
      // Toggle state to update component
      setIsActive(!isActive);
    };
  
    return (
      <nav>
        <div>
          <a className='nav-nombre'>Garrido Marcelo</a>
        </div>
        <div>
          <ul id="nav">
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#redes">Redes</a></li>
            <li><a href="#skill">Skills</a></li>
          </ul>
        </div>
        <div className={`menu ${isActive ? 'active' : ''}`} id="menu" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>


        // <nav>
        //     <a className='nav-nombre'>Garrido Marcelo</a>
        //     <a href="#">Proyectos</a>
        //     <a href="#">Redes</a>
        //     <a href="#">Skills</a>
        // </nav>

        // <nav>
        //     <ul className='menu'>
        //         <li className='nav-nombre'>Portafolio-MarceJS</li>
        //         <li><a href="#proyectos">Proyectos</a></li>
        //         <li><a href="#redes">Redes</a></li>
        //         <li><a href="#skill">Skill</a></li>
        //         <li><a href="#skill">Contacto</a></li>
        //     </ul>

        //     <div className='toggle-btn' onClick={handleDropdown}>
        //         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFF" class="bi bi-list" viewBox="0 0 16 16">
        //             <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        //         </svg>
        //     </div>
        //     {
        //         dropdownHidden == false ?
        //             <ul className='dropdown' id='dropdown' hidden={dropdownHidden}>
        //                 <li className='nav-nombre'>Portafolio-MarceJS</li>
        //                 <li><a href="#proyectos">Proyectos</a></li>
        //                 <li><a href="#redes">Redes</a></li>
        //                 <li><a href="#skill">Skill</a></li>
        //                 <li><a href="#skill">Contacto</a></li>
        //             </ul> :
        //             <h2 className='nav-nombre nav-nombre__dropdown'>Portafolio-MarceJS</h2>
        //     }

        // </nav>
    )
}

export default Nav