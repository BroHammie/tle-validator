const LineTwoValidator = require('../src/LineTwoValidator');

test('validates valid line 2 number', () => {
    const validLineTwo = "2 ";
    expect(LineTwoValidator.validLineTwoNumber(validLineTwo)).toBe(true);
});
test('validates invalid line 2 number', () => {
    const inValidLineTwo = "1 ";
    expect(LineTwoValidator.validLineTwoNumber(inValidLineTwo)).toBe(false);
});

test('validates valid inclination', () => {
    const validLineTwo = "2 25544  51.6416";
    expect(LineTwoValidator.validInclination(validLineTwo)).toBe(true);
});
test('validates invalid inclination', () => {
    let inValidLineTwo = "2 25544 a51.6416";
    expect(LineTwoValidator.validInclination(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51-6416";
    expect(LineTwoValidator.validInclination(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6a16";
    expect(LineTwoValidator.validInclination(inValidLineTwo)).toBe(false);
});

test('validates valid RAAN', () => {
    const validLineTwo = "2 25544  51.6416 247.4627";
    expect(LineTwoValidator.validRAAN(validLineTwo)).toBe(true);
});
test('validates invalid RAAN', () => {
    let inValidLineTwo = "2 25544  51.6416 2a7.4627";
    expect(LineTwoValidator.validRAAN(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6416 24704627";
    expect(LineTwoValidator.validRAAN(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6416 247.4a27";
    expect(LineTwoValidator.validRAAN(inValidLineTwo)).toBe(false);
});

test('validates valid Eccentricity', () => {
    let validLineTwo = "2 25544  51.6416 247.4627 0006703";
    expect(LineTwoValidator.validEccentricity(validLineTwo)).toBe(true);
});
test('validates invalid Eccentricity', () => {
    let inValidLineTwo = "2 25544  51.6416 2a7.4627 00a6703";
    expect(LineTwoValidator.validEccentricity(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6416 24704627 00-6703";
    expect(LineTwoValidator.validEccentricity(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6416 247.4a27 000.703";
    expect(LineTwoValidator.validEccentricity(inValidLineTwo)).toBe(false);
});

test('validates valid Argument Of Perigee', () => {
    const validLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360";
    expect(LineTwoValidator.validArgOfPerigee(validLineTwo)).toBe(true);
});
test('validates invalid Argument Of Perigee', () => {
    let inValidLineTwo = "2 25544  51.6416 247.4627 0006703 1a0.5360";
    expect(LineTwoValidator.validArgOfPerigee(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6416 247.4627 0006703 13005360";
    expect(LineTwoValidator.validArgOfPerigee(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6416 247.4627 0006703 130.5a60";
    expect(LineTwoValidator.validArgOfPerigee(inValidLineTwo)).toBe(false);
});

test('validates valid Mean Anamoly', () => {
    const validLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360 325.0288";
    expect(LineTwoValidator.validMeanAnomaly(validLineTwo)).toBe(true);
});
test('validates invalid Mean Anamoly', () => {
    let inValidLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360 325.0a88";
    expect(LineTwoValidator.validMeanAnomaly(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360 325-0288";
    expect(LineTwoValidator.validMeanAnomaly(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360 3a5.0288";
    expect(LineTwoValidator.validMeanAnomaly(inValidLineTwo)).toBe(false);
});

test('validates valid Mean Motion', () => {
    const validLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391";
    expect(LineTwoValidator.validMeanMotion(validLineTwo)).toBe(true);
});
test('validates invalid Mean Motion', () => {
    let inValidLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360 325.0288 a5.72125391";
    expect(LineTwoValidator.validMeanMotion(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15072125391";
    expect(LineTwoValidator.validMeanMotion(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72a25391";
    expect(LineTwoValidator.validMeanMotion(inValidLineTwo)).toBe(false);
});

test('validates valid Rev Number', () => {
    const validLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.7212539156353";
    expect(LineTwoValidator.validRevNumber(validLineTwo)).toBe(true);
});
test('validates invalid Rev Number', () => {
    let inValidLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360 325.0288 a5.721253915635 ";
    expect(LineTwoValidator.validRevNumber(inValidLineTwo)).toBe(false);

    inValidLineTwo = "2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15072125391 6353";
    expect(LineTwoValidator.validRevNumber(inValidLineTwo)).toBe(false);
});