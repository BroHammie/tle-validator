const CommonValidator = require('../../src/CommonValidator');

test('validates positive', () => {
    expect(CommonValidator.isPosNegOrZero("+")).toBe(true);
});
test('validates negative', () => {
    expect(CommonValidator.isPosNegOrZero("-")).toBe(true);
});
test('validates zero', () => {
    expect(CommonValidator.isPosNegOrZero("0")).toBe(true);
});
test('invalidates char', () => {
    expect(CommonValidator.isPosNegOrZero("a")).toBe(false);
});
test('invalidates space', () => {
    expect(CommonValidator.isPosNegOrZero(" ")).toBe(false);
});
test('validates existing checksum', () => {
    expect(CommonValidator.validCheckSum("1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  292a")).toEqual({
        isValid: false,
    });
});
test('validates checksum calculation', () => {
    expect(CommonValidator.validCheckSum("1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927")).toEqual({
        isValid: true,
    });
});
test('validates invalid checksum calculation', () => {
    expect(CommonValidator.validCheckSum("1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2929")).toEqual({
        isValid: false,
        calculatedCheckSum: 7
    });
});
test('validates valid satNo', () => {
    const validLineOne = "1 25544 ";
    expect(CommonValidator.validSatNo(validLineOne)).toBe(true);
});
test('validates invalid satNo', () => {
    const inValidLineOne = "1 25a44 ";
    expect(CommonValidator.validSatNo(inValidLineOne)).toBe(false);
});