# tle-validator

TLEs suck, this helps them suck less.

Can run validateTLE() that returns a boolean or run with validateTLEWithMsg() to get indexes that are wrong with what component is effed up.

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
```
Does this even work tho?! Catalog.test.js runs against the whole catalog(17k sats). 
