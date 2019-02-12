const TLEValidator = require('../src/TLEValidator');

test('validates line1', () => {
    expect(TLEValidator.validateLineOne("1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927")).toBe(true);
});

test('invalid satno', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25a44U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927")).toEqual({
        isValid: false,
        invalidSubStr: [2, 5],
        message: "Invalid Sat No"
    });
});

test('invalid intl desg year', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U a8067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927")).toEqual({
        isValid: false,
        invalidSubStr: [9, 2],
        message: "Invalid International Designation Year"
    });
});

test('invalid epoch day', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067A   08264.a1782528 -.00002182  00000-0 -11606-4 0  2927")).toEqual({
        isValid: false,
        invalidSubStr: [20, 12],
        message: "Invalid Epoch Day"
    });
});

test('invalid first mean motion', () => {
    expect(TLEValidator.validateLineOneWithMessage("1 25544U 98067A   08264.51782528 -000002182  00000-0 -11606-4 0  2927")).toEqual({
        isValid: false,
        invalidSubStr: [33, 10],
        message: "Invalid First Mean Motion"
    });
});