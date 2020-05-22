const LineOneValidator = require('../src/LineOneValidator');
const LineTwoValidator = require('../src/LineTwoValidator');
const CommonValidator = require('../src/CommonValidator');
const lineOneRegExp = new RegExp("1 [ 0-9]{5}[A-Z] [ 0-9]{5}[ A-Z]{3} [ 0-9]{5}[.][ 0-9]{8} (?:(?:[ 0+-][.][ 0-9]{8})|(?: [ +-][.][ 0-9]{7})) [ +-][ 0-9]{5}[+-][ 0-9] [ +-][ 0-9]{5}[+-][ 0-9] [ 0-9] [ 0-9]{4}[ 0-9]");
const lineTwoRegExp = new RegExp("2 [ 0-9]{5} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{7} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{2}[.][ 0-9]{13}[ 0-9]");

module.exports = {

    validateTLE: function(lineOne, lineTwo) {
        let result = this.validateLineOne(lineOne);
        return result && this.validateLineTwo(lineTwo);
    },

    validateLineOne: function(line1) {
        let result = lineOneRegExp.test(line1);
        return result;
    },
    validateLineTwo: function(line2) {
        let result = lineTwoRegExp.test(line2);
        return result;
    },

    validateTLEWithMessage: function(tle) {
        const lines = tle.split("\n");
        return this.validateLinesWithMessage(lines[0], lines[1]);
    },

    validateLinesWithMessage: function(lineOne, lineTwo) {
        let result = {isValid: true};
        if (lineOne && lineTwo) {

            let lineOneResult = this.validateLineOneWithMessage(lineOne);
            let lineTwoResult = this.validateLineTwoWithMessage(lineTwo);

            if (!lineOneResult.isValid || !lineTwoResult.isValid) {
                result = {
                    isValid: false
                };
                if (!lineOneResult.isValid) {
                    result.lineOneErrors = lineOneResult;
                }

                if (!lineTwoResult.isValid) {
                    result.lineTwoErrors = lineTwoResult;
                }
            }

        } else {
            // TODO add in ThreeLE?
            result = {
                isValid: false,
                message: "Not enough lines"
            };
        }
        return result;
    },

    /**
     *
     * @param line1
     * @returns {object} {
     *     isValid: {boolean},
     *     invalidSubStr: [start, length],
     *     message: {string}
     * }
     */
    validateLineOneWithMessage: function(line1) {
        let result = {
            isValid: lineOneRegExp.test(line1)
        };
        if (result.isValid) {
            let checkSumResult = CommonValidator.checkCheckSum(line1);
            if (checkSumResult.isValid === false) {
                result = {
                    invalidSubStr: [68, 1],
                    message: "Incorrect Checksum, expected: "+checkSumResult.calculatedCheckSum
                };
            }
        }
        if (!result.isValid) {
            if (!LineOneValidator.validLineOneNumber(line1)) {
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
            } else if (!CommonValidator.isSpace(line1, 17)) {
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
            } else if (!CommonValidator.isSpace(line1, 32)) {
                result = {
                    invalidSubStr: [32, 1],
                    message: "Invalid Space"
                };
            } else if (!LineOneValidator.validFirstMeanMotion(line1)) {
                result = {
                    invalidSubStr: [33, 10],
                    message: "Invalid First Mean Motion"
                };
            } else if (!CommonValidator.isSpace(line1, 43)) {
                result = {
                    invalidSubStr: [43, 1],
                    message: "Invalid Space"
                };
            } else if (!LineOneValidator.validSecondMeanMotion(line1)) {
                result = {
                    invalidSubStr: [44, 8],
                    message: "Invalid Second Mean Motion"
                };
            } else if (!CommonValidator.isSpace(line1, 52)) {
                result = {
                    invalidSubStr: [52, 1],
                    message: "Invalid Space"
                };
            } else if (!LineOneValidator.validBStarDrag(line1)) {
                result = {
                    invalidSubStr: [53, 8],
                    message: "Invalid B Star Drag"
                };
            } else if (!CommonValidator.isSpace(line1, 61)) {
                result = {
                    invalidSubStr: [61, 1],
                    message: "Invalid Space"
                };
            } else if (!LineOneValidator.validEphemerisType(line1)) {
                result = {
                    invalidSubStr: [62, 1],
                    message: "Invalid Ephemeris Type"
                };
            } else if (!CommonValidator.isSpace(line1, 63)) {
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
                    message: "Invalid Checksum"
                };
            }
        }
        return result;
    },

    validateLineTwoWithMessage: function(line2) {
        let result = {
            isValid: lineTwoRegExp.test(line2)
        };
        if (result.isValid) {
            let checkSumResult = CommonValidator.checkCheckSum(line2);
            if (checkSumResult.isValid === false) {
                result = {
                    invalidSubStr: [68, 1],
                    message: "Incorrect Checksum, expected: "+checkSumResult.calculatedCheckSum
                };
            }
        }
        if (!result.isValid) {
            if (!LineTwoValidator.validLineTwoNumber(line2)) {
                result = {
                    invalidSubStr: [0, 1],
                    message: "Invalid Line Two Number"
                };
            } else if (!CommonValidator.isSpace(line2, 1)) {
                result = {
                    invalidSubStr: [1, 1],
                    message: "Invalid Space"
                };
            } else if (!CommonValidator.validSatNo(line2)) {
                result = {
                    invalidSubStr: [2, 5],
                    message: "Invalid Sat No"
                };
            } else if (!CommonValidator.isSpace(line2, 7)) {
                result = {
                    invalidSubStr: [7, 1],
                    message: "Invalid Space"
                };
            } else if (!LineTwoValidator.validInclination(line2)) {
                result = {
                    invalidSubStr: [8, 8],
                    message: "Invalid Inclination"
                };
            } else if (!CommonValidator.isSpace(line2, 16)) {
                result = {
                    invalidSubStr: [16, 1],
                    message: "Invalid Space"
                };
            } else if (!LineTwoValidator.validRAAN(line2)) {
                result = {
                    invalidSubStr: [17, 8],
                    message: "Invalid RAAN"
                };
            } else if (!CommonValidator.isSpace(line2, 25)) {
                result = {
                    invalidSubStr: [25, 1],
                    message: "Invalid Space"
                };
            } else if (!LineTwoValidator.validEccentricity(line2)) {
                result = {
                    invalidSubStr: [26, 7],
                    message: "Invalid Eccentricity"
                };
            } else if (!CommonValidator.isSpace(line2, 33)) {
                result = {
                    invalidSubStr: [33, 1],
                    message: "Invalid Space"
                };
            } else if (!LineTwoValidator.validArgOfPerigee(line2)) {
                result = {
                    invalidSubStr: [34, 8],
                    message: "Invalid Argument Of Perigee"
                };
            } else if (!CommonValidator.isSpace(line2, 42)) {
                result = {
                    invalidSubStr: [42, 1],
                    message: "Invalid Space"
                };
            } else if (!LineTwoValidator.validMeanAnomaly(line2)) {
                result = {
                    invalidSubStr: [43, 8],
                    message: "Invalid Mean Anomaly"
                };
            } else if (!CommonValidator.isSpace(line2, 51)) {
                result = {
                    invalidSubStr: [51, 1],
                    message: "Invalid Space"
                };
            } else if (!LineTwoValidator.validMeanMotion(line2)) {
                result = {
                    invalidSubStr: [52, 11],
                    message: "Invalid Mean Motion"
                };
            } else if (!LineTwoValidator.validRevNumber(line2)) {
                result = {
                    invalidSubStr: [63, 5],
                    message: "Invalid Rev Number"
                };
            } else if (!CommonValidator.validCheckSum(line2)) {
                result = {
                    invalidSubStr: [68, 1],
                    message: "Invalid Checksum"
                };
            }
        }
        return result;
    }
};
