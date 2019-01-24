import styled from 'styled-components';
import { Flex } from '../ui_kit/Flex';
import { Image } from '../ui_kit/Image';
import { css } from 'styled-components';

// Set the queries for the different media sizes
export const sizes = {
    desktop: 1440,
    tablet: 1024,
    phone: 650,
    phoneSmall: 400,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {})

// Global variables for  our repeating 
// css values
export const NAVIGATION_HEIGHT = 80;
export const PRIMARY_COLOR = 'rgb(51,80,117)';
export const SECONDARY_COLOR = '#FFF';
const FOOTER_HEIGHT = '40px';
const DEFAULT_FONT_WEIGHT = 300;

// Creates a container for our Navigation
export const Navbar = styled(Flex) `
    height:${ NAVIGATION_HEIGHT }px;
    position:fixed;
    width:100vw;
    background-color:${ PRIMARY_COLOR };
    z-index: 5;
`;
export const NavbarItems = styled(Flex) `
    display:flex;
    justify-content:space-between;
    width:100%;
    padding:0 16px;
`;

// Create a global title container
export const Title = styled.h1 `
    font-size:32px;
    font-weight:${DEFAULT_FONT_WEIGHT};
    display:flex;
    height:auto;
    align-items:center;
`;

// Creates a Section Container for each repeating section 
// of the site E.g. Home, About, My Work, etc
export const Section = styled(Flex) `
    height:${ props => props.Home?'100vh':`calc(100vh - ${NAVIGATION_HEIGHT}px)` };
    flex-direction:column;
    width:100vw;
    background-color: ${ props => props.theme.main };
    position:relative;
    color: ${ props => props.color?PRIMARY_COLOR:SECONDARY_COLOR };
`;

// Creates a  background image for our Sections
export const SectionImage = styled(Flex) `
    height:100%;
    width:100vw;
    position:absolute;
    background-image: ${ props => props.backgroundImage?props.backgroundImage:null };
    background-size: ${ props => props.backgroundImage?'cover':null };
    background-repeat: ${ props => props.backgroundImage?'no-repeat':null };
    background-position:${ props => props.backgroundImage&&props.position };
    opacity:${ props => props.opacity };
`;

//  Creates the main header title for our Sections 
export const SectionHeader = styled.h1 `
    display:flex;
    font-weight:${DEFAULT_FONT_WEIGHT};
    height:auto;
    justify-content:center;
    width:100%;
    z-index:2;
    position:absolute;
`;

// Creates a wrapper for styling purposes for our
// menu icon
export const MenuIconContainer = styled(Flex) `
    height:100%;
    justify-content:center;
    align-items:center;
`;

// Styling for our Menu Icon
export const MenuIcon = styled(Image) `
    cursor:pointer;
`;

// Container for all of the menu items in the navigatation
export const MenuItemsContainer = styled(Flex) `
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:auto;
    padding:16px 0;
    position:absolute;
    // Setting the total height minus 1px to ensure that there is no gap 
    // between the nav and its menu
    top:${NAVIGATION_HEIGHT - 1}px;
    background-color:${PRIMARY_COLOR};
`;

// Contains each individual menu item
export const MenuItems = styled.h2 `
    height:20%;
    font-weight:${DEFAULT_FONT_WEIGHT};
    width:40%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

// Here we differentiate between our main sites color
// and our secondary, or tertiary and so on if needed
Section.defaultProps = {
    theme: {
        main: PRIMARY_COLOR,
    }
};

// Set our secondary color
export const secondary = {
    main: SECONDARY_COLOR,
};

// Creates a Footer Container
export const FooterContainer = styled(Flex) `
    width:100vw;
    bottom:0;
    height: ${ FOOTER_HEIGHT };
    background-color: ${ PRIMARY_COLOR };
`;

// Styling for the footer items in the container
export const FooterItems = styled(Flex) `
    width:100%;
    padding:0 16px;
    justify-content:space-between;
    align-items:center;
`;