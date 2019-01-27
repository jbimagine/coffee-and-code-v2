import React, { Component } from 'react';
import { Section, 
  SectionHeader, 
  tertiary, 
  SectionContent,
} from '../styles/main_styles';

export default class MyWork extends Component {
  render() {
    return (
      <>
       
        <Section height = '100vh' theme ={tertiary}  >
        <SectionContent>
        <SectionHeader>{this.props.title}</SectionHeader>
        </SectionContent>
        </Section>
      </>
    );
  }
}

