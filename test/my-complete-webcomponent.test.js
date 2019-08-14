import { html, fixture, expect } from '@open-wc/testing';

import '../src/skyscanner-flight-search/my-complete-webcomponent.js';

describe('MyCompleteWebcomponent', () => {
    it('show div', async() => {
        const el = await fixture(html `
      <my-complete-webcomponent></my-complete-webcomponent>
    `);
        el.shadowRoot.querySelector('#mydiv');
        expect(el).to.exist;
    });

    it('show initial paragraph', async() => {
        const el = await fixture(html `
      <my-complete-webcomponent></my-complete-webcomponent>
    `);

        expect(el).shadowDom.to.equal(
            `<div id="mydiv" name="mydiv"><p>Trying html plus javascript in same file</p></div>`,
        );
    });
});