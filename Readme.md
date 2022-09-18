# Summary Course "JavaScript - The Complete Guide 2022 (Beginner + Advanced)" (Udemy)

- JavaScript:
  - is `dynamic`, i.e. coda can change at runtime (e.g. type of a variable)
  - is `weakly typed`, i.e. data types are assumed (e.g. assigned to variables) automatically and can change
    - you don't define that some variable has to hold a certain value (e.g. `number`)
  - is `interpreted`, i.e. it's on the fly `compiled and executed at runtime`
  - is a `hosted` language, i.e. it runs in different `host environments`
    - `browser` (client-side): JS can manipulate HTML, CSS, send background HTTP requests etc.; JS can NOT access local filesystem, interact with operating system
    - `Node.js` (server-side): used to build web backends; can access local filesystem, interact with operating system; can NOT manipulate HTML, CSS

## How JavaScript is executed?

![](/slides/01_how-javascript-is-executed.png)

## Overview of the JavaScript History

![](/slides/02_overview-history-javascript.png)

- `ECMAScript` sets standards for JS which are implemented by browser vendors (Google with Chrome, Mozilla with Firefox etc.) in their `JavaScript engines`

## Variables & Constants

- a variable is a `data container`/`data storage`
- `let` => value can be updated, but can NOT be re-declared with same name; `block scoped` (-> chunk of code bounded by `{...}`)
- `const` => value can NOT be updated and can NOT be re-declared with same name; `block scoped`

- naming conventions and restrictions
  ![](/slides/03_variable-naming.png)

## Operators

![](/slides/04_operators.png)

## Data Types

![](/slides/05_data-types.png)

![](/slides/06_null-undefined-NaN.png)

## Importing JavaScript to a Webpage

- `script` element, `async`/`defer`, timeline of execution while loading the page

![](/slides/07.1_adding-javascript-to-a-webpage.png)

![](/slides/07.2_how-to-import-javascript-in-a-webpage.png)

![](/slides/07.3_timeline-execution-summary.png)
