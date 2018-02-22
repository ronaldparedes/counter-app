import React from 'react';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';
import HeroSection from '../components/HeroSection';
import ScrollUp from '../components/ScrollUp';
import banner from '../img/banner/blog-banner.jpg';
import homeland from '../img/clients/homeland.png';
import DoA from '../img/clients/Dept_of_Army.jpg';
import USPTO from '../img/clients/US_Patent.png';
import DoD from '../img/clients/DoD.jpg';
const StyledPorfolio = StyledGlobal.extend`
  color: #212C43;
  background-color: #FFF;
  font-size: 2.45rem;
  padding-top: 52px;
  padding-bottom: 63px;
  img{
    width: 200px;
  }
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
  const clients = [homeland, DoA, USPTO, DoD];
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
        <h3>Our Clients:</h3>
        {clients.map((client, index) => (<img src={client} alt={index} key={index}/>))}
      </StyledPorfolio>
      <ScrollUp />
    </div>
  )
};

export default Porfolio;
