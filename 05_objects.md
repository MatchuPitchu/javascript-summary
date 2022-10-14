# Objects

- `objects` are made up of `properties` and `methods`
  - store data in properties and actions in methods
  - all `reference` values are in the end `objects`, BUT objects consists in the end, sometimes deep nested of primitive values
- `object literal`: `{...}`
- remove object property: `delete objectName.property`
- dynamic properties:

  - accessing properties with a variable

    ```TypeScript
    const propertyName = 'name';
    objectName[propertyName];
    ```

  - defining properties with a variable

    ```TypeScript
    const propertyName = 'name';
    const objectName = {
      [propertyName]: 'Matchu',
    }
    ```

- create new object: `Object.assign()` -> better way is spread operator

  ```TypeScript
  const person = {
    name: 'Matchu',
    age: 20,
  };

  Object.assign({}, person); // merge person object properties into first argument
  ```

- check if property exists in object with `in` operator

  ```TypeScript
  if ('name' in personObj) {
    // ...
  }
  ```
