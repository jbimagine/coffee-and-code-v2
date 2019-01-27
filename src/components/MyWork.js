import React, { Component } from 'react';
import { Section, 
  SectionHeader, 
  tertiary, 
  SectionContent,
  ClipBox, 
} from '../styles/main_styles';

export default class MyWork extends Component {
  render() {
    return (
      <>
        <ClipBox />
        <Section height = '100vh' theme ={tertiary} >
        <SectionContent>
        <SectionHeader>{this.props.title}</SectionHeader>
        </SectionContent>
        </Section>
      </>
    );
  }
}

