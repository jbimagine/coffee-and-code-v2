import React, { Component } from 'react';
import { Section, secondary, SectionHeader } from '../styles/main_styles';

export default class About extends Component {
  render() {
    return (
      <>
        <Section color='true' theme={secondary}>
        <SectionHeader>{this.props.title}</SectionHeader>
        </Section>     
      </>
    );
  }
}

