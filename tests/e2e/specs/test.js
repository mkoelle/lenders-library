// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "default e2e tests": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent("p.title")
      .assert.containsText("p", "Library")
      .assert.elementCount("img", 3)
      .end();
  },

  "example e2e test using a custom command": browser => {
    browser
      .openHomepage()
      .assert.elementPresent("p.title")
      .end();
  }
};
