import React from 'react';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';
import HeroSection from '../components/HeroSection';
import ScrollUp from '../components/ScrollUp';
import banner from '../img/banner/blog-banner.jpg';

const StyledPorfolio = StyledGlobal.extend`
  color: #212C43;
  background-color: #FFF;
`;

const HeroContent = StyledGlobal.extend`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  h2{
    line-height: 3rem;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    color: #FFF;
    font-size: 3rem;
    font-weight: 400;
    display: block;
  }
  small{
    line-height: 9rem;
    display: block;
    font-size: 9rem;
  }
`;
const Porfolio = () => {
  scrollToTop();
  return (
    <div>
      <HeroSection banner={banner} brightness={0.8}>
        <HeroContent>
          <h2>
            Federal
            <small>Commercial</small>
          </h2>
        </HeroContent>
      </HeroSection>
      <StyledPorfolio>
        <h1>This is the Porfolio</h1>
      </StyledPorfolio>
      <ScrollUp />
    </div>
  )
};

export default Porfolio;
