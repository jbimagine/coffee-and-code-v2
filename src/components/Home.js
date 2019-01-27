import React, { Component } from 'react';
import { Flex } from '../ui_kit/Flex';
import styled from 'styled-components';
import { 
  Section, 
  secondary, 
  SectionImage, 
  SectionHeader,
  SectionContent,
  media,
  BorderBox,
} from '../styles/main_styles';
import coffeeAndCodeSVG11 from '../imgs/coffee_and_code_image_11.jpg'

const HomeContent = styled(SectionContent) `
  z-index:5;
  font-size:72px;
  bottom:10vh;
  position:fixed;
  width:75vw;

  ${ media.phone `
  font-size:48px;
  line-height:48px;
  width:80vw;
`}
`;

export default class Home extends Component {
  render() {
    return (
      <>
        <Section Home theme={secondary} >
          <SectionHeader>{this.props.title}</SectionHeader>
          <SectionImage backgroundImage = { `url(${ coffeeAndCodeSVG11 })`} position = 'bottom'/>  
          <HomeContent><p>A Cup of Coffee = Code<sup>2</sup></p>
          <BorderBox boxText='Learn More'/>
          </HomeContent> 
          
        </Section>
      </>
    );
  }
}

