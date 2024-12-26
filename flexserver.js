Last login: Thu Nov 21 08:26:57 on ttys012
/dev/fd/12:18: command not found: compdef
mukeshkumarr@Mukeshs-MacBook-Air ~ % nano flex.js





















  UW PICO 5.09                     File: flex.js                      Modified  

const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('flexfit')); // Replace 'public' with your project folder

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});









File Name to write : flex.js                                                    
^G Get Help  ^T  To Files                                                     
^C Cancel    TAB Complete                                                     
