import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import benefitsArrow from '../../img/benefits-arrow.svg';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start ;
  align-items: flex-start;
  margin-left: 20px;
  color: #212C43;
  background: #FFF;
  min-height: 252px;
  width: 270px;
  font-family: "PT Sans";
  font-weight: 400;
  h2{
    margin: 0;
    font-size: 3.15rem;
    font-weight: inherit;
  }
  p{
    margin: 0 0 20px 0;
    color: #999fad;
    font-size: 1.4rem;
  }
  a{
    display: inline-block;
    background: url(${benefitsArrow}) no-repeat;
    width: 26px;
    height: 26px;
  }
  a:hover{
    filter: brightness(0%);
  }
`;

const InfoCard = (props) => (
  <StyledCard>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <Link to={props.link} />
  </StyledCard>
);

export default InfoCard;
