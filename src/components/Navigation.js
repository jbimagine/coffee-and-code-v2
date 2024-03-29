import React, { Component } from 'react';
import { 
  Navbar,
  NavbarItems, 
  MenuItems, 
  MenuIconContainer, 
  MenuContainer, 
  Title, 
  MenuIcon,
  MenuItemsContainer,
  MenuModal,
 } from '../styles/main_styles';
import closeIconSVG from '../imgs/close_icon.svg';
import menuIconSVG from '../imgs/menu_icon.svg';

export default class Navigation extends Component {

  render() {
    return (
      <>
       <Navbar backgroundColor={this.props.isNavBackgroundVisible&&'#000'}>
           <NavbarItems>
           <Title>Coffee & Code</Title>
           <MenuIconContainer>
            <MenuIcon 
              src = { this.props.isMenuOpen?closeIconSVG:menuIconSVG } 
              alt = { this.props.isMenuOpen?'close icon':'menu icon' }  
              onClick = { ()=>{ this.props.handleMenuState(); } }
            />
           </MenuIconContainer>
           </NavbarItems>
          { 
            this.props.isMenuOpen&&<MenuContainer>
            <MenuModal>
           {
              this.props.sectionHeaders.map((section, index) => 
                <MenuItemsContainer key={ index } >
                <MenuItems>{ section.name }</MenuItems>
                </MenuItemsContainer>
              )
            }
            </MenuModal>
           </MenuContainer>
           }
       </Navbar>
      </>
    );
  }
}

