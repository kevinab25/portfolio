import React, { Component } from 'react';
import Header from '../components/Header'
import Intro from '../components/Intro'
class Home extends Component {
    render() {
        return (
          <body data-aos-easing='ease-in-out' data-aos-duration='1000' data-aos-delay='0'>
          <Header />
          <main id="main">
            <Intro />
          </main>
          </body>
)
    }
}
export default Home;