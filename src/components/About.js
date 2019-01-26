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

const MainContent = styled(Flex) `
font-weight:200;
padding:24px 0;
font-size:48px;

${ media.phone `
  font-size:24px;
  line-height:36px;
`}

`;

const Content = styled(MainContent) `
line-height:${ props => props.lineHeight?props.lineHeight: '48px' };
font-size: ${ props => props.fontSize?props.fontSize:'32px' };

&:last-child {
  padding:0 0 24px;
}

${ media.phone`
    font-size:18px;
    line-height: 32px;
    `}
`;

const AboutSection = styled(SectionHeader) `
  font-size:72px;
  ${media.phone `
    font-size:48px;
    word-break: break-all;
  `}
`;

export default class About extends Component {
  render() {
    return (
      <>
        <Section color='true' theme={secondary} height={ `calc(100% -${NAVIGATION_HEIGHT})`} clipPath='none'>
        <SectionContent>
          <AboutSection fontWeight= '400'>
            Front End. <br /> Design. <br/> Development. 
          </AboutSection>
          <AboutContentContainer>
          <MainContent>
          Hi, I'm Joe Bates!  I am a Software 
          Designer & Developer focused on Design, Responsive Web Development,
          and Front-End technologies
          </MainContent>
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

