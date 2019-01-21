import React, { Component } from 'react';
import { Navbar, NavbarItems, MenuItems, MenuItemsContainer, Title } from '../styles/main_styles';
import closeIconSVG from '../imgs/close_icon.svg';
import menuIconSVG from '../imgs/menu_icon.svg';

export default class Navigation extends Component {

  render() {
    return (
      <>
       <Navbar>
           <NavbarItems>
           <Title>Coffee & Code</Title>
           <img src = { this.props.isMenuOpen?closeIconSVG:menuIconSVG } alt = { this.props.isMenuOpen?'close icon':'menu icon' }  onClick = { ()=>{ this.props.handleMenuState(); } } />
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

