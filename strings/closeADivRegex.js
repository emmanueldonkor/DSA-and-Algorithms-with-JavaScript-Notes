//close a nested div with regex
function fixDiv(input) {
  let fixedInput = input;

  // Regular expression to check for the presence of opening and closing div tags
  const divRegex = /<\/?div>/g;

  // check if there is a closing div tag in the input
  const closingTag = input.match(/<\/div>/g);

  // Check if there is a match, if not, it will return null
  if (!closingTag) {
    // If it doesn't, add a closing div tag
    fixedInput += "</div>";
  }

  // check if there is an opening div tag in the input
  const openingTag = input.match(/<div[^>]*>/g);

  // Check if there is a match, if not, it will return null
  if (!openingTag) {
    // If it doesn't, add an opening div tag at the beginning
    fixedInput = `<div>${fixedInput}`;
  }

  return fixedInput;
}


//closing a single div tag
function fixDiv(input) {
  let fixedInput = input;

  // Check if the input contains a closing div tag
  if (!fixedInput.includes("</")) {
    // If it doesn't, add a closing div tag
    fixedInput += "</div>";
  }

  // Check if the input starts with a div tag
  if (!fixedInput.startsWith("<div")) {
    // If it doesn't, add an opening div tag at the beginning
    fixedInput = `<div>${fixedInput}`;
  }

  return fixedInput;
}
