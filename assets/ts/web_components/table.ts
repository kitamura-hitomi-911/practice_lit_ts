import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ss-table")
export class Table extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  @property({ type: Array })
  fields: { key: string; label: string }[] = [];

  @property({ type: Array })
  items: Record<string, string | number>[] = [];

  // Render the UI as a function of component state
  render() {
    return html`
      <ss-test></ss-test>
      <table>
        <thead>
          <tr>
            ${this.fields.map((field) => html`<th>${field.label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.items.map(
            (item) =>
              html`<tr>
                ${this.fields.map(
                  (field) => html`<td>${item[field.key] || ""}</td>`
                )}
              </tr>`
          )}
        </tbody>
      </table>
    `;
  }
}
