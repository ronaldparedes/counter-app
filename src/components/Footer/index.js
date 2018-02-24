import React from 'react';
import { Wrapper } from '../../global/global';
import NavBar from '../NavBar';

const StyledFooter = Wrapper.extend`
  display: flex;
  justify-content: space-between;
  height: 87px;
  background-color: #11296F;
  color: #fff;
  font-size: 1.4rem;
  overflow: hidden;
  p{
    font-size: 1.2rem;
    color: #8b98b2;
    padding-top: 20px;
    margin: 0px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <div>
      <p>© SierraSoft, 2018. All rights reserved. </p>
    </div>
    <NavBar />
  </StyledFooter>
);

export default Footer;