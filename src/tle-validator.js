module.exports = {
    validateLineOne: function(line1) {
        let result = false;
        if (line1) {
            let regex = new RegExp("1 [ 0-9]{5}[A-Z] [ 0-9]{5}[ A-Z]{3} [ 0-9]{5}[.][ 0-9]{8} (?:(?:[ 0+-][.][ 0-9]{8})|(?: [ +-][.][ 0-9]{7})) [ +-][ 0-9]{5}[+-][ 0-9] [ +-][ 0-9]{5}[+-][ 0-9] [ 0-9] [ 0-9]{4}[ 0-9]");
            result = regex.test(line1);
        } else {
            result = false;
        }
        return result;
    },

    validateLineTwo: function(line2) {
        let result = false;
        if (line2) {
            let regex = new RegExp("2 [ 0-9]{5} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{7} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{2}[.][ 0-9]{13}[ 0-9]");
            result = regex.test(line2);
        } else {
            result = false;
        }
        return result;
    }
};
