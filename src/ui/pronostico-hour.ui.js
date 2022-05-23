import { html, LitElement, css } from "lit";

export class PronosticoHour extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        text-align: center;
      }

      .table-responsive {
        display: flex;
        flex-direction: column;
        margin:0 15px;
        
      }
      .title-city {
        text-align: center;
        color:#033524;
      }

      .contain-info-time {
        display: flex;
        width:100%;
        overflow:scroll;
        scrollbar-color: yellow #800080;
    scrollbar-width: 10px;
      }

      .astro{
        margin:10px 20px;
        background-color:#1bca90;
        color:#033524;
      }

      .astro tbody{
        padding:5px;
      }

      .icon {
        height: 73.48px;
      }
      .empty {
        height: 46px;
        
      }

      .container-table{
        width:100%;
      }
      table{
        border:none;
      }
    
      .table-row{
        color:#042c1f;
        
      }
      .default thead tr th{
        font-size:0.8rem;
        padding:6px;
        width:150px;
      }

      .contain-info-time tr th{
      padding:0 10px;
      }

      @media (min-width: 812px) {
        .container-table{
          min-width:768px;
        }
      }
    `;
  }

  static get properties() {
    return {
      weather: { type: Object },
      city: { type: String },
      page: { type: Number },
    };
  }

  render() {
    return html`
      <h3 class="title-city">Today Weather in ${this.city}</h3>
      <div class="overzise">
      ${this.weather &&
      this.weather.forecast.forecastday.map((days) => {
        return html`
          <div id="${days.date_epoch}" class="container-table">
            <div class="table-responsive">
              <table class="astro" summary="This table contains information about the stars and the general weather">
                <tbody>
                  <th headers="astros Sunrise Sunset">
                    Sunrise ${days.astro.sunrise} <br />Sunset
                    ${days.astro.sunset}
                  </th>
                  <th headers="astros Moonrise Moonset">
                    Monrise ${days.astro.moonrise} <br />Moonset
                    ${days.astro.moonset}
                  </th>
                  <th headers="Max Temperature">Max: ${days.day.maxtemp_c}</th>
                  <th headers="Min Temperature">Min: ${days.day.mintemp_c}</th>
                  <th headers="Avg">Avg: ${days.day.avgvis_km}</th>
                  <th headers="rainfall">Precip: ${days.day.totalprecip_mm}</th>
                  <th headers="Max Wind">Max Wind: ${days.day.maxwind_mph}</th>
                </tbody>
              </table>
              <div class="contain-info-time">
                <table border="1" class="table-row" summary="This table contains the header names">
                  <tr class="empty">
                    <th>&nbsp;</th>
                  </tr>
                  <tr class="icon">
                    <td headers="Icon">Icon</td>
                  </tr>
                  <tr>
                    <td headers="Temperature">Temp</td>
                  </tr>
                  <tr>
                    <td headers="Wind">Wind</td>
                  </tr>
                  <tr>
                    <td headers="rainfall">Precip</td>
                  </tr>
                  <tr>
                    <td headers="Cloud">Cloud</td>
                  </tr>
                  <tr>
                    <td headers="Humidity">Humidity</td>
                  </tr>
                  <tr>
                    <td headers="Pressure">Pressure</td>
                  </tr>
                </table>
                ${days.hour.map((day) => {
                  return html`
                    <table class="default" border="1" summary="This table contains information about the stars and the details weather">
                      <thead>
                        <tr>
                          <th headers="day time">${day.time}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th headers="icon"><img src="${day.condition.icon}" alt="" /></th>
                        </tr>

                        <tr>
                          <th headers="Temperature">${day.temp_c}ºc</th>
                        </tr>

                        <tr>
                          <th headers="Wind">${day.wind_mph}kmph</th>
                        </tr>

                        <tr>
                          <th headers="rainfall">${day.precip_mm}mm</th>
                        </tr>

                        <tr>
                          <th headers="cloud">${day.cloud}</th>
                        </tr>

                        <tr>
                          <th headers="humidity">${day.humidity}</th>
                        </tr>

                        <tr>
                          <th headers="pressure">${day.pressure_mb}</th>
                        </tr>
                      </tbody>
                    </table>
                  `;
                })}
              </div>
            </div>
          </div>
        `;
      })}
      </div>
    `;
  }

}

customElements.define("pronost-ui", PronosticoHour);
