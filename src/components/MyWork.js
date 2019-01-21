import React, { Component } from 'react';
import { Section, SectionHeader } from '../styles/main_styles';

export default class MyWork extends Component {
  render() {
    return (
      <>
        <Section>
        <SectionHeader>{this.props.title}</SectionHeader>
        </Section>
      </>
    );
  }
}

