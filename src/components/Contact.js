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


  state = {
    contact : [
      {
        name:'Github',
        link:'https://github.com/jbimagine',
      },
      {
        name:'Linkedin',
        link:'https://www.linkedin.com/in/joebatesimagine/',
      },
      {
        name:'Resume',
        link:'',
      },
    ]
  }

  render() {
    const { contact }=this.state;
    return (
      <>
        <Section height = '100%' theme ={secondary} color='true'>
          <SectionContent>
            <SectionHeader>
                { this.props.title }
            </SectionHeader>
          <BorderBox border='1px solid #000000' boxText={`Let's Chat`}/>
          <MainContent>
          Want to discuss your project?  Or just want to chat?  Send me a message!
          </MainContent>
          <SecondaryContent>
            Want to know more about me?  Feel free to check out my Github, Resume and/or
            Linkedin!!
          </SecondaryContent>
            {
              contact.map(( value, index ) => 
                <BorderBox key ={ index } width = 'auto' border='1px solid #000000' boxText={ value.name } boxLink={value.link} />
              )
            }
          </SectionContent>
        </Section>     
      </>
    );
  }
}

