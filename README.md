[![CircleCI](https://circleci.com/gh/BroHammie/tle-validator/tree/master.svg?style=svg)](https://circleci.com/gh/BroHammie/tle-validator/tree/master)
# tle-validator

TLEs suck, this helps them suck less.

Can run validateTLE() that returns a boolean or run with validateTLEWithMsg() to get indexes that are wrong with what component is messed up.

Example `validateTLEWithMsg()` result:
```
{
    isValid: false,
    lineOneErrors: [
        {
            invalidSubStr: [53,8],
            message: "Invalid B Star Drag"
        }
    ]
}
