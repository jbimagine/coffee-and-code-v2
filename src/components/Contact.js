import React, { Component } from 'react';
import { 
  Section, 
  SectionContent,
  SectionHeader, 
  NAVIGATION_HEIGHT, 
  secondary,
  MainContent,
  SecondaryContent,
  BorderBox,
 } from '../styles/main_styles';

export default class Contact extends Component {
  render() {
    return (
      <>
        <Section height = '100%' theme ={secondary} color='true' clipPath='true'>
          <SectionContent>
            <SectionHeader>
                Drop Me A Line!
            </SectionHeader>
          <BorderBox border='1px solid #000000' boxItem={`Let's Chat`}/>
          <MainContent>
          Want to discuss your project?  Or just want to chat?  Send me a message!
          </MainContent>
          <SecondaryContent>
            Want to know more about me?  Feel free to check out my Github
            and Linkedin pages!!
          </SecondaryContent>
            <BorderBox width = 'auto' border='1px solid #000000' boxItem={ 'Github' }/>
            <BorderBox width = 'auto' border='1px solid #000000' boxItem={ 'Linkedin' }/>
          </SectionContent>
        </Section>     
      </>
    );
  }
}

