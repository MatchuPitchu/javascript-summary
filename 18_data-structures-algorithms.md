# Data Structures and Algorithms

- `algorithm` is a sequence of steps to get your desired output from a given input
- more complex programs may require more sophisticated data storage solutions and computation logic
- in addition, you must be able to think logically as a programmer - get a `problem solving` attitude

## Example Algorithm

```TypeScript
// Find minimum value in an array (-> data structure)
const foo = [3, 1, 2];

const getMin = (numbers) => {
  if (!numbers.length) return;

  let currentMin = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    currentMin = (numbers[i] < currentMin) ? numbers[i] : currentMin;
  }

  return currentMin;
}

getMin(foo); // 1

const getMin2 = (numbers) => {
  if (!numbers.length) return;

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        // swap
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // e.g. [1, 3] = [3, 1]
      }
    }
  }

  return numbers[0];
}

getMin2(foo); // 1
```
