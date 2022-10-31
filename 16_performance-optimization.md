# Performance Optimization in JavaScript

- `performance` is influenced by a lot of factors: CSS, HTML, JavaScript Code, server speed, server configuration
- `startup time`
  - how long does it take to see something on the screen
  - how quickly is a user able to interact with the page
- `runtime performance`
  - how smooth does app run (freezes, lag)
  - how smooth do animations play (visual lag)
  - are there any memory leaks, is page getting slower over time

## Different Layers of Performance Optimization

![](00_slides/48_performance-optimization-layers.png)

## Measuring and Auditing

- article about optimization of JavaScript execution: <https://web.dev/optimize-javascript-execution>

- measure only `production` code
- check roundtrips and script size and set script/bundle size budgets
- measure performance with devtools
- explore best practices, patterns and benchmarks

## Tools

- `performance.now()` or `performance.measure()`: add this to your code (during development/testing) and check execution time (difference) for certain operations

- `Browser DevTools` (all examples are based on `Chrome`): use the many features of browser dev tools to detect unnecessary code executions, HTTP requests and measure execution time and memory leaks

  - `Network` Tab

    - a) activate `Disable cache` (disabled as long as DevTools are open)
    - b) change `Online` to `Slow 3G` to simulate slower internet connection
    - c) check how much of your JS code is used: press `Esc` -> go to icon with 3 points -> open `Coverage`

      ```JavaScript
      // You could lazy load first unused code (look a modules in basics-concepts file)
      const foo = async () => {
        const { YOUR_NAMED_IMPORT_FUNCTION } = await import('./RELATIVE_PATH_TO_FILE.js')
        YOUR_NAMED_IMPORT_FUNCTION();
      }
      ```

  - `Performance` Tab

    - you can a) throttle your CPU, b) activate `Screenshots` and click on record button to record your interactions with page and see summary

  - `Memory`Tab

    - click on `take snapshot` button, do interact with page, take second snapshot and chose `Comparison` inside `Summary` dropdown

  - `Audits` tab
    - browser does checks for you

- `webpagetest.com`: test your entire (live) web page to detect optimization potential
