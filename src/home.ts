export function renderHome(): string {
  return `
    <section class="hero">
      <h1>Welcome to Acme Analytics</h1>
      <p>Track orders, revenue and customers in one place.</p>
      <a class="button" href="/dashboard">Open dashboard</a>
    </section>
    <section class="features">
      <div class="card"><h3>Live metrics</h3><p>Key numbers for your store, updated every hour.</p></div>
      <div class="card"><h3>Order history</h3><p>Every order with status and amount.</p></div>
      <div class="card"><h3>Exports</h3><p>Download your data as CSV whenever you need it.</p></div>
    </section>
  `;
}
