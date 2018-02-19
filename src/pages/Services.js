import React from 'react';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';

const StyledServices = StyledGlobal.extend`
  color: blueviolet;
  background-color: yellowgreen;
`;
const Services = () => {
  scrollToTop();
  return (
  <StyledServices>
    <h1>This is the Services</h1>
  </StyledServices>
  )};

export default Services;