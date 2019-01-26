import React, { Component } from 'react';
import { Flex } from '../ui_kit/Flex';
import styled from 'styled-components';
import { 
  Section, 
  secondary, 
  SectionImage, 
  SectionHeader,
  SectionContent,
} from '../styles/main_styles';
import coffeeAndCodeSVG11 from '../imgs/coffee_and_code_image_11.jpg'

const HomeContent = styled(SectionContent) `
  z-index:5;
  font-size:72px;
  bottom:10vh;
  position:fixed;
  width:75vw;
`;

const ContentContainer = styled(Flex) `
  font-size:28px;
  border:1px solid #FFF;
  border-radius:2px;
  width:140px;
  padding:16px;
`;

const Content = styled(Flex) `
  justify-content:center;
  width:100%;
  text-align:center;
`;

export default class Home extends Component {
  render() {
    return (
      <>
        <Section Home theme={secondary} >
          <SectionHeader>{this.props.title}</SectionHeader>
          <SectionImage backgroundImage = { `url(${ coffeeAndCodeSVG11 })`} position = 'bottom'/>  
          <HomeContent><p>A Cup of Coffee = Code<sup>2</sup></p>
          <ContentContainer>
          <Content> Learn More</Content>
          </ContentContainer>
          </HomeContent> 
          
        </Section>
      </>
    );
  }
}

