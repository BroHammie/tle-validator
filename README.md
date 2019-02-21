# tle-validator

TLEs suck, this helps them suck less.

Can run straight regex with validateTLE() that returns a boolean or run with validateTLEWithMsg() to get indexes that are wrong with what component is effed up.

Example result:
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