# Playwright Test Scripts

## NPM Scripts

### Run all tests
```bash
npm test
```

### Run all tests with browser visible — Headed
```bash
npm run test:headed
```

### Run all tests without browser UI — Headless
```bash
npm run test:headless
```

### Run only Login tests
```bash
npm run test:login
```

### Run only Checkout tests
```bash
npm run test:checkout
```

### Run only Smoke tests
```bash
npm run test:smoke
```

### Run only Regression tests
```bash
npm run test:regression
```

### Run Smoke tests in Headed mode
```bash
npm run test:smoke:headed
```

### Run Smoke tests in Headless mode
```bash
npm run test:smoke:headless
```

---

## Direct Playwright Commands

### Run all tests
```bash
npx playwright test
```

### Run all tests in Headed mode
```bash
npx playwright test --headed
```

### Run all tests in Headless mode
```bash
npx playwright test
```

### Run only Login tests
```bash
npx playwright test --grep @login
```

### Run only Checkout tests
```bash
npx playwright test --grep @checkout
```

### Run only Smoke tests
```bash
npx playwright test --grep @smoke
```

### Run only Regression tests
```bash
npx playwright test --grep @regression
```

### Run Smoke tests in Headed mode
```bash
npx playwright test --grep @smoke --project=chromium-headed
```

### Run Smoke tests in Headless mode
```bash
npx playwright test --grep @smoke --project=chromium-headless
```

### Run Checkout tests in Headed mode
```bash
npx playwright test --grep @checkout --project=chromium-headed
```

### Run Checkout tests in Headless mode
```bash
npx playwright test --grep @checkout --project=chromium-headless
```

---

## Tags Used

| Tag | Purpose |
|---|---|
| `@login` | Login test cases |
| `@checkout` | Checkout test cases |
| `@smoke` | Smoke test cases |
| `@regression` | Regression test cases |

## Projects

| Project | Mode |
|---|---|
| `chromium-headed` | Browser visible |
| `chromium-headless` | Browser runs without UI |
