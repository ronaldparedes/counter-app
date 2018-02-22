import React from 'react';
import StyledGlobal from '../global/global';
import scrollToTop from '../util/scrollToTop';
import banner from '../img/banner/home-banner-1.jpg';
import HeroSection from '../components/HeroSection';
import StyledHeroContent from '../components/StyledHeroContent';
import InfoCircle from '../components/InfoCircle';
import InfoCard from '../components/InfoCard';
import ScrollUp from '../components/ScrollUp';

const StyledAbout = StyledGlobal.extend`
  display: flex;
  justify-content: space-between;
  padding-top: 52px;
  padding-bottom: 63px;
  background-color: #FFF;
`;

const StyledAboutHero = StyledHeroContent.extend`
  justify-content: center;
`;

class About extends React.Component{
  componentDidUpdate(){
    scrollToTop();
  }
  render(){
    return (
      <div>
        <HeroSection banner={banner}>
          <StyledAboutHero>
            <InfoCircle
              link='/services'
              title='Services'>
              Our core expertise includes building software 
              utilizing a .Net and J2EE technology stack.
'            </InfoCircle>
            <InfoCircle
              link='/careers'
              title='Careers'>
              Join our group of experience and passionate engineers. 
              SierraSoft Corporation hires people from all walks of life.
 '           </InfoCircle>
            <InfoCircle
              link='/portfolio'
              title='Portfolio'>
              By collaborating with your agency, we create user-focused 
              solutions so you can concentrate on your mission.
            </InfoCircle>
          </StyledAboutHero>
        </HeroSection>
        <StyledAbout>
          <InfoCard
            title='What We Do'
            content='SierraSoft Corporation is a small business that specializes in providing System, Software, Network, and Data solutions to our clients. Over the years, we have delivered quality software that meets our stakeholders’ requirements and adheres to market standards.'
            link='/services'
          />
          <InfoCard
            title='Our Goal'
            content='SierraSoft Corporation thrives to design, develop, integrate, test, and maintain software system that are reliable, maintainable, and reliable.'
            link='/services'
          />
          <InfoCard
            title='Our Process'
            content='SierraSoft Corporation encourages our client to follow the Agile Methodology approach to ensure the quality of our products meets our client’s complex requirements. We divide into small focus group to ensure that our products are delivered in a timely manner and utilize cutting edge technology.'
            link='/services'
          />
          <InfoCard
            title='About'
            content='SierraSoft Corporation, we believe that the quality of our engineers makes SierraSoft Corporation a successful business and a great company to work for. Our engineers are passionate about designing, developing, integrating, testing, a maintaining our end product.'
            link='/services'
          />
          
        </StyledAbout>
        <ScrollUp />
      </div>
    );
  };
}

export default About;