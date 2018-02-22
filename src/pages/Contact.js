import React from 'react';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';
import HeroSection from '../components/HeroSection';
import StyledHeroContent from '../components/StyledHeroContent';
import ScrollUp from '../components/ScrollUp';
import banner from '../img/banner/contact-banner.jpg';

const StyledContact = StyledGlobal.extend`
  color: #212C43;
  background-color: #FFF;
`;

const Contact = () => {
  scrollToTop();
  return (
    <div>
      <HeroSection banner={banner} brightness={0.8}>
        <StyledHeroContent>
          <h2>
            Get in
            <small>Touch</small>
          </h2>
        </StyledHeroContent>
      </HeroSection>
      <StyledContact>
        <h1>This is the Contact</h1>
      </StyledContact>
      <ScrollUp />
    </div>
  )
};

export default Contact;
