import React, { Component } from 'react';
import { Section, SectionImage, SectionHeader, theme } from '../styles/main_styles';
import coffeeAndCodeSVG07 from '../imgs/coffee_and_code_image_07.jpg'

export default class Contact extends Component {
  render() {
    return (
      <>
        <Section >
        <SectionHeader>{this.props.title}</SectionHeader>
          <SectionImage
            backgroundImage = { `url(${ coffeeAndCodeSVG07 })` }
            opacity = { 0.25 }
          />
        </Section>     
      </>
    );
  }
}

