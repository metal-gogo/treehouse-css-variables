// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom components
import CanIUse from './components/can-i-use';

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
          <Text margin="100px 0 0" textColor="secondary">
            by Daniel González
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="terciary">
            CSS Variables
          </Heading>
          <List margin="30px 0 0">
            <ListItem margin="10px 0 0">
              CSS variables are a game changer!
            </ListItem>
            <ListItem margin="10px 0 0">
              They can do more than preprocessor variables.
            </ListItem>
            <ListItem margin="10px 0 0">
              Supported in mayor browsers (Except IE).
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
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
      </Deck>
    );
  }
}
