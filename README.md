# Performance Matters

## Performance tracking: assignment week 1
Tested *without* throttling, so with a standard WiFi connection...

### Start with tracking
**0 - The first screenshot without any changes.**
![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/start.png)

### With Semantic HTML and CSS optimisation
**1 - [x] Changed HTML elements to HTML5 elements.**

**2 - [x] Added CSS classes according to the BEM method.**

**3 - [x] Changed CSS markup (for example: FlexBox instead of floating).**

![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/html-css.png)

Suprisingly enough, no big changes in load time were found, it was even longer (could be bacause of no use of throttling).

### With image optimisation
**0 - Header image (network tab in development tools):**
![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/network_tab.png)

**1 - header.png -> header.jpg (+ compressed):**
![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/header-image.png)

Big changes in load time: 2 seconds!

**2 - Sprites (menu icons):**
![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/sprites.png)

No extra ms won in speed.

### JavaScript WebApp
**1 - Removed jQuery:**
![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/no-jquery.png)

Few more ms won. 

**2 - Transformed into a Single Page App:**
![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/webapp.png)

Andddd it's gone... More ms has been added to the aggregated time because of more JS code (scripts + libraries).

### EXTRA: Cricital CSS + Gulp
![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/critical-css.png)

Yes, we are winning again!

### Conclusion
I began this performance tracking with a aggregated time of 5.32 seconds. My first point of action to the performance were: 
- changing the HTML structure 
- changing CSS classes according to the BEM method 
- adding better CSS markup with flexbox and transition: translate; 

These points didn't gave me much improvement in speed. Maybe in theory 1-3 ms. Practically nothing. The big changes in speed came around when I began to optimize the images (mainly the header.png image --> header.jpg) and remove the jQuery script. I bassicly bisected the aggregated time from 5.32 --> 2.21. 

Transforming the website into a SPA increased the loading time by 76m (total: 2.99), which makes sense, because I've added some libraries and JavaScript code. 

My final change, adding Cricical CSS + making a gulp pipeline reduced the time with 44ms, making a nice aggregated time of 2.55 s in total. 


## Performance tracking: assignment week 2
Throttling: WiFi (30 Mb/s download, 15Mb upload).

NOTE: Forgot to make a branch for the Service Worker :-(

### Start with tracking
**0 - Last time we ended here.**
![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/critical-css.png)


### With Service Worker
![Service Worker performance](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/service-worker.png)

In the Service Worker I cached all static files (HTML, CSS, JS, images) and the API feed *on install*. This gives me a HUGE improvement! From 2.55s --> 1.38s = 1.17 seconds won in time. :shipit:

### What is a Progressive Web App?
A Progressive Web App provides an native app user experience that is built using the following tools and features: 

- Progressive - They work for every user, regardless of the browser.
- Responsive - They fit on every screen.
- Connectivity independent - Enhanced with service workers to work offline and with low quality network connections.
- App-like - Feel like a native application.
- Fresh - They are always up-to-date, thanks to the service worker.
- Safe - Served via HTTPS.
- Discoverable - Are identifiable as "applications", allowing search engines to find them.
- Re-engageable - Make re-engagement easy through features like push notifications.
- Installable - Allow users to keep apps on the home screen, without needing an app store.
- Linkable - Easily shareable via URL.
- Progressive must-haves


For a web app to be considered as “progressive” it must do these things:

- Register a service worker — a series of APIs championed by Google that allows for offline access, web push notifications, and more.
- Run on HTTPS, which is a hard requirement imposed by the service workers spec to prevent man-in-the-middle attacks.
- Create an app manifest file, which specifies a bunch of information about your app such as its name.

**Sources**
[Telerik](http://developer.telerik.com/featured/what-progressive-web-apps-mean-for-the-web/)
[Google Developers](https://developers.google.com/web/progressive-web-apps)
[Add Yosmani](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/)
[infrequently](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/)

### Online web server: Digital Ocean 
[link to web server](https://performance.directzichtbaar.nl/)

### Conclusion


## Performance tracking: assignment week 3

### Task Managers
For this project I've already used Gulp, proudly I must say, as my Task Manager and I love it! But why am I using Gulp, or a task manager for that matter? Let's dive in! 

**What's a task manager**

A task manager is a automated JavaScript manager. They automate our task and excecute them without even thinking about it twice, if set up correctly.

**Why should you use a task manager**

When you are creating (coding) en deploying in a front-end development website or application, task managers can be handy to take over some of your tasks. Most task managers use Node, and require you to create tasks and install plugins.

Examples of tasks could be:
- Watching file changes, and when they do:
- Concatenate and minify files
- Add prefixes for files in different browsers
- Lint JavaScript


**Popular task managers**

Most common task managers used nowadays are: 
- Gulp
- Grunt

They both use Node, and both require you to craete tasks and install plugins. But the main difference between the two is: speed:  in how they deal with their automation tasks on the inside. *Gulp uses Node streams while Grunt uses temp files.*

Compared to in-memory operations, disk writes are slow which means that Gulp has a big speed advantage (for now).

[source](http://www.hongkiat.com/blog/gulp-vs-grunt/)

**Why I use Gulp**

Gulp is easy to set up, and give me everything I need to work with. It also looked and felt easier to set up and use, which was the biggest reason why I used Gulp. It seemed like the best task mange for a beginner (noob) like me. Although Grunt is more used. 

"Grunt currently receives about 37,000 downloads a day on average, Gulp gets a bit more than half that, near the 23,000 mark."

"Gulp is a good example that code over configuration can be a good thing when configuration gets a bit confusing. Other people say that while this is true and Gulp is easier to read, it is more difficult to write because piping can be a bit confusing."

I agree with the things mentioned above. 

[source](http://www.hongkiat.com/blog/gulp-vs-grunt/)

I use Gulp for:
- Source Maps (link the minified JS or CSS files in the browser development tools to the original (unminified) files)
- Watch (if there is a file change, do certain tasks)
- Concantate (Bundle all files into one single file)
- Minify JS and CSS
- Babel (ES6 --> ES5)
- Image sprites
- Image optimization (optimize size)


### Optimize HTTP Request
Action points with Gulp:
- Concatenate (bundle JS and CSS)
- Uglify (minify JS)
- CSS Nano (minify CSS)

![HTTP request](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/gulp-minified.png)

We keep on winning, from 1.80s --> 1.33s. That's 0.47s won in time. Yes!

### Optimize Content Images + Optimize Web Fons
Action points:
- Make responsive header image files (different sizes for different viewports)
- Add FOUT solution for web font

**FOIT vs FOUT**
FOIT (Font Of Invisible Text) is the behaviour the browser is normally having when loading an external (web)font. The text will only show if the webfont is found and loaded. 

FOUT (Font of Unstyled Text) is a method which alllows us to allways show the font (unstyled: so not loaded, while the external (web) font is still getting loaded. When this (web) font is succesfully loaded it will be added.

**How I implemented this*
```
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: local('Raleway Medium'), local('Raleway-Medium'), url(https://fonts.gstatic.com/s/raleway/v10/CcKI4k9un7TZVWzRVT-T8wzyDMXhdD8sAj6OAJTFsBI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}

body, button, input, select, textarea   { 
    font-size: 16px; font: 1em/1.4 sans-serif;  
}

.fonts-loaded body {
  font-family: 'Raleway', sans-serif;
}
```

The body gets a normal sans-serif font. So this font will show first. After the external (web)font is loaded (HTTP request) it gets added to the body afterwards. This will be done with the JavaScript library: [FontFaceObserver](https://github.com/bramstein/fontfaceobserver)

**The code in my JS file**
```
APP.fonts = (function () {

function init() {
    var observer = new FontFaceObserver('Raleway');        
    Promise.all([
      observer.check()
    ]).then(function () {
        document.documentElement.className += "fonts-loaded";
    });
}

return {
    init: init
};

}());
```

As result of adding these two changes:

![HTTP request](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/fonts_images.png)

An increase in load time from 1.33s --> 1.58s (25ms)...

### Conclusion
Adding a gulp pipeline to concatenate and minify JS + CSS helps alot with the load time, which makes sense because the files will reduce in size size. Adding a FOUT solution to my webfonts increases the load time again with 25ms. But in order to make FOUT work i needed to add a library (FontFaceObserver) and some additional JavaScript code, which means 1 HTTP request more and an increase in file size. 


### EXTRA: Staging + Production environment


### EXTRA: Cookies
