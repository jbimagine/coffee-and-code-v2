import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import MyWork from './components/MyWork';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class Main extends Component {

    state = {
        isMenuOpen:false,
        sectionHeaders:[
            {
                name:'Home',
                key:'home',
            },
            {
                name:'My Work',
                key:'mywork',
            },
            {
                name:'About',
                key:'about',
            },
            {
                name:'Contact',
                key:'contact',
            },
        ]
    }

    handleMenuState = () => {
        this.setState({ isMenuOpen:!this.state.isMenuOpen });
    }

  render() {
    return (
      <>
        <Navigation
            handleMenuState = { this.handleMenuState }
            isMenuOpen = { this.state.isMenuOpen }
            sectionHeaders = { this.state.sectionHeaders }
        />
        <Home/>
        <MyWork
            title = { 'My Work' }
        />
        <About
            title = { 'About' }
        />
        <Contact
            title = { ' Contact' }
        />
        <Footer/>
      </>
    );
  }
}

