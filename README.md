# Performance Matters
Tested *without** throttling, so with a standard WiFi connection.

## Performance tracking: opdr 1

### Start with tracking
** 0 - The first screenshot without any changes.**
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

Andddd it's gone... More ms has been added because of more JS code.

### EXTRA: Cricital CSS + Gulp
![alt tag](https://raw.githubusercontent.com/sennykalidien/looklive-server/student/sennykalidien/timeline/critical-css.png)

Yes, we are winning again!

### Conclusion
We won some great speed, mostly with optimizing header image and removing jQuery. Cricical CSS + gulp helped too, with half a second.