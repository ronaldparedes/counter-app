import React from 'react';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';
import HeroSection from '../components/HeroSection';
import StyledHeroContent from '../components/StyledHeroContent';
import ScrollUp from '../components/ScrollUp';
import banner from '../img/banner/services-photo_2.jpg';

const StyledServices = StyledGlobal.extend`
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
            Our
            <small>Services</small>
          </h2>
        </StyledHeroContent>
      </HeroSection>
      <StyledServices>
        <h1>This is the Services</h1>
      </StyledServices>
      <ScrollUp />
    </div>
  )
};

export default Contact;
