var isDate = function (input) {
  // Check if the input is an instance of the Date object and a valid date
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // Check if the input is a string or number that can be parsed into a valid date
  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }

  // For all other cases, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
