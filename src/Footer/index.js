import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from '../global/global';

const StyledHeader = Wrapper.extend`
  display: flex;
  justify-content: space-between;
  height: 87px;
  background-color: #11296F;
  color: #fff;
  font-size: 1.4rem;
  position: sticky;
  top:0;
  overflow: hidden;
  p{
    font-size: 1.2rem;
    color: #8b98b2;
    padding-top: 20px;
    margin: 0px;
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

const Footer = () => (
  <StyledHeader>
    <div>
      <p>© SierraSoft, 2018. All rights reserved. </p>
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

export default Footer;