# Assigment 2

## highlightHTMLContent
`highlightHTMLContent` is a JavaScript function that takes HTML content, plain text, and an array of plain text positions as input and highlights the plain text within the HTML content using `<mark>` tags. It returns the modified HTML content with the specified text marked with the `<mark>` element.

## Installation

The function can be used directly in a JavaScript environment without any additional installation or setup.

### Syntax

```javascript
highlightHTMLContent(htmlContent, plainText, plainTextPositions)
```

### Parameters

- `htmlContent` (string): The HTML content in which the plain text needs to be highlighted.
- `plainText` (string): The plain text that needs to be highlighted within the HTML content.
- `plainTextPositions` (array of objects): An array of objects representing the start and end positions of the plain text to be highlighted.

Each object in the `plainTextPositions` array should have the following properties:

- `start` (number): The start index of the plain text in the `plainText` string.
- `end` (number): The end index (exclusive) of the plain text in the `plainText` string.

### Returns

The function returns the modified HTML content with the specified plain text marked with the `<mark>` element.

### Example

```javascript
const highlightHTMLContent = require('./highlightHTMLContent');

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

const highlightedContent = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
console.log(highlightedContent);
```

Output:

```html
<div><p><mark>This</mark> is a <mark>te</mark>st</p></div>
```

## Testing
The `highlightHTMLContent` function comes with unit tests written using Jest to ensure its correctness and proper behavior in various scenarios. To run the tests, execute the following command:

## Installation or to the run the project:

```bash
npm i jest --save-dev
```

## Execute this command and run the tests
```bash
npm test
```

## Thankyou
