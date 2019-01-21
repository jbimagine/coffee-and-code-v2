import styled from 'styled-components';
import { Flex } from '../ui_kit/Flex';

// Global variables for  our repeating 
// css values
export const PRIMARY_COLOR = 'rgb(51,80,117)';
export const SECONDARY_COLOR = '#FFF';
export const NAVIGATION_HEIGHT = '80px';
export const FOOTER_HEIGHT = '80px';

// Creates a container for our Navigation
export const Navbar = styled(Flex) `
    height:${ NAVIGATION_HEIGHT };
    position:fixed;
    width:100vw;
    background-color:${ PRIMARY_COLOR };
`;
export const NavbarItems = styled(Flex) `
    display:flex;
    justify-content:space-between;
    width:100%;
    padding:0 16px;
`;

// Create a global title container
export const Title = styled(Flex) `
    font-size:32px;
    font-weight:500;
    display:flex;
    height:auto;
    align-items:center;
`;

// Creates a Section Container for each repeating section 
// of the site E.g. Home, About, My Work, etc
export const Section = styled(Flex) `
    height:${ props => props.Home?'100vh':`calc(100vh - ${NAVIGATION_HEIGHT})` };
    width:100vw;
    background-color: ${ props => props.theme.main };
`;

export const MenuItemsContainer = styled(Flex) `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:200px;
    position:absolute;
    top:${NAVIGATION_HEIGHT};
    background-color:${PRIMARY_COLOR};
`;

export const MenuItems = styled(Flex) `
    height:20%;
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