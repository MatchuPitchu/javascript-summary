# Browser Storage

- `browser`: store temporary, convenience data
- `server`: store essential and persistent data

![](/00_slides/43_browser-storage.png)

## Types of Browser Storage

- `localStorage` / `sessionStorage`
- `Cookies`
- `IndexedDB`

![](/00_slides/44_localstorage-cookies-indexeddb.png)

## Examples

- look at example project folder

```TypeScript
const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');

// [1] local storage: data is persisted until user or browser cleared it
// [2] session storage: similar but with sessionStorage object, but data is removed when page/tab is closed
const userId = '1234';
const user = {
  name: 'Matchu',
  hobbies: ['Coding', 'Music'],
};

storeButton?.addEventListener('click', () => {
  localStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrieveButton?.addEventListener('click', () => {
  const id = localStorage.getItem('uid');
  const user = localStorage.getItem('user');

  console.log(`User ID: ${id ? id : 'not found'}`);
  console.log(`User: ${user ? JSON.parse(user) : 'not found'}`);
});

// [3] Cookies on client side
// set expiration: if neither expires nor max-age specified it will expire at the end of session.
// a) max-age flag defines expiration in seconds in future
// b) expires flag defines expiration date
// notice: flags are not included when you retrieve data via document.cookie
storeButton?.addEventListener('click', () => {
  document.cookie = `uid=${userId}; max-age=10`; // adds new cookie (no overwrite)
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveButton?.addEventListener('click', () => {
  console.log(document.cookie); // access to ALL stored cookies (no option to get certain key value pair directly)
  const cookieData = document.cookie.split(';').map((item) => item.trim());
  console.log(cookieData);
});

// [4] IndexedDB
// it's an object store

let db: IDBDatabase;

// open connection
const dbRequest = indexedDB.open('NAME_OF_YOUR_CHOICE', 1); // number = current version of database

// runs whenever this script runs
dbRequest.onsuccess = (event) => {
  db = (event.target as IDBOpenDBRequest).result;
};

// runs when database is created the first time OR when version number changed
dbRequest.onupgradeneeded = (event) => {
  db = (event.target as IDBOpenDBRequest).result;

  const objectStore = db.createObjectStore('products', { keyPath: 'id' });

  objectStore.transaction.oncomplete = (event) => {
    const productsStore = db.transaction('products', 'readwrite').objectStore('products');
    productsStore.add({
      id: '1',
      title: 'foo',
      tags: ['foo', 'foo'],
    }); // add JavaScript object that needs to have a key of 'id' (look definition above)
  };
};

dbRequest.onerror = (event) => {
  // add fallback logic if error occurs
  console.log('Error');
};

storeButton?.addEventListener('click', () => {
  const productsStore = db.transaction('products', 'readwrite').objectStore('products');
  productsStore.add({
    id: '2',
    title: 'bar',
    tags: ['bar', 'bar'],
  });
});

retrieveButton?.addEventListener('click', () => {
  const productsStore = db.transaction('products', 'readwrite').objectStore('products');
  const request = productsStore.get('2');

  request.onsuccess = (event) => {
    console.log(request.result); // retrieved item
  };
});
```
