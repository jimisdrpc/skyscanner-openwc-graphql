import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { SkyscannerOpenwcGraphql } from '../src/SkyscannerOpenwcGraphql.js';
import '../skyscanner-openwc-graphql.js';

storiesOf('skyscanner-openwc-graphql', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(SkyscannerOpenwcGraphql))
  .add(
    'Alternative Title',
    () => html`
      <skyscanner-openwc-graphql .title=${'Something else'}></skyscanner-openwc-graphql>
    `,
  );
