/*
 * Removes duplicates characters from a string
 * @param {string} str - the string
 * @return {string} - a string without duplicates
 */

function removeDuplicates(str) {
  /*
  Approaches:
  - For loop: add unique chars to a new string, omit recurring/duplicate chars
  - Use an array method to .reduce a string down to unique chars
  - Map all letters and counts to an object, then return all object keys
 */

  /*
  A Set implicity removes duplicates
  Convert str params to set inside an Array, then .join to return a string.
  */
  return [...new Set(str)].join("");
}

// make this true
console.log(removeDuplicates("mississippi"), removeDuplicates("mississippi") === "misp");
