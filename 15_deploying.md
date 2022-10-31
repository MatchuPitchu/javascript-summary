# Deploying JavaScript Applications

- [1] only HTML, JavaScript, CSS
  - `static host` (does NOT execute server-side code) suffices
  - server needs to host and provide HTML, JS, CSS assets
  - example services: AWS S3, Firebase Hosting ...
- [2] server-side code (Node.js)
  - need `dynamic host` (able to execute server-side `Node.js`)
  - server needs to host and execute files (server-side)
  - example services: AWS Elatic Beanstalk, Heroku ...

## Types of Websites

- you can build different kinds of websites or web apps
- 3 major types:

  - Static Websites (just HTML + CSS + JS)
  - Single-Page-Applications (SPAs, HTML + CSS + JS with only one HTML page being served, client-side JS is used to re-render the page dynamically)
  - Dynamic/Server-side rendered Web Applications: Websites where the HTML pages are created dynamically on the server (e.g. via templating engines like EJS).

- more details: <https://academind.com/learn/web-dev/dynamic-vs-static-vs-spa>
- when deploying such websites, it's important to understand that sites with NO server-side code (i.e. Static Websites and SPAs), required only a static host (e.g. AWS S3, Firebase Hosting)
- pages where HTML is generated dynamically on the server require a host that is capable of executing the server-side code (i.e. a server that supports NodeJS, PHP or whatever language is being used)

## Deployment Process

![](/00_slides/47_deployment-process.png)
