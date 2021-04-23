const TLEValidator = require('../../src/TLEValidator');

test('TLE', () => {
    const lineOne = `1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927`;
    const lineTwo = `2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537`;
    expect(TLEValidator.validateTLE(lineOne, lineTwo)).toEqual(true);
    expect(TLEValidator.validateLinesWithMessage(lineOne, lineTwo)).toEqual({isValid: true});

    const invalidLineOne = `2 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927`;
    expect(TLEValidator.validateTLE(invalidLineOne, lineTwo)).toEqual(false);
});

test('TLE With Message', () => {
    const lineOne = `1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927`;
    const lineTwo = `2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537`;
    expect(TLEValidator.validateLinesWithMessage(lineOne, lineTwo)).toEqual({isValid: true});

    const invalidLineOne = `5 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927`;
    expect(TLEValidator.validateLinesWithMessage(invalidLineOne, lineTwo)).toEqual({
        isValid: false,
        lineOneErrors: {
            invalidSubStr: [0, 1],
            message: "Invalid Line One Number"
        }
    });
});

test('line1 invalid line num', () => {
    expect(TLEValidator.validateLineOneWithMessage("2 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927")).toEqual({

        invalidSubStr: [0, 1],
        message: "Invalid Line One Number"
    });
});

test('line1 invalid satno', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25a44U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927")).toEqual({

        invalidSubStr: [2, 5],
        message: "Invalid Sat No"

    });
});

test('line1 invalid intl desg year', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U a8067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927")).toEqual({

        invalidSubStr: [9, 2],
        message: "Invalid International Designation Year"
    });
});

test('line1 invalid epoch day', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067A   08264.a1782528 -.00002182  00000-0 -11606-4 0  2927")).toEqual({

        invalidSubStr: [20, 12],
        message: "Invalid Epoch Day"
    });
});

test('line1 invalid first mean motion', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067A   08264.51782528 -000002182  00000-0 -11606-4 0  2927")).toEqual({

        invalidSubStr: [33, 10],
        message: "Invalid First Mean Motion"
    });
});

test('line1 invalid second mean motion', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067A   08264.51782528 -.00002182 a00000-0 -11606-4 0  2927")).toEqual({

        invalidSubStr: [44, 8],
        message: "Invalid Second Mean Motion"
    });
});

test('line1 invalid b* drag', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067A   08264.51782528 -.00002182  00000-0 -a1606-4 0  2927")).toEqual({

        invalidSubStr: [53, 8],
        message: "Invalid B Star Drag"
    });
});

test('line1 invalid ephemeris type', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 a  2927")).toEqual({

        invalidSubStr: [62, 1],
        message: "Invalid Ephemeris Type"
    });
});

test('line1 invalid element set number', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  a927")).toEqual({

        invalidSubStr: [64, 4],
        message: "Invalid Element Set Number"
    });
});

test('line1 invalid checksum', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  292a")).toEqual({

        invalidSubStr: [68, 1],
        message: "Invalid Checksum"
    });
});

test('line1 incorrect checksum', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2928")).toEqual({

        invalidSubStr: [68, 1],
        message: "Incorrect Checksum, expected: 7"
    });
});

test('line1 invalid space', () => {
    expect(TLEValidator.validateLineOneWithMessage("1a25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927")).toEqual({

        invalidSubStr: [1, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineOneWithMessage("1 25544U198067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927")).toEqual({

        invalidSubStr: [8, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067ABC-08264.51782528 -.00002182  00000-0 -11606-4 0  2927")).toEqual({

        invalidSubStr: [17, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067ABC 08264.51782528=-.00002182  00000-0 -11606-4 0  2927")).toEqual({

        invalidSubStr: [32, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067ABC 08264.51782528 -.000021820 00000-0 -11606-4 0  2927")).toEqual({

        invalidSubStr: [43, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067ABC 08264.51782528 -.00002182  00000-0=-11606-4 0  2927")).toEqual({

        invalidSubStr: [52, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067ABC 08264.51782528 -.00002182  00000-0 -11606-4=0  2927")).toEqual({

        invalidSubStr: [61, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067ABC 08264.51782528 -.00002182  00000-0 -11606-4 0= 2927")).toEqual({

        invalidSubStr: [63, 1],
        message: "Invalid Space"
    });
});



test('line2 invalid line num', () => {
    expect(TLEValidator.validateLineTwoWithMessage("1 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537")).toEqual({

        invalidSubStr: [0, 1],
        message: "Invalid Line Two Number"
    });
});

test('line2 invalid satno', () => {
    expect(TLEValidator.validateLineTwoWithMessage("2 2554a  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537")).toEqual({

        invalidSubStr: [2, 5],
        message: "Invalid Sat No"
    });
});

test('line2 invalid inclination', () => {
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  a1.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537")).toEqual({
        invalidSubStr: [8, 8],
        message: "Invalid Inclination"
    });
});

test('line2 invalid RAAN', () => {
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 2a7.4627 0006703 130.5360 325.0288 15.72125391563537")).toEqual({

        invalidSubStr: [17, 8],
        message: "Invalid RAAN"
    });
});

test('line2 invalid Eccentricity', () => {
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 247.4627 000670a 130.5360 325.0288 15.72125391563537")).toEqual({

        invalidSubStr: [26, 7],
        message: "Invalid Eccentricity"
    });
});

test('line2 invalid Argument Of Perigee', () => {
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 247.4627 0006703 130 5360 325.0288 15.72125391563537")).toEqual({

        invalidSubStr: [34, 8],
        message: "Invalid Argument Of Perigee"
    });
});

test('line2 invalid Mean Anomaly', () => {
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 247.4627 0006703 130.5360 325 0288 15.72125391563537")).toEqual({

        invalidSubStr: [43, 8],
        message: "Invalid Mean Anomaly"
    });
});

test('line2 invalid Mean Motion', () => {
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15 72125391563537")).toEqual({

        invalidSubStr: [52, 11],
        message: "Invalid Mean Motion"
    });
});

test('line2 invalid Rev Number', () => {
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563a37")).toEqual({

        invalidSubStr: [63, 5],
        message: "Invalid Rev Number"
    });
});

test('line2 invalid Checksum', () => {
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.7212539156353a")).toEqual({

        invalidSubStr: [68, 1],
        message: "Invalid Checksum"
    });
});

test('line2 incorrect Checksum', () => {
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563538")).toEqual({

        invalidSubStr: [68, 1],
        message: "Incorrect Checksum, expected: 7"
    });
});

test('line2 invalid space', () => {
    expect(TLEValidator.validateLineTwoWithMessage("2.25544  51.6416 247.4627 0006703 130.5360 325.0288 15.7212539156353a")).toEqual({
        invalidSubStr: [1, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineTwoWithMessage("2 25544. 51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537")).toEqual({

        invalidSubStr: [7, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416.247.4627 0006703 130.5360 325.0288 15.7212539156353a")).toEqual({

        invalidSubStr: [16, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 247.4627.0006703 130.5360 325.0288 15.7212539156353a")).toEqual({

        invalidSubStr: [25, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 247.4627 0006703.130.5360 325.0288 15.7212539156353a")).toEqual({

        invalidSubStr: [33, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 247.4627 0006703 130.5360.325.0288 15.7212539156353a")).toEqual({

        invalidSubStr: [42, 1],
        message: "Invalid Space"
    });
    expect(TLEValidator.validateLineTwoWithMessage("2 25544  51.6416 247.4627 0006703 130.5360 325.0288.15.7212539156353a")).toEqual({

        invalidSubStr: [51, 1],
        message: "Invalid Space"
    });
});
