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
        ],
        isScrollHeight100vh:false,
        width: window.innerWidth,
        height: window.innerHeight,
    }

    componentDidMount() {
        // On load and resize, mount the function to get 
        // the height and width of the browser window
        window.addEventListener('load', this.handleResize);
        window.addEventListener('resize', this.handleResize);
      }
    
      componentWillUnmount() {
        // Unmounts the function to get the height and width
        // of the browser window
        window.addEventListener('load', this.handleResize);
        window.removeEventListener('resize', this.handleResize );
      }

    handleMenuState = () => {
        this.setState({ isMenuOpen:!this.state.isMenuOpen });
    }

    // Get the current window height and width 
    handleResize = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        console.log(this.state.height, this.state.width);
    }

    render() {
        return (
        <>
            <Navigation
                handleMenuState = { this.handleMenuState }
                isMenuOpen = { this.state.isMenuOpen }
                sectionHeaders = { this.state.sectionHeaders }
                isScrollHeight100vh = { this.state.isScrollHeight100vh }
            />
            <Home/>
            <About/>
            <MyWork/>
            <Contact/>
            <Footer/>
        </>
        );
    }
}

