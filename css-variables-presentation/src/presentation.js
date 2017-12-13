/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom components
import CanIUse from './components/can-i-use';
import Glitch from './components/glitch';

// Import examples
import declaringVariablesExample from '!raw-loader!./assets/declaringVariables.css';
import usingVariablesExample from '!raw-loader!./assets/usingVariables.css';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#051727',
    secondary: '#fff',
    tertiary: '#959ea2',
    quarternary: '#54d1a7'
  },
  {
    primary: 'Lato',
    secondary: 'Helvetica'
  }
);

const glitchWrapStyle = {
  height: '600px',
  width: '100%',
  border: '1px solid #C3C3C3',
  borderRadius: '5px',
  boxShadow: '4px 4px #C3C3C3',
  backgroundColor: 'white',
  overflow: 'hidden'
};

const glitchIframeStyle = {
  height: '100%',
  width: '100%',
  border: 0
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress={'bar'}
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            CSS Variables
          </Heading>
          <Heading margin="10px 0 0" size={2} textColor="tertiary" fit bold>
            why would I need them if I use [insert favourite CSS preprocessor
            name]?
          </Heading>
          <Text margin="100px 0 0" textColor="quarternary">
            by Daniel González
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="terciary">
            CSS Variables
          </Heading>
          <List margin="30px 0 0">
            <ListItem margin="10px 0 0">
              CSS variables are [potentially] game changers!
            </ListItem>
            <ListItem margin="10px 0 0">
              They can do more than preprocessor variables.
            </ListItem>
            <ListItem margin="10px 0 0">Supported in mayor browsers.</ListItem>
          </List>
          <Appear>
            <Text margin="40px 0 0" textColor="quarternary">
              Except on IE... <i className="em em-face_palm" />
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading
            margin="0 0 30px"
            size={1}
            caps
            lineHeight={1}
            textColor="terciary"
          >
            CSS Variables
          </Heading>
          <CanIUse feature="css-variables" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary" fit bold>
            Declaring and using CSS variables
          </Heading>
          <List margin="30px 0 0">
            <ListItem margin="10px 0 0">
              Declare the variable inside a selector using custom property
              notation.
            </ListItem>
            <ListItem margin="10px 0 0">
              Reference the variable or property name.
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary" fit bold>
            Declaring and using CSS variables
          </Heading>
          <List margin="30px 0 0">
            <ListItem margin="10px 0 0">
              Declare the variable inside a selector using custom property
              notation.
            </ListItem>
          </List>
          <Appear>
            <CodePane
              lang="css"
              source={declaringVariablesExample}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary" fit bold>
            Declaring and using CSS variables
          </Heading>
          <List margin="30px 0 0">
            <ListItem margin="10px 0 0">
              Reference the variable or property name.
            </ListItem>
          </List>
          <Appear>
            <CodePane
              lang="css"
              source={usingVariablesExample}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading margin="0 0 30px" textColor="tertiary" fit bold>
            Declaring and using CSS variables
          </Heading>
          <Glitch
            alt="Using and declaring css variables demo"
            path="variables.css"
            project="using-and-declaring-css-variables"
            title="Using and declaring css variables"
          />
        </Slide>
      </Deck>
    );
  }
}
