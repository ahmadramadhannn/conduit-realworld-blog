import { customElement } from "lit/decorators.js"
import { LitElement, html } from "lit"

@customElement("my-element")
export class CounterLit extends LitElement {

  render() {
    return html`
     <p>hello from lit in astro</p>
     <p>this is so fun anyway.</p>
    `
  }
}
