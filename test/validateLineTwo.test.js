const tleValidator = require('../src/tle-validator');

test('validates line 2', () => {
    const validLineTwo = "2 25544  51.6414 278.5526 0005375   9.1011 131.7761 15.53240808155340";
    expect(tleValidator.validateLineTwo(validLineTwo)).toBe(true);
});