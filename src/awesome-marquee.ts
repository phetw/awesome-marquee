
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('awesome-marquee')
export class AwesomeMarquee extends LitElement {
    // code example from https://www.w3schools.in/css3/css-marquee/
    static get styles () {
        return css`
            :host {
                display: block;
                height: 50px;
                width: 100%;
                overflow: hidden;
                position: relative;
                border: 2px solid transparent;
                border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
                border-image-slice: 1;
            }
            p {
                position: absolute;
                width: 100%;
                height: 100%;
                margin: 0;
                line-height: 50px;
                text-align: center;
                transform: translateX(100%);
                animation: scroll-left 20s linear infinite, blinking-red 300ms infinite;
            }
            @keyframes blinking-red {
                0%{
                    color: inherit;
                }
                100%{
                    color: red;
                }
            }
            @keyframes scroll-left {
                0% {
                    -moz-transform: translateX(100%);
                    -webkit-transform: translateX(100%);
                    transform: translateX(100%);
                }
                100% {
                    -moz-transform: translateX(-100%);
                    -webkit-transform: translateX(-100%);
                    transform: translateX(-100%);
                }
            }
        `;
    }

    render () {
        return html`<p><slot></slot></p>`;
    }
}
