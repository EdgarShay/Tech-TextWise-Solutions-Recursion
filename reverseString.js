function reverseString(str) {
    // Input validation
    if (str === null || str === undefined) {
        throw new Error("Invalid input");
    }
    // Base case
    if (str.length <= 1) {
        return str;
    }
    // Recursive case
    return reverseString(str.slice(1)) + str[0];
}
module.exports = reverseString;
