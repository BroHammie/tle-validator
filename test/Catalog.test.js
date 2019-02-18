const TLEValidator = require('../src/TLEValidator');
const catalogArray = require('./3les').tleArray;

test('Catalog', () => {
    catalogArray.forEach(tle => {
        expect(TLEValidator.validateTLE(tle.line1, tle.line2)).toEqual(true);
        expect(TLEValidator.validateTLEWithMessage(tle.line1, tle.line2)).toEqual(true);
    });
});