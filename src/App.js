import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';


const Header = () => (
  <header>
    <h1>This is the Header</h1>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/content'>Content</Link></li>
      </ul>
    </nav>
  </header>
  
);

const StyledHome = styled.div`
  height: 100vh;
  color: whitesmoke;
  background-color: lightslategray;
`;
const Home = () => (
  <StyledHome>
    <h1>This is the HOME</h1>
  </StyledHome>
);

const StyledAbout = styled.div`
  height: 100vh;
  color: yellowgreen;
  background-color: #555;
`;
const About = () => (
  <StyledAbout>
    <h1>This is the ABOUT</h1>
  </StyledAbout>
);

const StyledContent = styled.div`
  height: 100vh;
  color: blueviolet;
  background-color: paleturquoise;
`;
const Content = () => (
  <StyledContent>
    <h1>This is the CONTENT</h1>
  </StyledContent>
);

const Styled404 = styled.div`
  height: 100vh;
  color: red;
  background-color: blanchedalmond;
`;
const NotFound = ({match, location, history}) => (
  <Styled404>
    <h1>404 PAGE NOT FOUND!</h1>
  </Styled404>
);
const Main =  () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/content' component={Content} />
      <Route path='/404' component={NotFound} />
      <Redirect to='/404' />
    </Switch>
  </main>
);
const App = () => (
  <div>
    <Header/>
    <Main />
  </div>
);

export default App;