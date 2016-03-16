# Performance Matters
Tested *without** throttling, so with a standard WiFi connection.

## Performance tracking: opdr 1

### Start with tracking
**0 - The first screenshot without any changes.**
![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/start.png)

### With Semantic HTML and CSS optimisation
**0 - Changed HTML elements to HTML5 elements.**

**1 - Added CSS classes according to the BEM method.**

**2 - Changed CSS markup (for example: FlexBox instead of floating).**

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