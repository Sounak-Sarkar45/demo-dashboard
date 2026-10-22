import "./style.css";
import { renderHome } from "./home";
import { renderDashboard } from "./dashboard";

const app = document.querySelector<HTMLDivElement>("#app")!;
const path = window.location.pathname.replace(/\/+$/, "") || "/";

const nav = `
  <nav class="nav">
    <span class="brand">Acme Analytics</span>
    <a href="/" class="${path === "/" ? "active" : ""}">Home</a>
    <a href="/dashboard" class="${path === "/dashboard" ? "active" : ""}">Dashboard</a>
    <span class="spacer"></span>
    <span class="avatar" data-testid="avatar">${Math.random() < 0.5 ? "JD" : "AK"}</span>
  </nav>
`;

const page = path === "/dashboard" ? renderDashboard() : renderHome();
app.innerHTML = `${nav}<main class="main">${page}</main>`;
