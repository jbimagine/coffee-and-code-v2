import React, { Component } from 'react';
import { Section, SectionImage, SectionHeader, NAVIGATION_HEIGHT } from '../styles/main_styles';
import coffeeAndCodeSVG07 from '../imgs/coffee_and_code_image_07.jpg'

export default class Contact extends Component {
  render() {
    return (
      <>
        <Section height = '100vh'>
        <SectionHeader>{this.props.title}</SectionHeader>
          <SectionImage
            backgroundImage = { `url(${ coffeeAndCodeSVG07 })` }
            opacity = { 0.25 }
            position = 'center'
          />
        </Section>     
      </>
    );
  }
}

