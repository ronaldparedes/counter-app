import React from 'react';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';

const StyledContact = StyledGlobal.extend`
  color: peachpuff;
  background-color: salmon;
`;
const Contact = () => {
  scrollToTop();
  return (
  <StyledContact>
    <h1>This is the Contact</h1>
  </StyledContact>
  )};

export default Contact;