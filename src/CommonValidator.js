const numberRegExp = new RegExp("[0-9]");
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
        let parsedSatNo = parseInt(satNo);
        if (!isNaN(parsedSatNo) && parsedSatNo.toFixed().length == 5) {
            result = true;
        }
        return result;
    }
};