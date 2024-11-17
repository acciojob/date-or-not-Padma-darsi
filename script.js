var isDate = function (input) {
  // Check if the input is an instance of Date and a valid date
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // If the input is a string, try to parse it as a date
  if (typeof input === "string") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }

  // For other cases, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
