import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from '../ui_kit/Flex';
import { 
  Section, 
  secondary, 
  SectionHeader, SectionImage, 
  SectionContent, 
  NAVIGATION_HEIGHT, 
  media 
} from '../styles/main_styles';
import coffeeAndCodeSVG10 from '../imgs/coffee_and_code_image_10.png';

const ContentHeader = styled.h1 `
  width:100vw;
  font-size:72px;
`;

const AboutContentContainer = styled(Flex) `
  flex-direction:column;
  justify-content:center;
  font-size:32px;
  height:100%;
  z-index:2;
`;

const Content = styled(Flex) `
line-height:${ props => props.lineHeight?props.lineHeight: '48px' };
font-weight:200;
padding-bottom:24px;
font-size: ${ props => props.fontSize?props.fontSize:'32px' };
`;

export default class About extends Component {
  render() {
    return (
      <>
        <Section color='true' theme={secondary} height={ `calc(100% -${NAVIGATION_HEIGHT})`} clipPath='none'>
        <SectionContent>
          <SectionHeader fontSize='72px'>
            <div>
            Front End. <br /> Design. <br/> Development. 
            </div>
          </SectionHeader>
          <AboutContentContainer>
          <Content fontSize='48px' lineHeight = '60px'>
          Hi, I'm Joe Bates.  I am a Software 
          Designer & Developer focused on Design, Responsive Web Development,
          and Front-End technologies
          </Content>
          <Content>
            I currently live and work in San Francisco, CA where I am a Software Engineer for one of the leading 
            Interior Designing companies, Modsy.  I am also the creator of the Youtube channel Coffee & Code sharing
            my knowledge of coding in Javascript with the masses. 
          </Content>
          </AboutContentContainer>
        </SectionContent>
        </Section>     
      </>
    );
  }
}

