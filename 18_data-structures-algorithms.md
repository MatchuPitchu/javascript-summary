# Data Structures and Algorithms

- `algorithm` is a sequence of steps to get your desired output from a given input
- more complex programs may require more sophisticated data storage solutions and computation logic
- in addition, you must be able to think logically as a programmer - get a `problem solving` attitude

## Measure Time for Executing

- `Big O Notation`: expressed in a generalized form (NOT in time units but in mathematical terms)
- `Example`: look below at algorithms

![](/00_slides/49_measuring-time-algorithms.png)

- `Constant Time Complexity`:

![](/00_slides/50_constant-time-complexity.png)

- `Linear Time Complexity`:

![](/00_slides/51_linear-time-complexity.png)

- `Quadratic Time Complexity`:

![](/00_slides/52_quadratic-time-complexity.png)

- `Logarithmic Time Complexity`:

![](/00_slides/53_logarithmic-time-complexity.png)

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
// AVERAGE CASE: [?, ?, ?] -> O(n)

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

```TypeScript
const isEvenOrOdd = (number: number): 'even' | 'odd' => {
  return number % 2 ? 'odd' : 'even';
}

// Performance: Big O Notation
// Constant Time Complexity -> O(1)
// always same execution time, no matter which input
```

```TypeScript
const array = [1, 2, 3];

const sumUp = (numbers: number[]): number => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // n execution
  }

  return sum;
}

// Performance: Big O Notation
// Linear Time Comparison -> O(n)
```

## Examples for Data Structures and Algorithm

```TypeScript
const age = [1, 3];

age.push(3);
// -> Constant Time Complexity: O(1)
// 2 Operations needed: add item + create new index
// [1, 2] -> [1, 2, _]
// [index0, index1] -> [index0, index1, _]

age.unshift(0);
// -> Linear Time Complexity: O(n)
// 2 Operations needed: add item at beginning + update ALL indexes
// [1, 2, 3] -> [_, 1, 2, 3]
// [index0, index1, index3] -> [newIndex0, newIndex1, newIndex2, newIndex3]

const number = age[0]; // -> Contant Time Complexity: O(1)

const namePopularity = [
  { user: 'Matchu', usages: 1 },
  { user: 'Pitchu', usages: 5 },
];

const matchuUsages = namePopularity.find((person) => person.user === 'Matchu').usages;
// BEST CASE: Constant Time Complexity: O(1) -> 'Matchu' is first item
// WORST CASE: Linear Time Complexity: O(n) -> 'Matchu' is last item
// AVERAGE CASE: Linear Time Complexity: O(n) -> 'Matchu' is an item in an array of unknown length

const nameMap = {
  'Matchu': 1,
  'Pitchu': 5
};

const matchuUsages2 = nameMap['Matchu']; // -> Constant Time Complexity: O(1)

const user1 = { name: 'Matchu'};
const user2 = { name: 'Pitchu'};

const nameRealMap = new Map([[user1, { usages: 1 }], [user2, { usages: 5 }]]);
nameRealMap.get(user1).usages; // -> Constant Time Complexity: O(1)
```
