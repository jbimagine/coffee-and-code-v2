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
        width: window.innerWidth,
        height: window.innerHeight,
        isNavBackgroundVisible:false,
        scrollYPosition:0,
    }

    componentDidMount() {
        // On load and resize, mount the function to get 
        // the height and width of the browser window
        window.addEventListener('load', this.handleResize);
        window.addEventListener('resize', this.handleResize);

        // Add scroll event to the DOM
        window.addEventListener('scroll', this.handleScroll, { passive: true })
      }
    
      componentWillUnmount() {
        // Unmounts the function to get the height and width
        // of the browser window
        window.addEventListener('load', this.handleResize);
        window.removeEventListener('resize', this.handleResize );

        // Remove scroll event from the DOM
        window.removeEventListener('scroll', this.handleScroll)
      }

    handleMenuState = () => {
        this.setState({ isMenuOpen:!this.state.isMenuOpen });
    }

    // Get the current window height and width 
    handleResize = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        
    }

    // Get the Y position of the window on scroll
    handleScroll = () => {
        let scrollYPosition = window.scrollY;
        this.setState({ scrollYPosition });

        if(this.state.scrollYPosition >= this.state.height - 100)
            this.setState({ isNavBackgroundVisible: true });
        else
            this.setState({isNavBackgroundVisible:false});
      }
    

    render() {
        return (
        <>
            <Navigation
                handleMenuState = { this.handleMenuState }
                isMenuOpen = { this.state.isMenuOpen }
                sectionHeaders = { this.state.sectionHeaders }
                isScrollHeight100vh = { this.state.isScrollHeight100vh }
                isNavBackgroundVisible = { this.state.isNavBackgroundVisible }
            />
            <Home/>
            <About
                title={<div>Front End. <br /> Design. <br/> Development.</div>}
            />
            <MyWork
                title='Work that Inspires!'
            />
            <Contact
                title='Drop Me A Line!'
            />
            <Footer/>
        </>
        );
    }
}

