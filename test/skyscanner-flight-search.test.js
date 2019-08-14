import { html, fixture, expect } from '@open-wc/testing';

import '../src/skyscanner-flight-search/skyscanner-flight-search.js';

describe('skyscanner flight search', () => {
    it('show div', async() => {
        const el = await fixture(html `
      <skyscanner-flight-search></skyscanner-flight-search>
    `);
        console.debug('before promisse');
        window.customElements.whenDefined('skyscanner-flight-search').then(() => {
            el.shadowRoot.querySelector('#firstdiv2');
            console.debug('after promisse');
            expect(el).to.exist;

        });
    });
});