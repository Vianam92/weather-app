import "../components/weather.component";
export class WeatherApp extends HTMLElement {
  
 constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <weather-app>
    </weather-app>
        `;
  }
}

customElements.define("weather-page", WeatherApp);
