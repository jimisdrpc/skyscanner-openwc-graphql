const templateString = `<div id="mydiv" name="mydiv"><p>Trying html plus javascript in same file</p></div>`;
const template = document.createElement("template");
template.innerHTML = templateString;

export class MyCompleteWebcomponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define("my-complete-webcomponent", MyCompleteWebcomponent);