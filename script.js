var isDate = function (input) {
  try {
    // Convert input back to a Date object if it's a string
    if (typeof input === "string") {
      input = new Date(input);
    }
    // Check if the input is a valid Date object
    return input instanceof Date && !isNaN(input);
  } catch (e) {
    // Return false if any error occurs during processing
    return false;
  }
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
