import React, { Component } from 'react';
import { Section, secondary, SectionImage, SectionHeader} from '../styles/main_styles';
import coffeeAndCodeSVG04 from '../imgs/coffee_and_code_image_04.jpg'


export default class Home extends Component {
  render() {
    return (
      <>
        <Section Home theme={secondary}>
        <SectionHeader>{this.props.title}</SectionHeader>
      <SectionImage backgroundImage = { `url(${ coffeeAndCodeSVG04 })` }/>
          
        </Section>
      </>
    );
  }
}

