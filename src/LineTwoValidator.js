const threeDotFourRegExp = new RegExp("[ 0-9]{3}[.][ 0-9]{4}");
const sevenDigitsRegExp = new RegExp("[ 0-9]{7}");

module.exports = {

    validLineTwoNumber: function(line2) {
        let result = line2[0] === "2";
        return result;
    },
    validInclination: function(line2) {
        let inclination = line2.substr(8, 8);
        let result = threeDotFourRegExp.test(inclination);
        return result;
    },
    validRAAN: function(line2) {
        let raan = line2.substr(17, 8);
        let result = threeDotFourRegExp.test(raan);
        return result;
    },
    validEccentricity: function(line2) {
        let result = false;
        let eccentricity = line2.substr(26, 7);
        if (sevenDigitsRegExp.test(eccentricity)) {
            result = true;
        }
        return result;
    },
    validArgOfPerigee: function(line2) {
        let argPerigee = line2.substr(34, 8);
        let result = threeDotFourRegExp.test(argPerigee);
        return result;
    },
    validMeanAnomaly: function(line2) {
        let meanAnomaly = line2.substr(43, 8);
        let result = threeDotFourRegExp.test(meanAnomaly);
        return result;
    },
    validMeanMotion: function(line2) {
        let meanMotion = line2.substr(52, 11);
        let result = new RegExp("[0-9]{2}[.][0-9]{8}").test(meanMotion);
        return result;
    },
    validRevNumber: function(line2) {
        let revNumber = line2.substr(63, 5);
        let result = new RegExp("[0-9]{5}").test(revNumber);
        return result;
    }
};