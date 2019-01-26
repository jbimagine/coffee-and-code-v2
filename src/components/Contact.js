import React, { Component } from 'react';
import { Section, SectionHeader, NAVIGATION_HEIGHT, secondary } from '../styles/main_styles';

export default class Contact extends Component {
  render() {
    return (
      <>
        <Section height = '100vh' theme ={secondary} color ='true'>
        <SectionHeader>{this.props.title}</SectionHeader>
        </Section>     
      </>
    );
  }
}

