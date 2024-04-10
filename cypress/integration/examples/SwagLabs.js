describe("Seach user github", function () {
	it("Search in gh-user netlify", function () {
		cy.visit("https://gh-users-search.netlify.app/");
		cy.get("input").should("be.visible").type("Phatpong");
		cy.get("button").contains("search").click();
		cy.get("h4").then((h4) => {
			const foundUserName = h4.text();
			if (foundUserName.includes("Phatpong")) {
				cy.log("Found expected userName: " + foundUserName);
			} else {
				cy.log("Did not find the expected userName. Found: " + foundUserName);
			}
		});
	});
});
