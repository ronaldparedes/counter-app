import React from 'react';
import styled from 'styled-components';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';
import HeroSection from '../components/HeroSection';
import ScrollUp from '../components/ScrollUp';
import banner from '../img/banner/blog-banner.jpg';
import clients from '../components/clients';

const StyledPorfolio = StyledGlobal.extend`
  color: #212C43;
  background-color: #FFF;
  font-size: 2.45rem;
  padding-top: 52px;
  h3{
    margin: 0;
    font-family: "PT Sans";
    font-weight: 400;
  }
`;

const Clients = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  margin-top: 30px;
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

const ImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width :250px;
  height: 250px;
  &:hover > img {
    width: 210px;
  }
  img{
    transition: width .4s ease-in-out;
    width: 200px;
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
        <h3>Our Clients:</h3>
        <Clients>
          {clients.map((client, index) => (<ImgCont><img src={client} alt={index} key={index}/></ImgCont>))}
        </Clients>
      </StyledPorfolio>
      <ScrollUp />
    </div>
  )
};

export default Porfolio;
