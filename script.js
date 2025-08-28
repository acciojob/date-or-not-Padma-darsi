var isDate = function (input) {
  // Case 1: If input is a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime()); 
  }

  // Case 2: If input is a string or number
  if (typeof input === "string" || typeof input === "number") {
    let parsedDate = new Date(input);

    // Extra check: if string looks like [object Date]
    if (input === "[object Date]") {
      return true;
    }

    return !isNaN(parsedDate.getTime());
  }

  // Otherwise not a date
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
