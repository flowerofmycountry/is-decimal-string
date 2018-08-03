# is-decimal-string

## Usage

copy the code:

```js
function isDecimalString(value) {
    if (typeof value !== 'string') return false;
    if (isNaN(value)) return false;    
    if (value.trim() === "") return false;
    if (value === "0" || value.startsWith("0.")) return true;
    if (value.startsWith("0")) return false;
    return true;
}
```

### test

```js
isDecimalString(0xff);               // false
isDecimalString(0);                  // false
isDecimalString(1);                  // false
isDecimalString(12);                 // false
isDecimalString(010);                // false
isDecimalString(11.1);               // false
isDecimalString('1');                // true
isDecimalString('1.1');              // true
isDecimalString('10');               // true
isDecimalString('10.10');            // true
isDecimalString('100');              // true
isDecimalString('0.1');              // true
isDecimalString('0.100');            // true
isDecimalString('0.01');             // true
isDecimalString('101.100');          // true
isDecimalString('1.1');              // true
isDecimalString('0100');             // false
isDecimalString('00.100');           // false
isDecimalString('000000.100');       // false
isDecimalString('0.100test');        // false
isDecimalString('00.100');           // false
isDecimalString('01.100');           // false
```
