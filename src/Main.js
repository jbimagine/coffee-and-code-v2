import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from './ui_kit/Flex';

// Global variables for  our repeating 
// css values
const PRIMARY_COLOR = 'rgb(51,80,117)';
const SECONDARY_COLOR = '#FFF';
const NAVIGATION_HEIGHT = '60px';
const FOOTER_HEIGHT = '60px';

// Creates a container for our Navigation
const Navbar = styled(Flex) `
    height:${ NAVIGATION_HEIGHT };
    position:fixed;
    width:100vw;
    background-color:${ PRIMARY_COLOR };
    box-shadow: 0px 10px 20px 0px #00000030;
    border-bottom: 1px solid #DDD;
`;

// Creates a Section Container for each repeating section 
// of the site E.g. Home, About, My Work, etc
const Section = styled(Flex) `
    height:calc(100vh - ${NAVIGATION_HEIGHT});
    width:100vw;
    background-color: ${ props => props.theme.main };
`;

// Here we differentiate between our main sites color
// and our secondary, or tertiary and so on if needed
Section.defaultProps = {
    theme: {
        main: PRIMARY_COLOR,
    }
};

// Set our secondary color
const secondary = {
    main: SECONDARY_COLOR,
};

// Creates a Footer Container
const Footer = styled(Flex) `
    width:100vw;
    bottom:0;
    height: ${ FOOTER_HEIGHT };
    background-color: ${ PRIMARY_COLOR };
`;

export default class Main extends Component {
  render() {
    return (
      <>
       <Navbar></Navbar>
        <Section theme={secondary}></Section>
        <Section></Section>
        <Section theme={secondary}></Section>
        <Section></Section>
        <Footer></Footer>
      </>
    );
  }
}

