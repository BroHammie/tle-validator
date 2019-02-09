const tleValidator = require('../src/tle-validator');

test('validates line 1', () => {
    const validLineOne = "1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927";
    expect(tleValidator.validateLineOne(validLineOne)).toBe(true);
});