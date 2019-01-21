import React, { Component } from 'react';
import { Navbar, NavbarItems, MenuItems, MenuIconContainer, MenuItemsContainer, Title, MenuIcon } from '../styles/main_styles';
import closeIconSVG from '../imgs/close_icon.svg';
import menuIconSVG from '../imgs/menu_icon.svg';

export default class Navigation extends Component {

  render() {
    return (
      <>
       <Navbar>
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
            this.props.isMenuOpen&&<MenuItemsContainer>
           {
              this.props.sectionHeaders.map((section, index) => 
                <MenuItems key={ index }>{ section.name }</MenuItems>
              )
            }
           </MenuItemsContainer>
           }
       </Navbar>
      </>
    );
  }
}

