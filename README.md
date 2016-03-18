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
![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/service-worker.png)

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

