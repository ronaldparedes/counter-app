import React from 'react';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';

const StyledCareers = StyledGlobal.extend`
  color: yellowgreen;
  background-color: olivedrab;
`;
const Careers = () => {
  scrollToTop();
  return (
  <StyledCareers>
    <h1>This is the Careers</h1>
  </StyledCareers>
  )};

export default Careers;