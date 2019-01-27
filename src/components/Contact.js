import React, { Component } from 'react';
import { 
  Section, 
  SectionContent,
  SectionHeader, 
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
                { this.props.title }
            </SectionHeader>
          <BorderBox border='1px solid #000000' boxText={`Let's Chat`}/>
          <MainContent>
          Want to discuss your project?  Or just want to chat?  Send me a message!
          </MainContent>
          <SecondaryContent>
            Want to know more about me?  Feel free to check out my Github
            and Linkedin pages!!
          </SecondaryContent>
            <BorderBox width = 'auto' border='1px solid #000000' boxText={ 'Github' }/>
            <BorderBox width = 'auto' border='1px solid #000000' boxText={ 'Linkedin' }/>
          </SectionContent>
        </Section>     
      </>
    );
  }
}

