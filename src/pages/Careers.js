import React from 'react';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';
import HeroSection from '../components/HeroSection';
import StyledHeroContent from '../components/StyledHeroContent';
import ScrollUp from '../components/ScrollUp';
import banner from '../img/banner/how-it-works-photo_2.jpg';

const StyledCareers = StyledGlobal.extend`
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
            Join
            <small>Our Team</small>
          </h2>
        </StyledHeroContent>
      </HeroSection>
      <StyledCareers>
        <h1>This is the Careers</h1>
      </StyledCareers>
      <ScrollUp />
    </div>
  )
};

export default Contact;
