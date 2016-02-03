#LeapSphero.js

Currently works with: Sphero 2.0, requires Node.js

##Installation

Visit these two pages to install Leap Motion for Node & Sphero.js

https://github.com/motdotla/writings/blob/master/articles/posts/beginners-guide-to-leap-motion-with-nodejs.md

https://github.com/orbotix/sphero.js

Additionally, use the sphero.js instructions to locate your Sphero's port and edit this part of the code:

```javascript
var sphero = require("sphero"),
    orb = sphero("/dev/rfcomm0"); // change port accordingly
```
