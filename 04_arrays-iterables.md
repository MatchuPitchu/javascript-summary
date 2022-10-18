# Arrays and Iterables

- `Iterable`: is an object that implements the `iterable protocol` and have a `@@iterator` method (i.e. `Symbol.iterator`)

  - Iterables: `Array`, `NodeList`, `String`, `Map`, `Set`

- `Array-like Object`: is an object with a `length` property and use an `index` to access items

  - Array-like objects: `NodeList`, `String`

## Creating Arrays

```TypeScript
const arr1 = [1, 2];

const arr2 = Array.from('Hi') // ['H', 'i'] -> transforms an iterable into an array

// rarely used
const arr3 = new Array(1, 2) // notice: new Array(5) -> empty array with length 5

const arr4 = Array.of(1, 2);
```

## Useful Methods of Arrays

```TypeScript
arr.push(); // adds item at the end
arr.pop(); // removes item at the end

arr.unshift(); // adds item at the beginning and moves all items one index higher
arr.shift(); // removes item at the beginning and moves all items one index lower

arr.splice(START_INDEX, NUMBER_OF_ITEMS_TO_DELETE?, ...ITEMS_TO_INSERT?); // returns removed items

arr.slice(START_INDEX, END_INDEX?) // returns new shallow copy of array, end index not included

arr.concat(ARRAY[]) // merges two or more arrays; does NOT change existing arrays, but instead returns a new array

arr.indexOf(ITEM_VALUE, START_INDEX?) // returns first index where the passed value is found in an array
arr.lastIndexOf(ITEM_VALUE) // same as above, but starts searching in array from the end

arr.find((item, index?, fullArray?) => item === 'test'); // returns first matching item (i.e. return is true)
arr.findIndex(); // same as above, but returns found index

arr.includes(ITEM_VALUE) // returns boolean value

const newArr = arr.map((item, index?, fullArray?) => {
  // ... logic
  return newItem;
}) // transforms items of array, returns new array, does NOT mutate original array

const sortedArr = [10, 1, 5].sort((a, b) => {
  if(a > b) return 1; // a must be after b (-> a +1 position)
  if (a < b) return -1; // a must be before b (-> a -1 position)
  return 0; // no change
})

const filteredArr = [1, 2].filter((item, index?, fullArray?) => item === 1); // return true means, that item is kept (-> filtered out in new array), false means opposite

const total = [1, 5, 10].reduce((accumulator, currentValue, currentIndex?, fullArray?) => accumulator + currentIndex, 0); // reduces values of array items to another new value or wished construct

const data = ['test;10']
const splitData = data.split(";"); // ['test', '10']

const arr = ['hello', 'world'];
const joinedString = arr.join(' '); // 'hello world'
```
