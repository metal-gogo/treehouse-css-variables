/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Heading,
  Link,
  List,
  ListItem,
  Slide,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom components
import CanIUse from './components/can-i-use';
import Glitch from './components/glitch';

// Import examples
import cascadingVariablesExample from '!raw-loader!./assets/cascadingVariables.css';
import declaringVariablesExample from '!raw-loader!./assets/declaringVariables.css';
import usingVariablesExample from '!raw-loader!./assets/usingVariables.css';

// Require CSS
import 'normalize.css';
import './styles.css';

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
              notation:
              <List margin="20px 60px">
                <ListItem margin="10px 0 0">
                  <Code>--my-color: violet;</Code>
                </ListItem>
              </List>
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
              Reference the variable or property name using:
              <List margin="20px">
                <ListItem margin="10px 0 0">
                  <Code>background-color: var(--my-color);</Code>
                </ListItem>
              </List>
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

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 30px" textColor="tertiary" fit bold>
            CSS variables VS Preprocessor variables
          </Heading>
          <Table className="table">
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Preprocessor</TableHeaderItem>
                <TableHeaderItem>CSS</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>They do not run in the browser</TableItem>
                <TableItem>They run in the browser</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  Variables are replaced with static values when compiled
                </TableItem>
                <TableItem>Browsers can update them at runtime</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>They are not aware of the DOM structure</TableItem>
                <TableItem>Have dynamic capabilities</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary" fit bold>
            CSS variables cascade and inheritance{' '}
            <i className="em em-nerd_face" />
          </Heading>
          <List margin="30px 0 0">
            <ListItem margin="10px 0 0">
              Since CSS variables follow the standard cascade rules, the behave
              liker regular CSS properties.
            </ListItem>
            <ListItem margin="10px 0 0">
              They inherit, cascade, and can be declared on or scoped to any CSS
              selector.
            </ListItem>
            <ListItem margin="10px 0 0">
              You can define and/or reset a variable at different levels of
              specificity.
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading margin="0 0 30px" textColor="tertiary" bold>
            CSS variables
          </Heading>
          <Glitch
            alt="CSS variables cascade and inheritance"
            path="variables.css"
            project="css-variables-cascade-and-inheritance"
            title="CSS variables cascade and inheritance"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading margin="0 0 30px" textColor="tertiary" bold>
            SCSS variables
          </Heading>
          <Glitch
            alt="SCSS variables error"
            path="public/style.scss"
            project="scss-variables-error"
            title="CSS variables error"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading margin="0 0 30px" textColor="tertiary" bold>
            SCSS variables
          </Heading>
          <Glitch
            alt="SCSS variables success"
            path="public/style.scss"
            project="scss-variables-success"
            title="CSS variables success"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary" fit bold>
            CSS variables cascade and inheritance FTW{' '}
            <i className="em em-sunglasses" />
          </Heading>
          <CodePane
            lang="css"
            source={cascadingVariablesExample}
            margin="30px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading margin="0 0 30px" textColor="tertiary" bold fit>
            CSS variables and SVGs
          </Heading>
          <Glitch
            alt="CSS variables and SVGs"
            project="css-variables-and-svgs"
            title="CSS variables and SVGs"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary" fit bold>
            Updating CSS variables with JavaScript
          </Heading>
          <List margin="30px 0 0">
            <ListItem margin="10px 0 0">
              CSS variables are not only updated using the cascade and
              inheritance.
            </ListItem>
            <ListItem margin="10px 0 0">
              You can also read and write or get and set CSS variable values
              from your JavaScript.
              <List margin="20px 60px">
                <ListItem margin="10px 0 0">
                  <Code>getPropertyValue()</Code> gets the value of a custom
                  property
                </ListItem>
                <ListItem margin="10px 0 0">
                  <Code>setProperty()</Code> sets the value of the custom
                  property
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading margin="0 0 30px" textColor="tertiary" bold fit>
            Updating CSS variables with JavaScript
          </Heading>
          <Glitch
            alt="Updating CSS variables with JavaScript"
            project="updating-css-variables-with-javascript"
            title="Updating CSS variables with JavaScript"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary" fit bold>
            CSS variables caveats
          </Heading>
          <List margin="30px 0 0">
            <ListItem margin="10px 0 0">
              CSS Variables won't replace Preprocessors!
            </ListItem>
            <ListItem margin="10px 0 0">
              CSS Variable names are case sensitive
            </ListItem>
            <ListItem margin="10px 0 0">
              CSS variables are fun and useful <i className="em em-beer" />!!
            </ListItem>
            <ListItem margin="10px 0 0">
              They have the next limitations:
              <List margin="20px 60px">
                <ListItem margin="10px 0 0" textSize={16}>
                  Can't be used as a selector{' '}
                  <Code textSize={16}>
                    {'var(--selector-name) { margin: 10px; }'}
                  </Code>
                </ListItem>
                <ListItem margin="10px 0 0" textSize={16}>
                  Can't be used as a property name{' '}
                  <Code textSize={16}>
                    {'.my-class { var(--property-name): 20px; }'}
                  </Code>
                </ListItem>
                <ListItem margin="10px 0 0" textSize={16}>
                  Can't be used in a media query expression{' '}
                  <Code textSize={16}>
                    {'@media (min-width: var(--breakpoint-md)) { ... }'}
                  </Code>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary" fit bold>
            Cool examples
          </Heading>
          <List margin="30px 0 0">
            <ListItem margin="10px 0 0">
              <Link
                textColor="quarternary"
                href="https://googlechrome.github.io/samples/css-custom-properties/index.html"
                target="_blank"
              >
                Theming with CSS variables
              </Link>
            </ListItem>
            <ListItem margin="10px 0 0">
              <Link
                textColor="quarternary"
                href="https://jsperf.com/css-variables-vs-inline-styles"
                target="_blank"
              >
                Updating performance
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary" fit bold>
            Recommended further reading
          </Heading>
          <List margin="30px 0 0">
            <ListItem margin="10px 0 0">
              <Link
                textColor="quarternary"
                textSize={16}
                href="https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care"
                target="_blank"
              >
                CSS Variables: Why Should You Care? - By Rob Dodson [Chrome]
              </Link>
            </ListItem>
            <ListItem margin="10px 0 0">
              <Link
                textColor="quarternary"
                textSize={16}
                href="https://csswizardry.com/2016/10/pragmatic-practical-progressive-theming-with-custom-properties/"
                target="_blank"
              >
                Pragmatic, Practical, and Progressive Theming with Custom
                Properties - By Harry Roberts [CSSWizardry]
              </Link>
            </ListItem>
            <ListItem margin="10px 0 0">
              <Link
                textColor="quarternary"
                textSize={16}
                href="https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/"
                target="_blank"
              >
                It's Time To Start Using CSS Custom Properties - By Serg
                Hospodarets [Smashing magazine]
              </Link>
            </ListItem>
            <ListItem margin="10px 0 0">
              <Link
                textColor="quarternary"
                textSize={16}
                href="https://www.sitepoint.com/practical-guide-css-variables-custom-properties/"
                target="_blank"
              >
                A Practical Guide to CSS Variables (Custom Properties) - By
                Maria Antonietta Perna [Sitepoint]
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading margin="40px 0 0" textColor="quarternary" fit bold>
            Thank you!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
