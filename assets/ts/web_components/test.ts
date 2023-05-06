import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export class SsTest extends LitElement {
  static properties = {
    name: { type: String },
  };

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  @property()
  name?: string = "World";

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
