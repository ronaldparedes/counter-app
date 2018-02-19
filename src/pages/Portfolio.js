import React from 'react';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';

const StyledPorfolio = StyledGlobal.extend`
  color: whitesmoke;
  background-color: lightslategray;
`;
const Porfolio = () => {
  scrollToTop();
  return (
  <StyledPorfolio>
    <h1>This is the Porfolio</h1>
  </StyledPorfolio>
  )};

export default Porfolio;