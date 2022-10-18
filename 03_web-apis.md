# Web APIs

- official documentation: <https://developer.mozilla.org/en-US/docs/Web/API?retiredLocale=de>

## Examples

```TypeScript
// [1] timeout
const timerId = setTimeout(cb, duration, ...[argumentsForCbFunction]?);
// stop timeout
clearTimeout(timerId);

// [2] interval
const intervalId = setInterval(cb, intervalDuration, ...[argumentsForCbFunction]?);
// stop interval
clearTimeout(intervalId);

// [3] location: mutate user location
location.href = 'https://targetWebsite.de'; // forwards user to URL
location.replace(''); // replaces current location (-> so afterwards: can NOT go back to current page)
location.pathname; // path after domain "/..."

// [4] history: interact with browser history
history.back(); // go to last page
history.forward(); // go to next page (if there was already a next page)

history.length; // location steps of user

history.go(value); // go back (-value) or forward (+value) steps

// [5] navigator https://developer.mozilla.org/en-US/docs/Web/API/Navigator
navigator.clipboard; // functionality for copy/paste
navigator.geolocation; // functionality for user location
// ...
```
