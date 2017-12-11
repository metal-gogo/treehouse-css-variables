// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#051727',
    secondary: '#fff',
    tertiary: '#959ea2',
    accent: '#54d1a7'
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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
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
        <Slide transition={['fade']} bgColor="tertiary" />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary" />
        <Slide transition={['fade']} bgColor="secondary" textColor="primary" />
      </Deck>
    );
  }
}
