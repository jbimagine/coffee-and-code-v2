import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from '../ui_kit/Flex';
import { 
  Section, 
  secondary, 
  SectionHeader,
  SectionContent, 
  NAVIGATION_HEIGHT, 
  MainContent,
  SecondaryContent 
} from '../styles/main_styles';

const AboutContentContainer = styled(Flex) `
  flex-direction:column;
  justify-content:center;
  font-size:32px;
  height:100%;
  z-index:2;
`;

export default class About extends Component {
  render() {
    return (
      <>
        <Section color='true' theme={secondary} height={ `calc(100% - ${NAVIGATION_HEIGHT}px)`} clipPath='none'>
        <SectionContent>
          <SectionHeader>
            Front End. <br /> Design. <br/> Development. 
          </SectionHeader>
          <AboutContentContainer>
          <MainContent>
          Hi, I'm Joe Bates!  I am a Software 
          Designer & Developer focused on Design, Responsive Web Development,
          and Front-End technologies
          </MainContent>
          <SecondaryContent>
            I currently live and work in San Francisco, CA where I am a Software Engineer for one of the leading 
            Interior Designing companies, Modsy.  I am also the creator of the Youtube channel Coffee & Code sharing
            my knowledge of coding in Javascript with the masses. 
          </SecondaryContent>
          </AboutContentContainer>
        </SectionContent>
        </Section>     
      </>
    );
  }
}

