# Web APIs

- official documentation: <https://developer.mozilla.org/en-US/docs/Web/API?retiredLocale=de>

## Timeout and Interval

- mutate user location

```TypeScript
const timerId = setTimeout(cb, duration, ...[argumentsForCbFunction]?);
// stop timeout
clearTimeout(timerId);

const intervalId = setInterval(cb, intervalDuration, ...[argumentsForCbFunction]?);
// stop interval
clearTimeout(intervalId);
```

## Location

- mutate user location

```TypeScript
location.href = 'https://targetWebsite.de'; // forwards user to URL
location.replace(''); // replaces current location (-> so afterwards: can NOT go back to current page)
location.pathname; // path after domain "/..."
```

## History

- interact with browser history

```TypeScript
history.back(); // go to last page
history.forward(); // go to next page (if there was already a next page)

history.length; // location steps of user

history.go(value); // go back (-value) or forward (+value) steps

// pushState() adds a new entry as the current entry of the history stack
// state object is a JavaScript object which is associated with the new history entry created by pushState()
// set empty string to 'unused' (only arg for historical reasons)
pushState(stateObj, unused, url)
```

## Navigator

- <https://developer.mozilla.org/en-US/docs/Web/API/Navigator>

```TypeScript
navigator.clipboard; // functionality for copy/paste
navigator.geolocation; // functionality for user location
// ...
```

## URL and URLSearchParams Object

- `new URL()` includes methods to work with URL
- `new URLSearchParams()` includes methods to work with query string of URL

```TypeScript
const url = new URL('https://www.test.de?a=1&b=test')
const searchParams = new URLSearchParams(url.search)
```

## Internationalization API

- provides language sensitive string comparison, number formatting, and date and time formatting

```TypeScript
const count = 26254.39;
const date = new Date("2012-05-24");

const log = (locale) => `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(locale).format(count)}`;

log("en-US"); // 5/24/2012 26,254.39
log("de-DE"); // 24.5.2012 26.254,39
```

## Web Animations API

<https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API>

- allows for synchronizing and timing changes to the presentation, i.e. animation of DOM elements. It does so by combining two models: the Timing Model and the Animation Model.
- provides several useful methods for `controlling playback`

```TypeScript
// corresponds to CSS @keyframes, "offset: 0.3" defines 30% change
// Notice: should have at least 2 defined keyframes
const keyFrameObject = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
  { color: '#431236', offset: 0.3 },
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
];

const timing = {
  fill: 'forwards',
  duration: 3000,
  iterations: Infinity
}

const foo = document.getElementById("foo").animate(
  keyFrameObject,
  aliceTiming
)

foo.pause(); // pause animation
foo.play(); // run animation
foo.finish(); // skips to the end of the animation.
foo.cancel(); // aborts the animation and removes its effects.
foo.reverse(); // sets the animation's playback rate (Animation.playbackRate) to a negative value so it runs backward.
```
