import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from '../ui_kit/Flex';
import { Section, secondary, SectionHeader, SectionImage, PRIMARY_COLOR, media } from '../styles/main_styles';
import coffeeAndCodeSVG10 from '../imgs/coffee_and_code_image_10.png';

const AboutContentContainer = styled(Flex) `
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:0 32px;
  text-align:justify;
  text-align-last:center;
  height:100%;
  z-index:2;
`;

const Content = styled(Flex) `
  margin:24px 0;
`;

export default class About extends Component {
  render() {
    return (
      <>
        <Section color='true' theme={secondary}>
        <SectionHeader>{this.props.title}</SectionHeader>
        <SectionImage backgroundImage = { `url(${ coffeeAndCodeSVG10 })`} opacity = {0.1} position='left' />
        <AboutContentContainer>
        <Content>
          Hi, I'm Joe Bates.  Pleased to meet you!
        </Content>
        <Content>
          I am a Front End Software Engineer with specialities in HTML, CSS, Javascript, React, and Babylon.  
          I currently live and work in San Francisco, CA where I am a Software Engineer for one of the leading 
          Interior Designing companies, Modsy.  I am also the creator of the Youtube channel Coffee & Code sharing
          my knowledge of coding in Javascript with the masses. 
        </Content>
        </AboutContentContainer>
        </Section>     
      </>
    );
  }
}

