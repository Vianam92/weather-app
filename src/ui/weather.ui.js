import { html, LitElement, css } from "lit";
export class WeatherApp extends LitElement {
  static get styles() {
    return css`
    :host{
      width:100%;
      display:flex;
      justify-content:center;
    }
      .container {
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #0b1b1722;
        box-shadow:10px 10px 10px #0b1b17a6;
        opacity: 2;
        max-width:550px;
        margin: 20px;
        text-align:center;
      }

      .location-names {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 0 20px;
      }

      .location-names h2 {
        color: #086d4d;
      }

      .location-names div {
        width: 200px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #031a14c1;
        text-align: end;
      }
      .pronost-days {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }
      .container-condition{
        display:flex;
        justify-content:space-around;
        width:100%;
        margin-top:1rem;
        align-items:center;
        color:#1f1207;
        font-size:1.1rem;
      }

      .container-condition div{
        display:flex;
        flex-direction:column;
      }

      .container-condition div img{
        width:100px;
      }

      .text-span{
        text-align:center;
      }
      @media (min-width: 768px) {
       .container{
         min-width:550px;
       }
      }
    `;
  }

  static get properties() {
    return {
      weather: { type: Object },
    };
  }

  render() {
    return html`
      <section class="container" id="container">
        ${this.weather === undefined
          ? html`You are going to travel ??? Don't let time catch you off guard`
          : html`
              <div class="location-names">
                <h2>${this.weather.location.name}</h2>
                <div>
                  <p>${this.weather.location.country}</p>
                  <span>${this.weather.location.region}</span>
                </div>
              </div>
              <div class="container-condition">
                <div>
                  <img
                    src=${this.weather.current.condition.icon}
                    alt="${this.weather.current.condition.text}"
                  />
                  <span class="text-span">${this.weather.current.condition.text}</span>
                </div>
                <div>
                  <p>Wind: <span>${this.weather.current.wind_kph}</span></p>

                  <p>Precip: <span>${this.weather.current.precip_mm}</span></p>

                  <p>
                    Pressure: <span>${this.weather.current.pressure_mb}</span>
                  </p>

                  <p>${this.weather.current.temp_c}<small>ºC</small></p>
                </div>
              </div>
              <div class="pronost-days">
                ${this.weather &&
                this.weather.forecast.forecastday.map((days) => {
                  return html`
                    <div>
                      <p>${days.date}</p>
                      <img
                        src="${days.day.condition.icon}"
                        alt="days.day.condition.text"
                      />
                      <p>${days.day.maxtemp_c}<span>ºC</span></p>
                    </div>
                  `;
                })}
              </div>
            `}
      </section>
    `;
  }
}

customElements.define("weather-ui", WeatherApp);
