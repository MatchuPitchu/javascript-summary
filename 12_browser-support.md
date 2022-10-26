# Browser Support

- Is a feature available?
  - `MDN` <https://developer.mozilla.org/en-US/>
    - check feature article, browser support table at the bottom
    - often includes notes, fallbacks, workarounds (if support is missing)
  - `caniuse.com` <https://caniuse.com/>
    - search for feature name to get a detailed overview table (incl. browser market shares)
    - often includes notes, fallbacks, workarounds (if support is missing)
  - `google`
    - google with keywords
    - for more complex issues, `Stackoverflow` discussions can be helpful
  - `ES6/JS Compat Table` <https://kangax.github.io/compat-table/es6/>
    - for next-gen JavaScript syntax features, check overview tables
    - provides detailed feature split and also includes support of transpilers

## Using Feature Detection

```TypeScript
const button = document.querySelector('button');
const p = document.querySelector('p');

button.addEventListener('click', async () => {
  const text = p.textContent;
  try {
    // detect if navigator.clipboard is supported or not
    if(navigator.clipboard) {
      const result = await navigator.clipboard.writeText(text)
      console.log(result)
    } else {
      alert('Copy feature not available')
    }
  } catch (error) {
    console.log(error)
  }
}
```

## Using Polyfills

- `Polyfills` are third-party packages that add a functionality that otherwise would be missing in the browser
- `Babel` can use a package `core-js` that can automatically detect non supported things and add polyfills for them while transpilation

## Using Transpilation

- convert (`transpile`) modern code to older code
- third-party tools like `Babel` convert your code to code that works in older browsers as well
