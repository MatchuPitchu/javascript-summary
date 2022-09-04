// Scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

// Scroll to the bottom of the page
const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    left: 0,
    behavior: 'smooth',
  });
};

// Scroll elements to the visible area
const smoothScroll = (element) => {
  element.scrollIntoView({
    behavior: 'smooth',
  });
};

// Display the element in fullscreen mode
const goToFullScreen = (element) => {
  element = element || document.body;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
};

// Exit browser full-screen state
const goExitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};

// Get the type of data
const getType = (value) => {
  const match = Object.prototype.toString.call(value).match(/ (\w+)]/);
  return match[1].toLocaleLowerCase();
};

getType(); // undefined
getType({}); // object
getType([]); // array
getType(1); // number
getType('test'); // string
getType(true); // boolean
getType(/test/); // regexp

// Stop bubbling events
const stopPropagation = (event) => {
  event = event || window.event;
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
};

// Deep copy an object
const deepCopy = (obj, hash = new WeakMap()) => {
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    if (obj[key] && typeof obj[key] === 'object') {
      cloneObj[key] = deepCopy(obj[key], hash);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
};

// Determining the type of device
const isMobile = () => {
  return !!navigator.userAgent.match(
    /(iPhone|iPod|Android|ios|iOS|iPad|Blackberry|WebOS|Symbian|Windows Phone|Phone)/i
  );
};

// Determine if the device is Android or IOS
const isAndroid = () => {
  return /android/i.test(navigator.userAgent.toLowerCase());
};

const isIOS = () => {
  let reg = /iPhone|iPad|iPod|iOS|Macintosh/i;
  return reg.test(navigator.userAgent.toLowerCase());
};

// Set cookies
const setCookie = (key, value, expire) => {
  const d = new Date();
  d.setDate(d.getDate() + expire);
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};

// Get cookies
const getCookie = (key) => {
  const cookieStr = unescape(document.cookie);
  const arr = cookieStr.split('; ');
  let cookieValue = '';
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split('=');
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
};

// Delete cookies
const delCookie = (key) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};

// Generate a random string
const randomString = (len) => {
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
  let strLen = chars.length;
  let randomStr = '';
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
};

randomString(10); // pfkMfjEJ6x
randomString(20); // ce6tEx1km4idRNMtym2S

// Capitalize the first letter of the string
const fistLetterUpper = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

fistLetterUpper('test'); // Test

// Generate random numbers in a specified range
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomNum(1, 10); // 6
randomNum(10, 20); // 11

// Shuffle the order of an array
const shuffleArray = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

let arr = [1, -1, 10, 5];

shuffleArray(arr); // [5, -1, 10, 1]
shuffleArray(arr); // [1, 10, -1, 5]

// Get a random value from an array
const getRandomValue = (array) => array[Math.floor(Math.random() * array.length)];
const prizes = ['$100', '🍫', '🍔'];

getRandomValue(prizes); // 🍫
getRandomValue(prizes); // 🍔
getRandomValue(prizes); // 🍫
