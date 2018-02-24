import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Porfolio from './pages/Portfolio';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const Main =  () => (
  <main>
    <Switch>
      <Route exact path='/' component={About} />
      <Route path='/portfolio' component={Porfolio} />
      <Route path='/services' component={Services} />
      <Route path='/careers' component={Careers} />
      <Route path='/contact' component={Contact} />
      <Route path='/404' component={NotFound} />
      <Redirect to='/404' />
    </Switch>
  </main>
);
const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;