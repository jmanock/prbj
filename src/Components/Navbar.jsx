import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Navbar = () =>{
  return(
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>Pet Rescure by Judy</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavDropdown'>
        <ul className='navbar-nav'>
          <li className='nav-item'><Link to='/About' className='nav-link'>About</Link></li>
          <li className='nav-item'><Link to='/Contact' className='nav-link'>Contact</Link></li>
          <li className='nav-item'><Link to='/Events' className='nav-link'>Events</Link></li>
          <li className='nav-item'><Link to='HappyTails' className='nav-link'>Happy Tails</Link></li>
          <li className='nav-item dropdown'>
            <a className='nav-link dropdown-toggle' href='#a' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Adopt a Pet</a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
              <Link to='/DogAdoption' className='dropdown-item'>Dog Adoption</Link>
              <Link to='/CatAdoption' className='dropdown-item'>Cat Adoption</Link>
              <Link to='/AdoptingOlderPets' className='dropdown-item'>Adopting Older Pets</Link>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <a className='nav-link dropdown-toggle' href='#f' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Foster a Pet</a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
              <Link to='/Dog4Day' className='dropdown-item'>Dog 4 a Day Program</Link>
              <Link to='/FosterProgram' className='dropdown-item'>Foster Program</Link>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <a className='nav-link dropdown-toggle' href='#g' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Volunteer / Help</a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
              <Link to='/Volunteer' className='dropdown-item'>Volunteer</Link>
              <Link to='/Donate' className='dropdown-item'>Donate</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
