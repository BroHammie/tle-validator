const LineOneValidator = require('../src/LineOneValidator');
const CommonValidator = require('../src/CommonValidator');
const lineOneRegExp = new RegExp("1 [ 0-9]{5}[A-Z] [ 0-9]{5}[ A-Z]{3} [ 0-9]{5}[.][ 0-9]{8} (?:(?:[ 0+-][.][ 0-9]{8})|(?: [ +-][.][ 0-9]{7})) [ +-][ 0-9]{5}[+-][ 0-9] [ +-][ 0-9]{5}[+-][ 0-9] [ 0-9] [ 0-9]{4}[ 0-9]");
module.exports = {

    validateLineOne: function(line1) {
        let result = lineOneRegExp.test(line1);
        return result;
    },

    /**
     *
     * @param line1
     * @returns {object} {
     *     isValid: {boolean},
     *     invalidSubStr: [start, length],
     *     componentName: {string}
     * }
     */
    validateLineOneWithMessage: function(line1) {
        let result = {
            isValid: lineOneRegExp.test(line1)
        };
        if (!result.isValid) {
            if (!LineOneValidator.validLineOneNumber(line1)){
                result = {
                    invalidSubStr: [0, 1],
                    message: "Invalid Line One Number"
                };
            } else if (!CommonValidator.isSpace(line1, 1)) {
                result = {
                    invalidSubStr: [1, 1],
                    message: "Invalid Space"
                };
            } else if (!CommonValidator.validSatNo(line1)) {
                result = {
                    invalidSubStr: [2, 5],
                    message: "Invalid Sat No"
                };
            } else if (!LineOneValidator.validClassification(line1)) {
                result = {
                    invalidSubStr: [7, 1],
                    message: "Invalid Classification"
                };
            } else if (!CommonValidator.isSpace(line1, 8)) {
                result = {
                    invalidSubStr: [8, 1],
                    message: "Invalid Space"
                };
            } else if (!LineOneValidator.validInternationalDesignationYear(line1)) {
                result = {
                    invalidSubStr: [9, 2],
                    message: "Invalid International Designation Year"
                };
            } else if (!LineOneValidator.validInternationalDesignationLaunchNumberOfYear(line1)) {
                result = {
                    invalidSubStr: [11, 3],
                    message: "Invalid International Designation Launch Number Of Year"
                };
            } else if (!LineOneValidator.validInternationalDesignationPieceOfLaunch(line1)) {
                result = {
                    invalidSubStr: [14, 3],
                    message: "Invalid International Designation Piece of Launch"
                };
            }  else if (!CommonValidator.isSpace(line1, 17)) {
                result = {
                    invalidSubStr: [17, 1],
                    message: "Invalid Space"
                };
            } else if (!LineOneValidator.validEpochYear(line1)) {
                result = {
                    invalidSubStr: [18, 2],
                    message: "Invalid Epoch Year"
                };
            } else if (!LineOneValidator.validEpochDay(line1)) {
                result = {
                    invalidSubStr: [20, 12],
                    message: "Invalid Epoch Day"
                };
            }  else if (!CommonValidator.isSpace(line1, 32)) {
                result = {
                    invalidSubStr: [32, 1],
                    message: "Invalid Space"
                };
            } else if (!LineOneValidator.validFirstMeanMotion(line1)) {
                result = {
                    invalidSubStr: [33, 10],
                    message: "Invalid First Mean Motion"
                };
            }  else if (!CommonValidator.isSpace(line1, 43)) {
                result = {
                    invalidSubStr: [43, 1],
                    message: "Invalid Space"
                };
            } else if (!LineOneValidator.validSecondMeanMotion(line1)) {
                result = {
                    invalidSubStr: [44, 8],
                    message: "Invalid Second Mean Motion"
                };
            }  else if (!CommonValidator.isSpace(line1, 52)) {
                result = {
                    invalidSubStr: [52, 1],
                    message: "Invalid Space"
                };
            } else if (!LineOneValidator.validBStarDrag(line1)) {
                result = {
                    invalidSubStr: [53, 8],
                    message: "Invalid B Star Drag"
                };
            }  else if (!CommonValidator.isSpace(line1, 61)) {
                result = {
                    invalidSubStr: [61, 1],
                    message: "Invalid Space"
                };
            } else if (!LineOneValidator.validEphemerisType(line1)) {
                result = {
                    invalidSubStr: [62, 1],
                    message: "Invalid Ephemeris Type"
                };
            }  else if (!CommonValidator.isSpace(line1, 63)) {
                result = {
                    invalidSubStr: [63, 1],
                    message: "Invalid Space"
                };
            } else if (!LineOneValidator.validElementSetNumber(line1)) {
                result = {
                    invalidSubStr: [64, 4],
                    message: "Invalid Element Set Number"
                };
            } else if (!CommonValidator.validCheckSum(line1)) {
                result = {
                    invalidSubStr: [68, 1],
                    message: "Invalid Check Sum"
                };
            }
            result.isValid = false;
        }
        return result;
    },

    validateLineTwo: function(line2) {
        let result = false;
        let regex = new RegExp("2 [ 0-9]{5} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{7} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{2}[.][ 0-9]{13}[ 0-9]");
        result = regex.test(line2);
        if (!result) {

        }
        return result;
    }
};
