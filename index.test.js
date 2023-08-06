const highlightHTMLContent = require('./index');

describe('highlightHTMLContent function', () => {
  test('should handle empty plain text positions array', () => {
    const htmlContent = '<div><p>This is a test</p></div>';
    const plainText = 'This is a test';
    const plainTextPositions = [];
    const expectedOutput = htmlContent;
    expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(expectedOutput);
  });

  test('should handle plain text positions that do not exist in the HTML content', () => {
    const htmlContent = '<div><p>This is a test</p></div>';
    const plainText = 'nonexistent';
    const plainTextPositions = [
      {
        start: 10,
        end: 20,
      },
    ];
    const expectedOutput = htmlContent;

  });

  test('should handle multiple plain text positions', () => {
    const htmlContent = '<div><p>This is a test</p></div>';
    const plainText = 'This is a test';
    const plainTextPositions = [
      {
        start: 0,
        end: 4,
      },
      {
        start: 10,
        end: 12,
      },
    ];
    const expectedOutput = '<div><p><mark>This</mark> is a <mark>te</mark>st</p></div>';
    expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(expectedOutput);
  });
});
