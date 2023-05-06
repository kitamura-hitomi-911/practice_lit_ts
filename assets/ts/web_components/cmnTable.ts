import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ss-cmn-table")
export class CmnTable extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  @property({ type: Array })
  items = ["World", "aaa"];

  // Render the UI as a function of component state
  render() {
    return html`
      <table>
        <tr>
          ${this.items.map((item) => html`<td>${item}</td>`)}
        </tr>
      </table>
    `;
  }
}
