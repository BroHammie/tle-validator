const LineOneValidator = require('../../src/LineOneValidator');

test('validates valid line 1 number', () => {
    const validLineOne = "1 ";
    expect(LineOneValidator.validLineOneNumber(validLineOne)).toBe(true);
});
test('validates invalid line 1 number', () => {
    const inValidLineOne = "2 ";
    expect(LineOneValidator.validLineOneNumber(inValidLineOne)).toBe(false);
});

test('validates valid classification', () => {
    const validLineOne = "1 25544U ";
    expect(LineOneValidator.validClassification(validLineOne)).toBe(true);
});
test('validates invalid classification', () => {
    const inValidLineOne = "1 255441";
    expect(LineOneValidator.validClassification(inValidLineOne)).toBe(false);
});

test('validates valid Intl Desg year', () => {
    const validLineOne = "1 25544U 99";
    expect(LineOneValidator.validInternationalDesignationYear(validLineOne)).toBe(true);
});
test('validates invalid Intl Desg year', () => {
    const inValidLineOne = "1 25544U aa";
    expect(LineOneValidator.validInternationalDesignationYear(inValidLineOne)).toBe(false);
});

test('validates valid Intl Desg Launch Number', () => {
    const validLineOne = "1 25544U 98067";
    expect(LineOneValidator.validInternationalDesignationLaunchNumberOfYear(validLineOne)).toBe(true);
});
test('validates invalid Intl Desg Launch Number', () => {
    const inValidLineOne = "1 25544U 9806a";
    expect(LineOneValidator.validInternationalDesignationLaunchNumberOfYear(inValidLineOne)).toBe(false);
});

test('validates valid Intl Desg Piece Of Launch', () => {
    const validLineOne = "1 25544U 98067ABC";
    expect(LineOneValidator.validInternationalDesignationPieceOfLaunch(validLineOne)).toBe(true);
});
test('validates invalid Intl Desg Piece Of Launch', () => {
    const inValidLineOne = "1 25544U 98067777";
    expect(LineOneValidator.validInternationalDesignationPieceOfLaunch(inValidLineOne)).toBe(false);
});

test('validates valid Epoch Year', () => {
    const validLineOne = "1 25544U 98067ABC 08";
    expect(LineOneValidator.validEpochYear(validLineOne)).toBe(true);
});
test('validates invalid Epoch Year', () => {
    const inValidLineOne = "1 25544U 98067777 aa";
    expect(LineOneValidator.validEpochYear(inValidLineOne)).toBe(false);
});

test('validates valid Epoch Day', () => {
    const validLineOne = "1 25544U 98067ABC 08264.51782528 ";
    expect(LineOneValidator.validEpochDay(validLineOne)).toBe(true);
});
test('validates invalid Epoch Day', () => {
    let inValidLineOne = "1 25544U 98067777 08264.5178252a ";
    expect(LineOneValidator.validEpochDay(inValidLineOne)).toBe(false);

    inValidLineOne = "1 25544U 98067777 082a4.51782528 ";
    expect(LineOneValidator.validEpochDay(inValidLineOne)).toBe(false);

    inValidLineOne = "1 25544U 98067777 08264a51782528 ";
    expect(LineOneValidator.validEpochDay(inValidLineOne)).toBe(false);

    inValidLineOne = "1 25544U 98067777 08264,51782528 ";
    expect(LineOneValidator.validEpochDay(inValidLineOne)).toBe(false);
});

test('validates valid First Mean Motion', () => {
    let validLineOne = "1 25544U 98067777 08264.51782528 -.00002182";
    expect(LineOneValidator.validFirstMeanMotion(validLineOne)).toBe(true);

    validLineOne = "1 25544U 98067777 08264.51782528 +.00002182";
    expect(LineOneValidator.validFirstMeanMotion(validLineOne)).toBe(true);

    validLineOne = "1 25544U 98067777 08264.51782528 0.00002182";
    expect(LineOneValidator.validFirstMeanMotion(validLineOne)).toBe(true);
});
test('validates invalid First Mean Motion', () => {
    let inValidLineOne = "1 25544U 98067777 08264.51782528 1.00002182";
    expect(LineOneValidator.validFirstMeanMotion(inValidLineOne)).toBe(false);

    inValidLineOne = "1 25544U 98067777 08264.51782528 1000002182";
    expect(LineOneValidator.validFirstMeanMotion(inValidLineOne)).toBe(false);

    inValidLineOne = "1 25544U 98067777 08264.51782528 0.00002a182";
    expect(LineOneValidator.validFirstMeanMotion(inValidLineOne)).toBe(false);
});

test('validates valid Second Mean Motion', () => {
    let validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0";
    expect(LineOneValidator.validSecondMeanMotion(validLineOne)).toBe(true);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00100-1";
    expect(LineOneValidator.validSecondMeanMotion(validLineOne)).toBe(true);
});
test('validates invalid Second Mean Motion', () => {
    let validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00a00-1";
    expect(LineOneValidator.validSecondMeanMotion(validLineOne)).toBe(false);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000+1";
    expect(LineOneValidator.validSecondMeanMotion(validLineOne)).toBe(false);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-a";
    expect(LineOneValidator.validSecondMeanMotion(validLineOne)).toBe(false);
});

test('validates valid B* Drag', () => {
    let validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0";
    expect(LineOneValidator.validBStarDrag(validLineOne)).toBe(true);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00100-1 -00010-1";
    expect(LineOneValidator.validBStarDrag(validLineOne)).toBe(true);
});
test('validates invalid B* Drag', () => {
    let validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-1 -00a00-0";
    expect(LineOneValidator.validBStarDrag(validLineOne)).toBe(false);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000+1 -00000+1";
    expect(LineOneValidator.validBStarDrag(validLineOne)).toBe(false);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-a";
    expect(LineOneValidator.validBStarDrag(validLineOne)).toBe(false);
});

test('validates valid Ephemeris Type', () => {
    const validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0";
    expect(LineOneValidator.validEphemerisType(validLineOne)).toBe(true);
});
test('validates invalid Ephemeris Type', () => {
    let validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0  ";
    expect(LineOneValidator.validEphemerisType(validLineOne)).toBe(false);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 a";
    expect(LineOneValidator.validEphemerisType(validLineOne)).toBe(false);
});

test('validates valid Element Set Number', () => {
    let validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0  292";
    expect(LineOneValidator.validElementSetNumber(validLineOne)).toBe(true);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0 0292";
    expect(LineOneValidator.validElementSetNumber(validLineOne)).toBe(true);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0    2";
    expect(LineOneValidator.validElementSetNumber(validLineOne)).toBe(true);
});
test('validates invalid Element Set Number', () => {
    let validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0    a";
    expect(LineOneValidator.validElementSetNumber(validLineOne)).toBe(false);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0 a   ";
    expect(LineOneValidator.validElementSetNumber(validLineOne)).toBe(false);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0 aaaa";
    expect(LineOneValidator.validElementSetNumber(validLineOne)).toBe(false);

    validLineOne = "1 25544U 98067777 08264.51782528 -.00002182  00000-0 -00000-0 0 aaaa";
    expect(LineOneValidator.validElementSetNumber(validLineOne)).toBe(false);
});