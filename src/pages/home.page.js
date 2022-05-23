import planeta from "../static/planeta-tierra.png";
import bird from "../static/pajaro.png";
import { html, LitElement, css } from "lit";
export class HomePage extends LitElement {
  static get styles() {
    return css`
      .header {
        padding: 2rem;
        box-shadow:5px 10px 5px grey;
      }

      .link-page {
        font-size: 1.5rem;
        text-decoration:none;
        color:var(--bg-color-home);
        text-transform:uppercase
      }

      .link-page:hover {
        text-decoration: underline;
        font-size: 1.6rem;
      }

      .cd-headline{
      color:var(--bg-color-home);
      font-size:1.6rem;
      padding-left:25px;
      }

      .contain-firstImage,
      .contain-secondImage {
        width: 100%;
        display: flex;
      }

      .contain-firstImage img {
        width: 250px;
        animation: float 10s ease-in-out infinite;
      }

      .contain-secondImage {
        justify-content: space-between;
        align-items: center;
        padding-top: 2rem;
      }

      .contain-secondImage img {
        width: 150px;
      }

      .footer {
        position: fixed;
        bottom: 0;
        display: flex;
        padding: 1rem;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      .footer span a{
        font-size:1.1rem;
        text-decoration:none;
        color: var(--bg-color-home);
      }

      @keyframes float {
        0% {
          /*box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);*/
          transform: translatex(10px);
        }

        50% {
          /*box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);*/
          transform: translatex(200px);
        }

        100% {
          /*box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);*/
          transform: translatex(20px);
        }
      }

      @media (min-width: 812px) {

        .contain-secondImage, .contain-firstImage{
          min-width:508px;
          justify-content:center;
        }
        .contain-secondImage img{
          width:350px;
        }
        .contain-secondImage img{
          width:200px;
        }
      }
    `;
  }

  static get properties() {
    return {
      planeta: { type: String },
      bird: { type: String },
    };
  }

  constructor() {
    super();
    this.planeta = planeta;
    this.bird = bird;
  }

  render() {
    return html`
      <header class="header">
        <a href="/weather" class="link-page">Weather App</a>
      </header>
      <main class="main-home">
        <div class="contain-firstImage">
          <img src="${this.planeta}" alt="planeta con nubes" />
        </div>
        <div class="contain-secondImage">
          <h2 class="cd-headline rotate-1">
            <span>You are going to travel?!</span> 
            <span>that time does not take you by surprise</span>
          </h2>
          <img src="${this.bird}" alt="planeta con nubes" />
        </div>
      </main>
      <footer class="footer">
        <span>
        Made by  <a href="//github.com/Vianam92">vianam92</a>
        </span>
       
      </footer>
    `;
  }

}

customElements.define("home-page", HomePage);
