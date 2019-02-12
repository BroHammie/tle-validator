const CommonValidator = require('../src/CommonValidator');

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

test('validates checksum', () => {
    expect(CommonValidator.validCheckSum("1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0 00011")).toBe(true);
});
test('validates checksum', () => {
    expect(CommonValidator.validCheckSum("1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0 00011")).toBe(true);
});

test('validates valid satNo', () => {
    const validLineOne = "1 25544 ";
    expect(CommonValidator.validSatNo(validLineOne)).toBe(true);
});
test('validates invalid satNo', () => {
    const inValidLineOne = "1 25a44 ";
    expect(CommonValidator.validSatNo(inValidLineOne)).toBe(false);
});