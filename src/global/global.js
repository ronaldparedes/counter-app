import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 50px;
`;

const StyledGlobal = Wrapper.extend`
  min-height: 50vh;
  padding-bottom: 150px;
`;

export default StyledGlobal;