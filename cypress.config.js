const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: "1av44d",
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: "cypress/integration/examples/*.js",
	},
});
