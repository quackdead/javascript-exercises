const reverseString = function(string) {
    const arr = string.split("");
    let output = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        output += arr[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
