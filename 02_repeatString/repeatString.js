const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    else if (num === 0) {
        return "";
    }
    for(let output = ""; num > 0; num--) {
        output += string;
        if ((num - 1) === 0) {
            return output;
        }
    }
};

// Do not edit below this line
module.exports = repeatString;
