import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StyleSheet, css } from 'aphrodite';
import 'font-awesome/css/font-awesome.min.css';

const styles = StyleSheet.create({
  container: {
    width: 'device-width', 
    initialScale: '1', 
    shrinkToFit: 'no'
  }
})

class App extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
      <body>
        <nav>
          <div id="social-links">
            <a href="#"><i className="fa fa-instagram" aria-label="instagram"></i></a>
            <a href="#"><i className="fa fa-twitter-square" aria-label="twitter"></i></a>
            <a href="#"><i className="fa fa-facebook-square" aria-label="facebook"></i></a>
          </div>
        </nav>

        <main>
          <h1>Jason Borgida</h1>
          <h2>Photography</h2>
        </main>
      </body>
      </div>
    );
  }
}

export default App;
