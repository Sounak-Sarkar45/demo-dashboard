import { expect, test } from "@playwright/test";

test("Export downloads the orders and confirms it", async ({ page }) => {
  await page.goto("/dashboard");
  const download = page.waitForEvent("download", { timeout: 5_000 });
  await page.getByTestId("export").click();
  await expect(page.getByRole("status")).toHaveText("Exported orders.csv");
  expect((await download).suggestedFilename()).toBe("orders.csv");
});

test("Home links to the dashboard", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Open dashboard" }).click();
  await expect(page).toHaveURL(/\/dashboard$/);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});
