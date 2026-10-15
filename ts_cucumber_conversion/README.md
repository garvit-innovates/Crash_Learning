# Playwright + TypeScript + Cucumber BDD Test Automation Framework

This project contains an automated testing suite built with **Playwright**, **TypeScript**, and **Cucumber (BDD)** using the **Page Object Model (POM)** architecture.

---

## 📁 Project Structure

```text
ts_cucumber_conversion/
├── features/                               # Cucumber BDD Feature files and steps
│   ├── login.feature                       # Login scenarios (Valid & Data-Driven Invalid)
│   ├── placeorderFlow.feature              # End-to-End checkout & order flow
│   ├── cartMock.feature                    # Cart API mocking scenario
│   ├── cookies.feature                     # Authentication state / cookie storage scenario
│   ├── step_definitions/                   # Step definitions mapping Gherkin to POM
│   │   ├── loginSteps.ts
│   │   ├── checkoutSteps.ts
│   │   └── cartMockSteps.ts
│   └── support/                            # Framework support & lifecycle hooks
│       ├── custom-world.ts                 # Cucumber CustomWorld integrating POM & Page
│       └── hooks.ts                        # Browser setup, auth state, failure screenshots
├── pages/                                  # Page Object Model (POM) classes
│   ├── LoginPage.ts
│   ├── CheckoutFlow.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── OrderConfirmationPage.ts
│   └── cartMock.ts
├── tests/                                  # Original Playwright spec tests
│   ├── Login.spec.ts
│   ├── placeorderFlow.spec.ts
│   ├── cartMock.spec.ts
│   └── cookies.spec.ts
├── test_data/                              # Data-driven test files
│   ├── loginData.json
│   ├── checkoutData.xlsx
│   └── checkoutFormData.json
├── utils/                                  # Utility helpers
│   ├── excelUtils.ts                       # Excel data reader helper
│   └── cookies.ts                          # Storage state helper
├── cucumber.json                           # Cucumber profile & execution settings
├── tsconfig.json                           # TypeScript compiler configuration
└── package.json                            # Dependencies & test scripts
```

---

## 🚀 Running the Tests

### 🥒 Cucumber BDD Tests

| Command | Description |
|---|---|
| `npm run test:cucumber` | Runs all Cucumber scenarios across all features |
| `npm run test:cucumber:smoke` | Runs only `@smoke` tagged scenarios |
| `npm run test:cucumber:regression` | Runs only `@regression` tagged scenarios |
| `npm run test:cucumber:login` | Runs `@login` scenarios (Valid and Invalid credentials) |
| `npm run test:cucumber:checkout` | Runs `@checkout` end-to-end order flow |
| `npm run test:cucumber:cartmock` | Runs `@cartmock` API mocking test |
| `npm run test:cucumber:cookie` | Runs `@cookie` session storage test |

### 🎭 Native Playwright Tests
You can still run original Playwright tests side-by-side:
```bash
npm run test:playwright
```

---

## 🖥️ Running in Headed Mode (Browser UI)

By default, tests run in headless mode. To watch browser execution in headed mode:

**PowerShell:**
```powershell
$env:HEADLESS="false"; npm run test:cucumber
```

**Bash / Command Prompt:**
```bash
HEADLESS=false npm run test:cucumber
```

---

## 📊 HTML Reports & Screenshots

- After execution, an interactive HTML report is generated at:
  - `reports/cucumber-report.html` (Full suite)
  - `reports/cucumber-smoke-report.html` (Smoke suite)
  - `reports/cucumber-regression-report.html` (Regression suite)
- If any scenario fails, a full-page screenshot is automatically captured and attached to both the report and the `reports/screenshots/` folder.
