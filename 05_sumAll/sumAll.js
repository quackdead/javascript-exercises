const sumAll = function(op1, op2) {
    if (op1 < 0 || op2 < 0 || Math.round(op1) != op1 || Math.round(op1) != op1 || typeof(op1) != "number" || typeof(op2) != "number") {
        return "ERROR";
    }
    if (op1 > op2) {
        let temp = op1;
        op1 = op2;
        op2 = temp;;
    }
    let output = 0;
    while (op1 <= op2) {
        output += op1;
        op1++;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
