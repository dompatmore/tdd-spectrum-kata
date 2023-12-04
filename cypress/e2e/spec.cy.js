describe("template spec", () => {
  it("passes", () => {
    cy.request("GET", "http://localhost:8000").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Should be able to see the contents of the page", () => {
    cy.visit("http://localhost:8000");
    cy.title().should("eq", "Can't Stand The Rain");
  });
});
