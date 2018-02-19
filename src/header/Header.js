import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import { Wrapper } from '../global/global';
import logo from '../img/logo.png';

const StyledHeader = Wrapper.extend`
  display: flex;
  justify-content: space-between;
  height: 87px;
  background-color: #223e92;
  color: #fff;
  font-size: 1.4rem;
  position: sticky;
  top:0;
  overflow: hidden;
  z-index: 10;
  img{
    width: 200px;
  }
  .logo{
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
  }
  h1{
    position: absolute;
    margin: 0;
    transform: translateX(-1000px);
  }
  h3{
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 40px;
    margin: 0;
  }
  ul{
    padding: 0;
    margin: 0;
  }
  li{
    display: inline-flex;
    align-items: center;
    list-style: none;
  }
  nav a{
    padding: 30px 15px ;
    color: #fff;
    text-decoration: none;
  }
  nav a:hover{
    color: #7ccbfc;
    background-color: rgba(124,203,252,.1);
    border-bottom: 3px solid #7ccbfc;
  }
  nav a.active{
    color: #7ccbfc;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className='logo'>
      <h1>SIERRASOFT</h1>
      <Link to='/'>
        <img src={logo} alt='Sierrasoft logo'/>
      </Link>
      <h3>Enterprise Software, System, and Network Solutions</h3>
    </div>
    <nav>
      <ul>
        <li><NavLink exact to='/'>About</NavLink></li>
        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/careers'>Careers</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  </StyledHeader>
);

export default Header;