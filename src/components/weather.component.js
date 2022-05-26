import { html, LitElement, css } from "lit";
import "./../ui/weather.ui";
import "./../ui/pronostico-hour.ui";
import { AllDataUseCase } from "./../usecases/data.name.usecase";
import { GetDayUseCase } from "./../usecases/date.usecase";

export class WeatherComponent extends LitElement {
  static get styles() {
    return css`

      .form-search {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 3rem;
        cursor: pointer;
        font-family:var(--family-dancing);
      }

      .form-search span a {
        text-decoration: none;
        color: #094631e1;
        text-transform: uppercase;
      }

      .form-search span:hover {
        transform: scale(1.4);
      }

      .btnSearch {
        width: 100px;
        border: none;
        height: 30px;
        background-color: #0a8057e0;
        color: #9be2e2fc;
        text-transform: uppercase;
        cursor: pointer;
        font-family:var(--family-dancing);
      }

      .btnSearch:hover {
        transform: scale(1.4);
      }

      .close {
        display: none;
      }

      .open {
        display: flex;
        flex-direction: column;
        box-shadow: 10px 5px 10px #22554434;
        padding: 5px 0;
      }

      .searchInput {
        padding: 5px 15px;
        width: 350px;
      }

      .btn {
        background-color: #21daa2;
        width: var(--width-value);
      }

      .searchDate {
        width: var(--width-value);
        padding: 0 15px;
      }

      .searchInput,
      .btn,
      .searchDate,
      .reset {
        height: 35px;
        border-radius: 25px;
        margin: 0 0 10px 20px;
        border: none;
        font-family:  Georgia, 'Times New Roman', Times, serif
      }
      .reset {
        width: 150px;
        background-color: #5fd4ad;
      }

      @media (min-width: 768px) {
        .open {
          padding-left: 2rem;
        }
        .searchInput {
          width: 450px;
        }
        .form-search span a {
          font-size: 1.5rem;
        }
      }
    `;
  }

  static get properties() {
    return {
      weather: {
        type: Object,
        state: true,
      },
      city: { type: String },
      date: { type: String },
      page: { type: String },
      isOpen: { type: Boolean },
      isDays: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.city = "London";
    this.date = "";
    this.page = "";
    this.isOpen = false;
    this.isDays = false;
  }

  async connectedCallback() {
    super.connectedCallback();
    const allDataUseCase = new AllDataUseCase();
    this.weather = await allDataUseCase.execute();
  }

  render() {
    return html`
      <div class="form-search">
        <span>
          <a href="/" title="Free Weather API">Home</a>
        </span>
        <button @click="${this.handleToggle}" class="btnSearch">Search</button>
      </div>
      <div class="container-input ${this.isOpen ? "open" : "close"}">
        <input
          type="search"
          name="search"
          class="searchInput"
          placeholder="search for city or/and CP or/and latitude,longitude "
          autocomplete="off"
          .value="${this.city}"
          @change="${this._getCity}"
        />
        <input
          type="date"
          class="searchDate"
          .value="${this.date}"
          @change="${this._getDate}"
        />
        <div>
          <button class="btn" @click=${this.handleChangePronost}>
            ${this.isDays
              ? html`<span>See summary forecast</span>`
              : html`<span>Daily Forecast Detail</span>`}
          </button>
          <button @click="${this.resetValues}" class="reset">
            Reset Values
          </button>
        </div>
      </div>
      ${this.isDays
        ? html`<pronost-ui
            .weather="${this.weather}"
            .city="${this.city}"
          >
          </pronost-ui>`
        : html`<genk-weather-comp .weather="${this.weather}"> </genk-weather-comp>`}
    `;
  }

  async _getCity() {
    this.city = this.shadowRoot.querySelector(".searchInput").value;
    const allDataUseCase = new AllDataUseCase();
    this.weather = await allDataUseCase.execute(this.city);
  }

  async _getDate() {
    this.date = this.shadowRoot.querySelector(".searchDate").value;
    const getDayUseCase = new GetDayUseCase();
    this.weather = await getDayUseCase.execute(this.city, this.date);
  }

  handleToggle() {
    this.isOpen = !this.isOpen;
  }

  handleChangePronost() {
    this.isDays = !this.isDays;
  }

  async resetValues() {
    this.city = "London";
    this.date = "";
    const allDataUseCase = new AllDataUseCase();
    this.weather = await allDataUseCase.execute(this.city);
  }
}

customElements.define("weather-app", WeatherComponent);
