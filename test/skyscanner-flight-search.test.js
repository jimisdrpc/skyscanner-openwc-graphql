import { html, fixture, expect } from '@open-wc/testing';

import '../src/skyscanner-flight-search/skyscanner-flight-search.js';

describe('skyscanner flight search', () => {
    it('show div', async() => {
        const el = await fixture(html `
      <skyscanner-flight-search></skyscanner-flight-search>
    `);
        el.shadowRoot.querySelector('#firstdiv');
        expect(el).to.exist;
    });
});