import React, { Component } from 'react';
import { Section, secondary, SectionHeader } from '../styles/main_styles';

export default class About extends Component {
  render() {
    return (
      <>
        <Section Home theme={secondary}>
        <SectionHeader>{this.props.title}</SectionHeader>
        </Section>     
      </>
    );
  }
}

