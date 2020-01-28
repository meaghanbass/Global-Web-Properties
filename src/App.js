import React from 'react';
import './app.scss';
import Header from './components/header/index';
import Main from './components/main/index';
import Footer from './components/footer/index';

class App extends React.Component {
  render() {
      return (
          <div id="theme" className="light">
            <Header />
            <Main />
            <Footer />
          </div>
      );
  }
}

export default App;
