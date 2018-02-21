import React from 'react';
import styled from 'styled-components';
import arrow from '../../img/arrow.svg';
import { animateScrollToTop } from '../../util/scrollToTop';

const StyledScrollButton = styled.svg`
  background-image: url(${arrow});
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  bottom: 55px;
  right: 72px;
  width: 50px;
  height: 50px;
  z-index: -1;
  opacity: 0;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover{
    background-color: rgba(124, 203, 252, 0.6);
  }
`;


class ScrollUp extends React.Component{
  handleScroll(){
    const scrlBtn = document.getElementById('scroll-button');
    if(window.scrollY >= 100){
      scrlBtn.style.opacity = 1;
      scrlBtn.style.zIndex = 100;
    }else{
      scrlBtn.style.opacity = 0;
      scrlBtn.style.zIndex = -1;
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll);
  }
  render(){
    return(
      <StyledScrollButton id='scroll-button'onClick={animateScrollToTop} />
    );
  }
};

export default ScrollUp;
