var isDate = function (input) {
  //   write your code here
	// Case 1: If input is a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime()); // valid date check
  }

  // Case 2: If input is a string or number (try parsing)
  if (typeof input === "string" || typeof input === "number") {
    let parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

  // Otherwise not a date
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
