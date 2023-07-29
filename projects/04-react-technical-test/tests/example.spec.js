// @ts-check
import { test, expect } from '@playwright/test'

const LOCAL_HOST_URL = 'http://localhost:5173/'

test('app shows random fact', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const catFact = await page.getByRole('paragraph')
  const ageByName = await page.getByRole('strong')

  const catFactTextContent = await catFact.textContent()
  const ageByNameTextContent = await ageByName.textContent()

  await expect(catFactTextContent?.length).toBeGreaterThan(0)
  await expect(ageByNameTextContent?.length).toBeGreaterThan(0)
})
