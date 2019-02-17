# demo of using node as back-end

# resources
https://malcoded.com/posts/angular-backend-express

# initialize the project
```
node init
node install express --save
```

install forever
npm install forever -g

keep watch file change
forever -w ./server.js

forever --watch --watchDirectory ./path/to/dir --watchIgnore *.log ./start/file


# use exporess
const express = require("express");

# start the server

```
const app = express();

app.listen(8000, () => {
    console.log('Server started!');
});
```

node server
npm start

# use body praser

npm install body-parser --save

# install CORS

npm install cors --save