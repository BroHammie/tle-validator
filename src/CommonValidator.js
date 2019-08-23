const numberRegExp = new RegExp("[0-9]");
const satNoRegExp = new RegExp("[0-9]{5}");
module.exports = {

    isSpace: function(line, index) {
        return line[index] === " ";
    },
    isPeriod: function(char) {
        return char === ".";
    },
    isHyphen: function(char) {
        return char === "-";
    },
    isPosNegOrZero: function(char) {
        let result = new RegExp("([0+-])").test(char);
        return result;
    },
    validCheckSum: function(line) {
        let checkSum = line.substr(68, 1);
        return numberRegExp.test(checkSum);
    },
    validSatNo: function(line) {
        let result = false;
        let satNo = line.substr(2, 5);
        if (satNoRegExp.test(satNo)) {
            result = true;
        }
        return result;
    }
};
