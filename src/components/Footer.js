import React, { Component } from 'react';
import { FooterContainer, FooterItems } from '../styles/main_styles';

export default class Footer extends Component {
  render() {
    return (
      <>
        <FooterContainer>
          <FooterItems>
            <div>&copy; 2019 Jbimagine Studios</div>
            <div>Joe Bates</div>
          </FooterItems>
        </FooterContainer>
      </>
    );
  }
}

