const CommonValidator = require('./CommonValidator');
const twoDigitsRegExp = new RegExp("[0-9]{2}");
const threeDigitsRegExp = new RegExp("[0-9]{3}");
const fiveDigitsRegExp = new RegExp("[0-9]{5}");
const eightDigitsRegExp = new RegExp("[0-9]{8}");
const epochDayRegExp = new RegExp("[0-9]{3}[.][0-9]{8}");
module.exports = {

    validLineOneNumber: function(line1) {
        let result = line1[0] === "1";
        return result;
    },
    validClassification: function(line1) {
        let result = false;
        let classification = line1.substr(7, 1);
        if (isNaN(classification)) {
            result = true;
        }
        return result;
    },
    validInternationalDesignationYear: function(line1) {
        let intlDesgYear = line1.substr(9, 2);
        let result = twoDigitsRegExp.test(intlDesgYear);
        return result;
    },
    validInternationalDesignationLaunchNumberOfYear: function(line1) {
        let lanuchNumber = line1.substr(11, 3);
        let result = threeDigitsRegExp.test(lanuchNumber);
        return result;
    },
    validInternationalDesignationPieceOfLaunch: function(line1) {
        let result = false;
        let intlDesgPieceOfLaunch = line1.substr(14, 3);
        if (isNaN(intlDesgPieceOfLaunch)) {
            result = new RegExp("[ A-Z]{3}").test(intlDesgPieceOfLaunch);
        }
        return result;
    },
    validEpochYear: function(line1) {
        let intlDesg = line1.substr(18, 2);
        let result = twoDigitsRegExp.test(intlDesg);

        return result;
    },
    validEpochDay: function(line1) {
        let epochDay = line1.substr(20, 12);
        let result = epochDayRegExp.test(epochDay);
        return result;
    },
    validFirstMeanMotion: function(line1) {
        let result = false;
        let firstChar = line1.substr(33, 1);
        let secondChar = line1.substr(34, 1);
        if ((CommonValidator.isPosNegOrZero(firstChar) || CommonValidator.isSpace(line1, 33) ) && CommonValidator.isPeriod(secondChar)) {
            let firstMeanMotionFraction = line1.substr(35, 8);
            if (eightDigitsRegExp.test(firstMeanMotionFraction)) {
                result = true;
            }
        }
        return result;
    },
    validSecondMeanMotion: function(line1) {
        let result = false;
        let preDashNums = line1.substr(45, 5);
        let hyphen = line1.substr(50, 1);
        let lastChar = line1.substr(51, 1);
        if (CommonValidator.isPosNegOrZero(line1.substr(44, 1)) || CommonValidator.isSpace(line1, 44)) {
            if (fiveDigitsRegExp.test(preDashNums)) {
                if (CommonValidator.isHyphen(hyphen)) {
                    if (!isNaN(lastChar)) {
                        result = true;
                    }
                }
            }
        }
        return result;
    },
    validBStarDrag: function(line1) {
        let result = false;

        let firstChar = line1.substr(53, 1);
        let preDashNums = line1.substr(54, 5);
        let hyphen = line1.substr(59, 1);
        let lastChar = line1.substr(60, 1);
        if (CommonValidator.isPosNegOrZero(firstChar) || CommonValidator.isSpace(line1, 53)) {
            if (fiveDigitsRegExp.test(preDashNums)) {
                if (CommonValidator.isHyphen(hyphen)) {
                    if (!isNaN(lastChar)) {
                        result = true;
                    }
                }
            }
        }
        return result;
    },
    validEphemerisType: function(line1) {
        let ephemType = line1.substr(62, 1);
        return new RegExp("[0-9]").test(ephemType);
    },
    validElementSetNumber: function(line1) {
        let elSetNumber = line1.substr(64, 4);
        return new RegExp("[ 0-9]{4}").test(elSetNumber);
    }
};
