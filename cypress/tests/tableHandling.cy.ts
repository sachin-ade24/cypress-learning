
describe('Iterate through table', () => {
  it('should iterate through all rows and columns', () => {
    cy.visit('your-page-url'); // Replace with your actual URL

    // Select the table rows
    cy.get('#my-table tr').each(($row, rowIndex) => {
      // For each row, select the columns (td elements)
      cy.wrap($row).find('td').each(($cell, colIndex) => {
        // Log the cell content
        cy.log(`Row ${rowIndex}, Column ${colIndex}: ${$cell.text()}`);
      });
    });
  });
});
