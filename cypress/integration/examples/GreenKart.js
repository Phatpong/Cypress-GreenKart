describe("GreenKart Add ca to Cart", function () {
	it("Add Products to Cart", function () {
		//test step
		cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
		cy.get(".search-keyword").type("ca");
		cy.wait(1000);

		let productArray = [];

		cy.get(".products")
			.find(".product")
			.each((product) => {
				cy.wrap(product)
					.find("h4.product-name")
					.then((productName) => {
						productArray.push(productName.text());
					});
				cy.wrap(product).contains("ADD TO CART").should("be.visible").click();
			})
			.then(() => {
				cy.get(".cart-icon").click();
				cy.contains("PROCEED TO CHECKOUT").click();
				cy.get("p.product-name").should((productInCart) => {
					const productTextsInCart = productInCart.map((productIndex, productNameElement) => Cypress.$(productNameElement).text()).get();
					productArray.forEach((productName) => {
						expect(productTextsInCart).to.include(productName);
					});
				});
			});
		cy.contains("button", "Place Order").click();
		cy.get("select").select("Thailand");
		cy.get("input.chkAgree").check().should("be.checked");
		cy.get("button").contains("Proceed").click();
	});
});
