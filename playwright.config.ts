import { defineConfig, devices } from "@playwright/test";

// BranchWars runs these inside its runner container against the app it started, passing the
// app's address as BASE_URL. Pinned to the runner image's Playwright version (1.55.0) so the
// browsers it ships are used.
export default defineConfig({
  testDir: "tests",
  timeout: 15_000,
  retries: 0,
  workers: 1,
  use: { baseURL: process.env.BASE_URL ?? "http://127.0.0.1:3000" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
