const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    Version: '1.0',
    'Test Env': 'Stage 1',
    Browser: 'Chrome Version 105.0.5195.125',
  },
};

reporter.generate(options);
