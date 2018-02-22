import StyledGlobal from '../../global/global';

const StyledHeroContent = StyledGlobal.extend`
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

export default StyledHeroContent;
