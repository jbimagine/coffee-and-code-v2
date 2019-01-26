import React, { Component } from 'react';
import { Section, 
  SectionHeader, 
  tertiary, 
  GREY_COLOR, 
  SectionContent,
  ClipBox, 
} from '../styles/main_styles';
import styled from 'styled-components';
import {Flex} from '../ui_kit/Flex';

const MYWORK_CLIP_PATH = `
polygon(
  0 0, /* left top */
  100% calc(100% - 92vh), /* right top */ 
  100% 100%, /* right bottom */
  0 100% /* left bottom */
)
`;
 
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

