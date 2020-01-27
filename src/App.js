import React from 'react';
import logo from './logo.svg';
import './app.scss';
import Header from './components/header/index';
import Footer from './components/footer/index';

class App extends React.Component {
  render() {
      return (
          <div>
            <Header />
            <div>i am app</div>
            <Footer />
          </div>
      );
  }
}

export default App;
