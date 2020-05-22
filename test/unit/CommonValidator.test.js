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

test('validates checksum', () => {
    expect(CommonValidator.validCheckSum("1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0 00011")).toBe(true);
});
test('validates invalid checksum', () => {
    expect(CommonValidator.validCheckSum("1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0 0001 ")).toBe(false);
});

test('validates checksum calculation', () => {
    expect(CommonValidator.checkCheckSum("1 41868U 16061G   20139.90454403 +.00034898 +87835-5 +88966-4 0  9994")).toEqual({
        isValid: true,
    });
});
test('validates invalid checksum calculation', () => {
    expect(CommonValidator.checkCheckSum("1 41868U 16061G   20139.90454403 +.00034898 +87835-5 +88966-4 0  9995")).toEqual({
        isValid: false,
        calculatedCheckSum: 4
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