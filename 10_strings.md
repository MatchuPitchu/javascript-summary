# Strings

## Tagged Templates

- handy to change a string dynamically

```JavaScript
const productDescription = (strings, product, price) => {
  console.log(strings, product, price);

  const priceCategory = price > 20 ? 'fair' : 'cheap'

  return `${strings[0]}${product}${strings[1]}${priceCategory}${strings[2]}`;
}

const productName = 'JavaScript'
const productPrice = 10;

// call function with template literal
// [1] first parameter in fn is Array of string parts split by the injected variables
// [2] next parameters are the dynamic variables in the order of the appearance
const productOutput = productDescription`This product (${productName} is ${productPrice}`;
```

## Regular Expressions

- look at my repository: <https://github.com/MatchuPitchu/regex>
