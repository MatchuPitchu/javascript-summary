# Numbers

- in JavaScript every `Number` is a `Float` -> unlike other Languages, JS does NOT know special `Integer Types`
- Numbers are stored as `64 Bit` Floating Points (-> binary system)

```JavaScript
// biggest integer (i.e. no decimal places required)
Number.MAX_SAFE_INTEGER; // 9007199254740991
Math.pow(2, 53) - 1; // 9007199254740991

Number.MIN_SAFE_INTEGER; // -9007199254740991

// largest decimal number
Number.MAX_VALUE; // 1.7976931348623157e+308
```

## Floating Point Imprecision

```JavaScript
0.2 + 0.4; // 0.6000000000000001
0.2 + 0.4 === 0.6; // false -> since JS works internally in binary system, NOT in decimal system, so converts your decimal into binary, does calculation and re-converts into decimal for humans

// [1] workaround to fix imprecision
(0.2 + 0.4).toFixed(1); // 0.6
(0.2 + 0.4).toFixed(1) === 0.6.toFixed(1); // true

// [2] workaround to avoid imprecision: multiply decimals by 100
0.2 * 100 + 0.4 * 100 === 0.6 * 100 // true
```

## BigInt Type

- add `n` at the end of number
- number is then treated as a string
- notice: no floating point allowed

```JavaScript
90071992547409911239123n

10n - 4n; // 6n
10n - 4; // TypeError: can NOT mix it

5n/2n; // 2n -> decimal is cutted
```

## Infinity

- `1/0` results in `Infinity`

## Math Object

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math?retiredLocale=de>

```JavaScript
Math.PI; // approximately 3.14159

Math.random(); // returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
Math.floor(); // returns largest integer less than or equal to x.

const randomIntBetween = (min, max) => {
  // +1 needed, without it could never yield minimum and maximum since 0 and 1 are not included into random()
  // floor() cuts decimals up that max return would be our max parameter
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```
