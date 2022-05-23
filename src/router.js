import { Router } from "@vaadin/router";
import "./pages/home.page";
import "./pages/weather.page";

const app = document.querySelector("#app");
const router = new Router(app);

router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/weather", component: "weather-page" },
  { path: "(.*)", redirect: "/" },
]);
