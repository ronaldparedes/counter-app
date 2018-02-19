import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 50px;
`;

const StyledGlobal = Wrapper.extend`
  overflow: hidden;
  height: 100vh;
`;

export default StyledGlobal;