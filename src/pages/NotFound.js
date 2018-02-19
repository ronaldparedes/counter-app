import React from 'react';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';

const StyledNotFound = StyledGlobal.extend`
  color: red;
  background-color: blanchedalmond;
`;
const NotFound = () => {
  scrollToTop();
  return (
  <StyledNotFound>
    <h1>PAGE NOT FOUND!</h1>
  </StyledNotFound>
  )};

export default NotFound;
