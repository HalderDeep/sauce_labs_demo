# Sauce Labs Demo Automation Test Suite

## Overview
This test suite automates the checkout flow for the Sauce Labs demo website. It selects 3 random items, adds them to the cart, and completes the checkout process, verifying each step.

## Framework
- **Tool:** Playwright
- **Language:** JavaScript
- **Reporting:** Allure and Playwright's built-in HTML reports

## Features
- **Automated Test Flow:** Covers a complete end-to-end checkout process.
- **Modular Design:** Utilizes the Page Object Model (POM) for scalability.
- **Detailed Reporting:** Generates detailed HTML and Allure reports for test runs.
- **Cross-Browser Support:** Tests can run on Chromium, Firefox, and WebKit.

## Setup Instructions

### Prerequisites
Ensure the following are installed on your system:
1. **Node.js** (version >= 18) and **npm**:
   - Download and install from [Node.js Official Site](https://nodejs.org/).
2. **Playwright Browsers**:
   - Run the command below to download the required browsers.

### Steps
1. Clone the repository:
   ```bash
   git clone <repo-link>
   cd sauce-demo-test-suite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

## How to Run the Tests

### Run All Tests
Execute the following command to run all test cases:
```bash
npx playwright test
```

### View Test Reports
After running tests, you can view detailed reports:
1. **Playwright HTML Report:**
   - Generate and open the HTML report:
     ```bash
     npx playwright show-report
     ```
   - The report includes screenshots, logs, and a timeline of test execution.

2. **Allure Report (Optional):**
   - If you have Allure set up, generate and view the report:
     ```bash
     npx allure generate allure-results --clean -o allure-report && npx allure open allure-report
     ```

---

## Running Tests in Different Modes

### Run Tests in Headed Mode (Visually Debug)
To run tests with the browser UI visible:
```bash
npx playwright test --headed
```

### Run Tests in a Specific Browser
Specify a browser (e.g., Chromium, Firefox, or WebKit) using:
```bash
npx playwright test --project=chromium
```

### Enable Debugging (Step-by-Step Execution)
To debug tests interactively, use:
```bash
npx playwright test --debug
```

---

## Framework Structure
The project is organized as follows:

```
sauce-demo-test-suite/
├── config/
│   └── playwright.config.js   # Configuration for Playwright
├── pages/
│   ├── loginPage.js           # Page Object for Login
│   ├── inventoryPage.js       # Page Object for Inventory
│   ├── cartPage.js            # Page Object for Cart
│   └── checkoutPage.js        # Page Object for Checkout
├── tests/
│   └── checkoutFlow.spec.js   # Test cases
├── utils/
│   ├── helper.js              # Helper functions
│   └── logger.js              # Logger utility
├── reports/                   # Test reports directory
├── .gitignore                 # Ignored files and folders
├── package.json               # Project dependencies and scripts
└── README.md                  # Documentation
```

---

## Troubleshooting

### Common Issues
1. **Playwright Browsers Not Installed:**
   If you encounter browser launch issues, ensure you've run:
   ```bash
   npx playwright install
   ```

2. **Node Version Issue:**
   If you see errors about unsupported Node.js versions, upgrade Node.js to version 18 or higher.

3. **Missing Dependencies:**
   Ensure all dependencies are installed using:
   ```bash
   npm install
   ```

---

## Contribution
Feel free to fork this repository, make improvements, and submit a pull request!

