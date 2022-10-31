# Maps and Sets

- difference of `Arrays`, `Sets` and `Maps`
  - `Set` is a data structure that is perfect if you want to store unique values; it can tell you if it contains a value or not

![](/00_slides/26_difference-arrays-sets-maps.png)

```TypeScript
/*** Sets ***/
// create new Set; pass in any Iterable as argument
const ids = new Set([1, 2, 3]);
const hasValue = ids.has(1); // true

ids.add(2); // already exists, so no new one is added
ids.delete(3) // returns false/true if value was deleted or not since does nothing if value does NOT exist

for(const entry of ids.values()) {
  console.log(entry);
}

/*** Maps ***/
// create new Map that uses object as a key and attaches additional information in the value of any kind of data
const person1 = { name: 'Matchu'};
const person2 = { name: 'Pitchu'};

const personData = new Map([[person1, { age: 30 }]]);
// get value of key value pair
personData.get(person1); // { age: 30 }

// add new data
personData.set(person2, { age: 20 });

for (const entry of personData.entries()) {
  console.log(entry); // logs always array of 2 items, the key and the value
}

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}
```

- `Maps` vs. `Objects`

  - `Maps`
    - can use ANY values (and types) as keys
    - better performance for large quantities of data
    - better performance when adding + removing data frequently
  - `Objects`
    - only may use `strings`, `numbers` or `symbols` as keys
    - perfect for small/medium-sized sets of data
    - easier and quicker to create (typically also with better performance)

- `WeakSets`

  - created with `new WeakSet()`
  - only provides methods `add`, `delete`, `has`
  - `WeakSet` allows `garbage collection` of stored e.g. objects, as long as no other part of your code uses this same object -> would not be garbage collected in a normal `Set`

- `WeakMaps`
  - similar idea with `garbage collection` as for `WeakSet`
  - created with `new WeakMap()`
  - only provides methods `get`, `has`, `delete`, `set`
