import { orders, stats } from "./data";

function exportCsv(): void {
  const rows = [["id", "customer", "status", "amount"], ...orders.map((o) => Object.values(o))];
  const blob = new Blob([rows.map((r) => r.join(",")).join("\n")], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "orders.csv";
  link.click();
  document.querySelector("#export-status")!.textContent = "Exported orders.csv";
}

export function renderDashboard(): string {
  queueMicrotask(() => document.querySelector("#export")?.addEventListener("click", exportCsv));
  const updated = new Date().toUTCString();

  return `
    <header class="page-header">
      <div>
        <h1>Dashboard</h1>
        <p class="muted">Last updated ${updated}</p>
      </div>
      <button id="export" class="button" data-testid="export">Export</button>
    </header>
    <p id="export-status" class="muted" role="status"></p>

    <section class="stats">
      ${stats
        .map((s) => `<div class="card stat"><span class="muted">${s.label}</span><strong>${s.value}</strong></div>`)
        .join("")}
    </section>

    <section class="card">
      <h2>Recent orders</h2>
      <table>
        <thead><tr><th>Order</th><th>Customer</th><th>Status</th><th>Amount</th></tr></thead>
        <tbody>
          ${orders
            .map((o) => `<tr><td>${o.id}</td><td>${o.customer}</td><td>${o.status}</td><td>${o.amount}</td></tr>`)
            .join("")}
        </tbody>
      </table>
    </section>
  `;
}
