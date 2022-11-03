# Data Structures and Algorithms

- `algorithm` is a sequence of steps to get your desired output from a given input
- more complex programs may require more sophisticated data storage solutions and computation logic
- in addition, you must be able to think logically as a programmer - get a `problem solving` attitude

## Example Algorithm

```TypeScript
// Find minimum value in an array (-> data structure)
const foo = [3, 1, 2];

const getMin = (numbers) => { // [3, 1, 2]
  // Block c1
  if (!numbers.length) return; // 1 execution
  let currentMin = numbers[0]; // 1 execution

  // Block c2
  for (let i = 1; i < numbers.length; i++) {
    currentMin = (numbers[i] < currentMin) ? numbers[i] : currentMin; // 2 execution
  }

  // Block c3
  return currentMin; // 1 execution
}

// Performance: Big O Notation
// Time = c1 + n*c2 + c3 // -> only blocks matter that have influence on executions
// Time Complexity = n -> Linear Time Complexity -> O(n)
// -> better than algorithm below
// BEST CASE: [5] -> O(1)
// WORST CASE: [3, 1] -> O(n)

getMin(foo); // 1

const getMin2 = (numbers) => {
  if (!numbers.length) return;

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i]; // n execution
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) { // n execution
        // swap
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // e.g. [1, 3] = [3, 1]
      }
    }
  }

  return numbers[0];
}

// Performance: Big O Notation
// Time = n * n -> Quadratic Time Complexity -> O(n^2)
// BEST CASE: [1, 2, 3] -> O(n^2)
// WORST CASE: [3, 2, 1] -> O(n^2)
// AVERAGE CASE: [?, ?, ?] -> O(n^2)

getMin2(foo); // 1
```

## Measure Time for Executing

- `Big O Notation`: expressed in a generalized form (NOT in time units but in mathematical terms)
- `Example`: look above at algorithms

![](/00_slides/49_measuring-time-algorithms.png)
