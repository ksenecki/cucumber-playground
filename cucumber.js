const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.step.js
`;

// export default `${common} features/**/*.feature`;

module.exports = {
  default: `${common} features/**/*.feature`,
};
