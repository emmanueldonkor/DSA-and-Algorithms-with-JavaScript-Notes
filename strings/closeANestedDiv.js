
//using charCode method

function fixDiv(input) {
  let fixedInput = input;

  let openTag = false;
  let closeTag = false;
  let nestedLevel = 0;

  for (let i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) === 60) {
      // '<' has a charcode of 60
      if (input.charCodeAt(i + 1) === 47) {
        // '/' has a charcode of 47
        closeTag = true;
        if (nestedLevel > 0) {
          nestedLevel--;
        }
      } else {
        openTag = true;
        nestedLevel++;
      }
    }
  }

  if (!closeTag) {
    // If it doesn't, add missing closing div tags
    while (nestedLevel > 0) {
      fixedInput += "</div>";
      nestedLevel--;
    }
  }

  // Check if the input starts with a div tag
  if (!openTag) {
    // If it doesn't, add an opening div tag at the beginning
    fixedInput = `<div>${fixedInput}`;
  }

  return fixedInput;
}

/*function fixDiv(input) {
  let fixedInput = input;
  
  let openTag = false;
  let closeTag = false;
  
  for (let i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) === 60) { // '<' has a charcode of 60
      if (input.charCodeAt(i + 1) === 47) { // '/' has a charcode of 47
        closeTag = true;
      } else {
        openTag = true;
      }
    }
  }
  
  // Check if the input contains a closing div tag
  if (!closeTag) {
    // If it doesn't, add a closing div tag
    fixedInput += "</div>";
  }

  // Check if the input starts with a div tag
  if (!openTag) {
    // If it doesn't, add an opening div tag at the beginning
    fixedInput = `<div>${fixedInput}`;
  }

  return fixedInput;
}
*/
